FROM node:10-alpine

ARG COMMIT_DIR
ENV COMMIT_DIR ${COMMIT_DIR}

WORKDIR /usr/src/app/${COMMIT_DIR}

COPY ${COMMIT_DIR}/package*.json ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY ./${COMMIT_DIR} .

EXPOSE 8080
CMD [ "node", "lambda.js" ]
