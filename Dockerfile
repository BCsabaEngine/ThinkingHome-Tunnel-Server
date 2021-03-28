FROM node:current-alpine

WORKDIR /tunnel

COPY package.json /tunnel/
COPY package-lock.json /tunnel/

RUN npm install --prod

COPY . /tunnel

ENV NODE_ENV production
ENTRYPOINT ["node", "./index.js"]
