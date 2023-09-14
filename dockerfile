# docker build -t tx-nginx .
# docker run -d -p 3003:3003 tx-nginx

FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY dist /dist

EXPOSE 3003

CMD ["nginx","-g","daemon off;"]
