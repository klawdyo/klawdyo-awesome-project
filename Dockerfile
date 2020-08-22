FROM node:13-slim
WORKDIR /app
ADD . /app

# env:
# - 'CAND_ENV=staging'
# - 'ADMIN_URL=https://staging.candidapp.com.br'
# - 'API_URL=https://staging.api.candidapp.com.br'

ENV CAND_ENV=staging
ENV ADMIN_URL=https://staging.candidapp.com.br
ENV API_URL=https://staging.api.candidapp.com.br

CMD node server.js
