# Use an official Node.js runtime as the base image
FROM node:14.19.3

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app (if applicable)
# RUN npm run build

# Expose a port (if needed, for example, for a Node.js server)
# EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]

