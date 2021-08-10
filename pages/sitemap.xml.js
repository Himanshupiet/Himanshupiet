import React from "react";
import fs from "fs";
import {bindActionCreators} from "redux";
import * as blogActions from "../actions/blog";
import {connect} from "react-redux";
import {withRouter} from "next/router";
// import { documents as documentsQuery } from "../graphql/queries/Documents.gql";
// import client from "../graphql/client";

const Sitemap = () => {
};

export const getServerSideProps = async ({res}) => {
    const baseUrl = {
        development: "http://localhost:3500",
        production: "https://jdev.decipherzone.com/marraforni",
    }[process.env.NODE_ENV];

    const staticPages = fs
        .readdirSync("pages")
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "sitemap.xml.js",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${baseUrl}/${staticPagePath}`;
        });

    // const { data } = await client.query({ query: documentsQuery });
    const documents = data?.documents || [];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
            return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${documents
        .map(({_id, updatedAt}) => {
            return `
              <url>
                <loc>${baseUrl}/documents/${_id}</loc>
                <lastmod>${updatedAt}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
        })
        .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

// export default Sitemap;
const mapStateToProps = ({blog}) => {
    return {blog}
}

const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(blogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sitemap))