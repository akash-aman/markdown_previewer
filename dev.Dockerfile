FROM node:18-alpine

WORKDIR /app

# Copy lock files if file exists
COPY package.json yarn.lock* package-lock.json* ./

RUN yarn install

VOLUME [ "/app/pages","/app/components","/app/fonts","/app/styles","/app/public","/app/images","/app/plugins","/app/data"]
COPY next.config.js .
COPY katex.min.css .
COPY .npmrc .

CMD yarn dev
