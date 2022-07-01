FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
RUN apk update && apk add bash
WORKDIR /app
COPY . .
RUN chmod +x ./devops/scripts/wait-for-it.sh
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000