FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install serve
RUN yarn global add serve

# Install app dependencies
COPY package.json ./
RUN yarn install

# Bundle app source
COPY . .

# Build the app
RUN yarn build

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["serve", "-s", "build"]