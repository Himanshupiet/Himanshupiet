From node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY . .
COPY .env.production .
RUN npm run build
EXPOSE 3005
CMD ["npm", "start"]
