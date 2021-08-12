const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
        async redirects() {
            return [
                {
                    source: '/neapolitan-brick-ovens',
                    destination: '/product/neapolitan-brick-ovens',
                    permanent: true
                },
                {
                    source: '/faq-draft',
                    destination: '/faqs',
                    permanent: true
                },
                {
                    source: '/connect',
                    destination: '/contact',
                    permanent: true
                },
                {
                    source: '/sp',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/mock-up-request',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/due-bocche',
                    destination: '/product/due-bocche',
                    permanent: true
                },
                {
                    source: '/ventilation',
                    destination: '/product/ventilation',
                    permanent: true
                },
                {
                    source: '/mixers/',
                    destination: '/product/mixers',
                    permanent: true
                },
                {
                    source: '/enclosed-facade',
                    destination: '/product/enclosed-facade',
                    permanent: true
                },
                {
                    source: '/prep_tables',
                    destination: '/product/prep_tables',
                    permanent: true
                },
                {
                    source: '/pizza-oven-tools-and-accessories',
                    destination: '/product/pizza-oven-tools-and-accessories',
                    permanent: true
                },
                {
                    source: '/discover-the-rotator-brick-oven',
                    destination: '/product/discover-the-rotator-brick-oven',
                    permanent: true
                },
                {
                    source: '/neapolitan',
                    destination: '/product/neapolitan',
                    permanent: true
                },
                {
                    source: '/metal-square',
                    destination: '/product/metal-square',
                    permanent: true
                },
                {
                    source: '/mobile',
                    destination: '/product/mobile',
                    permanent: true
                },
                {
                    source: '/electric',
                    destination: '/product/electric',
                    permanent: true
                }
            ]
        }
    }
  }

  return {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    /* config options for all phases except development here */
      async redirects() {
          return [
              {
                  source: '/neapolitan-brick-ovens',
                  destination: '/product/neapolitan-brick-ovens',
                  permanent: true
              },
              {
                  source: '/faq-draft',
                  destination: '/faqs',
                  permanent: true
              },
              {
                  source: '/connect',
                  destination: '/contact',
                  permanent: true
              },
              {
                  source: '/sp',
                  destination: '/',
                  permanent: true
              },
              {
                  source: '/mock-up-request',
                  destination: '/',
                  permanent: true
              },
              {
                  source: '/due-bocche',
                  destination: '/product/due-bocche',
                  permanent: true
              },
              {
                  source: '/ventilation',
                  destination: '/product/ventilation',
                  permanent: true
              },
              {
                  source: '/mixers/',
                  destination: '/product/mixers',
                  permanent: true
              },
              {
                  source: '/enclosed-facade',
                  destination: '/product/enclosed-facade',
                  permanent: true
              },
              {
                  source: '/prep_tables',
                  destination: '/product/prep_tables',
                  permanent: true
              },
              {
                  source: '/pizza-oven-tools-and-accessories',
                  destination: '/product/pizza-oven-tools-and-accessories',
                  permanent: true
              },
              {
                  source: '/discover-the-rotator-brick-oven',
                  destination: '/product/discover-the-rotator-brick-oven',
                  permanent: true
              },
              {
                  source: '/neapolitan',
                  destination: '/product/neapolitan',
                  permanent: true
              },
              {
                  source: '/metal-square',
                  destination: '/product/metal-square',
                  permanent: true
              },
              {
                  source: '/mobile',
                  destination: '/product/mobile',
                  permanent: true
              },
              {
                  source: '/electric',
                  destination: '/product/electric',
                  permanent: true
              }
          ]
      }
  }
}
