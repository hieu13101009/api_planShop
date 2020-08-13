FROM node:12
RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g pm2
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]