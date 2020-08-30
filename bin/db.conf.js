const user = 'user';
const pwd = 'user';
const dbName = 'todo-list';

exports.url = `mongodb+srv://${user}:${pwd}@database.8ylyg.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;