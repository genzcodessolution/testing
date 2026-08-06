# 1. Base Image
FROM node:18.8-alpine as base

# 2. Builder Stage
FROM base as builder

# Set working directory
WORKDIR /home/node/app

# Set build-time environment variable to skip MongoDB connection during the build
ENV SKIP_MONGO_TEST=true
ENV BUILD_DOCKER_IMAGE=true  

# Copy only package.json and package-lock.json to leverage Docker caching for `npm ci`
COPY package*.json ./ 

# Install dependencies
RUN npm ci

# Copy all files only after installing dependencies for better cache usage
COPY . .

# Build the project
RUN npm run build

# 3. Runtime Stage
FROM base as runtime

# Set environment variables for runtime
ENV PAYLOAD_CONFIG_PATH=dist/payload/payload.config.js

# Set working directory for runtime
WORKDIR /home/node/app

# Copy package.json and package-lock.json for installing production dependencies
COPY package*.json ./ 

# Install only production dependencies
RUN npm ci --omit=dev

# Copy build artifacts from the builder stage
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build
COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/public ./public
COPY src/payload/hphf-dev.json ./dist/payload/

# Copy configuration and other required JS files for Next.js
COPY *.js ./

# Expose the port your application will run on
EXPOSE 3000

# Command to start the server in production mode
CMD ["npm", "run", "serve"]
