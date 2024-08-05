const express = require('express')
const mySQL = require('mysql')
const app = express()
const PORT = 3004
const HOST = '0.0.0.0'
const config = {
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'node'
}
let name = ''
let names = ''
function createname() {
    const firstname = ['Thiago','Victor','Gustavo','Ricardo','Jorge','Luiz','Marcos']
    const secondname = ['Marques','Bora','Rosa','Nogueira','Amado','Santos','Carvalho']
    let randomfirst = Math.floor(Math.random()*firstname.length)
    let randomsecond = Math.floor(Math.random()*secondname.length)
    return name = `${firstname[randomfirst]} ${secondname[randomsecond]}`
}
createname()
const connection = mySQL.createConnection(config)
const createTable = `CREATE TABLE IF NOT EXISTS users (id int not null auto_increment, name varchar (255), primary key (id));`
const insertUser = `INSERT INTO users(name) values('${name}')`
connection.query(createTable)
connection.query(insertUser)
connection.query(`SELECT name FROM users;`, function(_errors, results, _fields) {
    const isResult = results !== null && results.length > 0
    if (isResult) return results.map(result => names += `${result.name}<br>`)
})
app.get('/', (_request, response) => {
    response.send(`<h1>Welcome</h1><br><div>${names}</div>`)
})

app.listen(PORT, HOST)