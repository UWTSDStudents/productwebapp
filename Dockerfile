#### DOCKERFILE FOR STATIC WEB APP ##############

# Use nginx for development purposes
# We do not have to deploy to nginx in the cloud
FROM nginx:1.25.1
COPY nginx.conf /etc/nginx/nginx.conf

# Expose our webapp port number
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]




