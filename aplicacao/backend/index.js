// Na execução, por favor, coloque o seu USER, PASSWORD e a sua DATABASE
const mysql = require('mysql');
const connection = mysql.createConnection({
 host : 'localhost',
 port : 3306,
 user : 'root',
 password : 'password',
 database : 'smarkioWeather'
});

///////////////////////////////////////////// INSERÇÃO ////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////// LISTA TODAS AS CIDADES E CLIMAS /////////////////////////////////////////////////


///////////////////////////////////////////// LISTA AS 5 CIDADES MAIS PESQUISADAS /////////////////////////////////////////////


///////////////////////////////////////////// LISTA AS ÚLTIMAS 5 CIDADES PESQUISADAS //////////////////////////////////////////


// Força a criação da tabela "cidadeClima" caso não tenha sido criada em queriesSQL.sql
function createTable(conn){
    const sql = "CREATE TABLE IF NOT EXISTS cidadeClima (\n"+
    "id_cidade int AUTO_INCREMENT PRIMARY KEY,\n"+
    "cidade varchar(200) NOT NULL,\n"+
    "pais char(150) NOT NULL,\n"+
    "temperatura float,\n"+
    "umidade float,\n"+
    "latitude float,\n"+
    "longitude float,\n"+
    ");";
   
    conn.query(sql, function (error, results, fields){
    if(error) return console.log(error);
    console.log('Tabela dos dados climáticos das cidades criada!');
    });
}
