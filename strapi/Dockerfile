FROM node:18

WORKDIR /app

COPY . .

ENV NODE_OPTIONS=--max-old-space-size=2048

# Install dependencies including pg
RUN yarn install && yarn add pg

# Build the Strapi app
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
