# Use an official Node.js runtime as a parent image
FROM node:18.16.0

# Copy the current directory contents into the container at /app
COPY . /app

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./



# Install dependencies
RUN npm install


# Expose port 3000
EXPOSE 3000

# Define the command to run your app using nodemon
CMD ["npx", "nodemon"]
