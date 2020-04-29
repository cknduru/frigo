FROM node
WORKDIR frigo
COPY app.js .
COPY package.json .
RUN npm config set package-lock false
RUN npm install cors express
CMD ["node", "app.js"]