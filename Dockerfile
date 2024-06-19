# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:16-alpine

# Set the working directory
WORKDIR /

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
COPY /var/www/rent-my-kangoo/.env.local .env.local

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
