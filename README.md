 ### Passo a Passo
 
 - Instalar o nodejs
 - Instalar o npm
 - Criar diretorio do projeto e executar o comando:
 ```
 npm init -y
 ```
 - Instalar as dependencias
 ```
 npm install http express --save
 ```

 - Instalar o mongoose
 ```
 npm install mongoose
 ```

 - Criar conta no MATLAB (mongoDB)

#### Objeto Lista

 ```javascript
 {
    "title": "minhas pendencias",
    "description": "uma breve descrição",
    "active": true
}
```
Criando apis com nodejs: aula 25


Requests codes:
 - 200 ok
 - 201 created
 - 400 bad request
 - 404 not found
 - 401 unauthorized
 - 403 forbidden
 - 500 internal server error