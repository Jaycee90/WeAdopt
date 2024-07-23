# # Use an official Node.js runtime as a parent image
# FROM node:20

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install the dependencies
# RUN npm install

# # Copy the rest of your application code
# COPY . .

# # Build the React app
# RUN npm run build

# # Use a lightweight web server to serve the static files
# FROM nginx:alpine

# # Copy the build output from the previous stage
# COPY --from=0 /app/dist /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]




# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 80
EXPOSE 3000

# Serve the app using serve
CMD ["serve", "-s", "dist", "-l", "3000"]