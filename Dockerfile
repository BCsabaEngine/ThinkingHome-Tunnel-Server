FROM node:current-alpine

WORKDIR /tunnel

COPY package.json /tunnel/
COPY yarn.lock /tunnel/

RUN npm install --prod

COPY . /tunnel

ENV NODE_ENV production
ENTRYPOINT ["node", "./index.js"]
