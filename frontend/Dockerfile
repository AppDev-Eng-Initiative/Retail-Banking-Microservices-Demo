#build react
FROM node:10-alpine as react-build
WORKDIR .
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN touch .env.production
RUN echo 'REACT_APP_DOMAIN=http://localhost' >> .env.production
RUN yarn build
#copy artifacts for thin image
FROM nginx:alpine
COPY --from=react-build /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]