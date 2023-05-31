# Stage 1: Build the Next.js app
FROM node:alpine as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built Next.js app
FROM node:alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app/package*.json ./
RUN npm install --production

COPY --from=build-stage /app/.next ./.next

EXPOSE 3333

CMD ["npm", "run", "dev"]
