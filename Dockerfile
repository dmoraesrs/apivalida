FROM node

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json yarn.lock $HOME/library/

RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/library

RUN yarn cache clean

USER root

COPY . $HOME/library

RUN chown -R app:app $HOME/*

USER app

RUN yarn

RUN yarn build

CMD ["yarn", "start"]
