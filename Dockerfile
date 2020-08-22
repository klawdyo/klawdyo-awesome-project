FROM node:13-slim
WORKDIR /app
ADD . /app

# env:
# - 'CAND_ENV=staging'
# - 'ADMIN_URL=https://staging.candidapp.com.br'
# - 'API_URL=https://staging.api.candidapp.com.br'

ENV CAND_ENV=local
ENV ADMIN_URL=http://localhost:8080
ENV API_URL=http://localhost:3333

CMD node server.js
