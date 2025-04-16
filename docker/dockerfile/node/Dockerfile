FROM node:20-alpine
RUN apk add g++ make py3-pip

WORKDIR /var/www/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "start"]
