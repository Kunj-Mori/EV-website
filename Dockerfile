# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies, including devDependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the app for production
RUN npm run build

# Serve the app using a lightweight web server
RUN npm install -g serve

# Set the command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 to access the app
EXPOSE 3000