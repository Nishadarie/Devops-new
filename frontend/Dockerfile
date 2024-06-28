# Use a specific Node.js version (replace <version> with the version you need)
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Update dependencies if needed
RUN npm update


# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "start"]
