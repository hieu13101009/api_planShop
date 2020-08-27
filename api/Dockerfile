FROM node:12
RUN npm config set registry http://registry.npmjs.org/
RUN npm i -g pm2

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
RUN npm i

COPY . .

EXPOSE 8080

CMD [ "pm2-runtime", "ecosystem.config.js"]