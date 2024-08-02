const express = require('express')
const mySQL = require('mysql')
const app = express()
const port = 3004
const config = {
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'node'
}
let name = ''
let names = ''
function createname() {
    const firstname = ['Galáxia','Sol','Terra','Nuvem','Planta','Pedra','Mato']
    const secondname = ['Frio','Quente','Rosa','Amargo','Liso','Verde','Seco']
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

app.listen(port, () => {
    console.log(`⑆ Rodando na porta ${port}`)
})