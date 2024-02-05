FROM node:18-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/

COPY package.json package-lock.json ./

RUN npm install --exclude=dev

COPY ./grpc-server .

EXPOSE 50051

CMD ["node", "server.js"]