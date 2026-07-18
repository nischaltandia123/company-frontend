# Dependencies
FROM node:22-alpine AS deps

WORKDIR /app

COPY package*.json ./
RUN npm install

# Production
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules

COPY package*.json ./
COPY .next ./.next
COPY public ./public
COPY next.config.ts ./

EXPOSE 3000

CMD ["npm", "start"]