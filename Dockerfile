FROM node:18.17.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

RUN npm install -g serve

EXPOSE 3500

CMD ["npm", "run", "start:prod"]
#CMD ["node", "dist/main.js"]
#CMD ["serve", "-l", "3500", "./dist"]
