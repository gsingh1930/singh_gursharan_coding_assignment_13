FROM node:20-alpine
WORKDIR /singh_gursharan_ui_garden_build_checks
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-storybook
RUN npm install -g http-server
EXPOSE 8018
CMD ["http-server", "storybook-static", "-p", "8018"]