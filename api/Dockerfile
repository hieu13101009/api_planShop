FROM node:12
RUN npm config set registry http://registry.npmjs.org/
RUN npm install -g pm2
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]