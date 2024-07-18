# Use an official Node.js runtime as the base image
FROM node:21-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining application files to the container
COPY . /app

# Set the environment variable to development
RUN npm install --save-dev typescript

# Build the React app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 4173

# Set the command to start the app with the --host flag
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
