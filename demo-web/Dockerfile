FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm ci && npm run build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/* /usr/share/nginx/html/