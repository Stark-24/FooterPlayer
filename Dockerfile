FROM node:8.9.4-onbuild

WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install

EXPOSE 9004

CMD ["npm", "start" && "node" "database/helper.js"]
