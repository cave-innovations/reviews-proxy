const app = require('./app');
const {port} = require('./app');
console.log(port);

app.listen(app.port, () => console.log(`Sever is listening on port ${app.port}`));