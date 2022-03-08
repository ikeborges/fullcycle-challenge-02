FROM nginx:1.21.6

WORKDIR /etc/nginx/conf.d/

RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.disabled

COPY nginx.conf .
