FROM node:22-alpine3.18

WORKDIR /app

COPY client/ ./

EXPOSE 3000

CMD ["npm", "run", "dev"]