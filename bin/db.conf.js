'use strict';

/* Arquivo de configuração do usuário.
* Troque apenas o dbname, para criar o seu banco
* para a aplicação.
*/

const user = 'user';
const pwd = 'user';
const dbName = 'todo-list';

exports.url = `mongodb+srv://${user}:${pwd}@database.8ylyg.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;