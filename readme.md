
# Cria um projeto
project: klawdyo-awesome-project

# Abre o cloud shell

## 1. Cria uma pasta para o projeto

```
  dir: klawdyo-awesome-project
```

## 2. Cria os arquivos do projeto.

## 3. Cria o arquivo do servidor

```js
  const http = require('http')
  const server = http.createServer((req, res) =>{
      console.log('nova conexao')
      res.end('hello awesome')
  })

  const PORT = process.env.PORT || 8080;

  server.listen(PORT, ()=>console.log('listening'))
```

## 4. Cria o arquivo docker

```docker
  FROM node:13-slim
  WORKDIR /app
  ADD . /app
  CMD node server.js
```

## 5. Constrói a imagem do docker

```sh
  docker build -t awesome-project .

  # Parâmetros
  # -t = Nome do container (TAG)
  #O ponto no final é para dizer ao docker que todos os arquivos serão usados
```

## 6. Coloca a imagem do docker para rodar

```sh
  docker run -it -p 8080:8080 awesome-project

  # Parâmetros
  # -it               Interactive to see the Terminal.
  # -p                Portas expostas.  A porta do docker será
  #                   8080 e será mapeada para a porta 8080 da
  #                   máquina em que ele estará rodando.
  # awesome-project   Tag usada para dar nome ao container.
```

## 7. Abre o Cloud Build

Vídeo: [12min](https://youtu.be/GhSAQ19f4HA?t=779)
Abre "Acionadores", clica em "Conectar repositório", seleciona a opção "Github (espelhado)", marca o checkbox de autorização, seleciona o repositório avança.
Na tela seguinte clica em "Adicionar acionador"

### 7.1. Configurar o acionador

O acionador é um evento que o google cloud vai aguardar vindo do github para saber que houve uma modificação no repositório original.

Cada vez que acontecer o evento lá, o google puxa para cá e atualiza aqui.

### 7.2. Nome da Imagem
gcr.io/klawdyo-awesome-project/klawdyo-awesome-project:$SHORT_SHA

```sh
docker build -t gcr.io/klawdyo-awesome-project/klawdyo-awesome-project:$SHORT_SHA  .
```

Após clicar em salvar, retorna para a página inicial do histórico e manda executar o acionador clicando em "Executar acionador"

## Trocar a configuração do acionador para yaml

```yaml
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: ['build', '-t', 'gcr.io/klawdyo-awesome-project/klawdyo-awesome-project:$SHORT_SHA', '.']
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'gcr.io/klawdyo-awesome-project/klawdyo-awesome-project:$SHORT_SHA']
- name: 'gcr.io/cloud-builders/gcloud'
  args: ['beta', 'run', 'deploy', 'klawdyo-awesome-project', '--region=us-central1', '--platform=managed', '--image=gcr.io/klawdyo-awesome-project/klawdyo-awesome-project:$SHORT_SHA']
```

## Comando para testar se o último build deu certo

```sh
gcloud beta run deploy klawdyo-awesome-project --region=us-central1  --platform=managed --image=gcr.io/klawdyo-awesome-project/klawdyo-awesome-project:d43b044
```

