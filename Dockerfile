# building react app => node
FROM node:alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

# to minimize what to deploy to only build folder
RUN npm run build

# ---------------------Now to run it in the server --------

FROM nginx:alpine

# now copy everthing we build into this docker image
COPY --from=build /app/build /usr/share/nginx/html

# remove nginx default file => create folder called nginx
#  create nginx configuration file in nginx folder set routs the copy rout
RUN rm /etc/nginx/conf.d/default.conf

# reference inginx file 
COPY nginx/nginx.conf /etc/nginx/conf.d

# expose to port 80 as always
EXPOSE 80

# now run nginx
CMD ["nginx","-g", "daemon off;"]


