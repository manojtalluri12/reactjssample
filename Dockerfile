# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install a simple server to serve the React app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Define the command to run the server
CMD ["serve", "-s", "build"]
