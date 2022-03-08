const app = require('express')()
const mysql = require('mysql2/promise')
const db_config = require("./db_config.json")

const PORT = 3000
let count = 0

app.get("/", async (req, res) => {
  const name = req.query["name"] || "Sample name " + count
  count++

  const connection = await mysql.createConnection(db_config)

  await connection.execute(`INSERT INTO people(name) VALUES('${name}');`)
  const [rows, fields] = await connection.execute('SELECT * FROM people;')

  await connection.end()

  const response = ["<h1>Full Cycle Rocks!</h1>"]

  response.push("<ul>")
  for (let person of rows)
    response.push(`<li>${person.name}</li>`)
  response.push("</ul>")

  res.send(response.join("\n"))
})


app.listen(PORT, async () => {
  const connection = await mysql.createConnection(db_config)
  await connection.execute(`CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY(id));
  `)
  await connection.end()
  console.log(`Listening on port ${PORT}...`)
})
