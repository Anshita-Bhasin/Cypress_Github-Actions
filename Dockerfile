FROM cypress/browsers:node18.12.0-chrome107

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "npm", "run", "npm run cypress" ]
