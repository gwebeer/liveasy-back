# Como rodar Back-End

Para poder rodar o _back-end_ é necessário criar um arquivo <code>.env</code> no diretório principal do projeto.

Ex.:

```
- liveasy-back/
    - src/
    - .env
    - ...
```

## Configurando <code>.env</code>

Abra o arquivo <code>.env</code> e insira os seguintes dados:

```
DB_CONNECTION_STRING = <db_connection>
PORT = <port>
SECRET_TOKEN = <token>
```

Altere os valores <code>db_connection</code>, <code>port</code> e <code>token</code>. 

## Ativando o Back-End

No diretório principal do projeto, abra um terminal e rode os seguintes comandos:

Esse comando irá baixar todas as dependências do programa:
-  `npm install`

Após instaladas as dependências e configurado o <code>.env</code>, execute o esse comando: 
- `npm start`

## Ativando o Front-End

Acesse o [repositório](https://github.com/gwebeer/liveasy-front) do Front-End e siga as [instruções](https://github.com/gwebeer/liveasy-front#readme) para ativá-lo.