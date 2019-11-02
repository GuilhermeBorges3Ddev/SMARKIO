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
function addRows(conn){
    const sql = "INSERT INTO cidadeClima(cidade, pais, temperatura, umidade, latitude, longitude) VALUES ?";
    const values = [
        ['Miami Vice', 'US', 28.7, 45, 25.77, 80.20],
        ['Sao Paulo Dist', 'BR', 29.43, 54, 23.55, 46.63],
        ['Savassi Area', 'BR', 27.09, 57, 19.92, 43.95],
        ['Ski Montain City', 'AR', 26.33, 45, 34.61, 58.44],
        ['Montevideu do Norte', 'URU', 24, 24, 6.06, 42.74]
    ];
    conn.query(sql, [values], function (error, results, fields){
    if(error) return console.log(error);
    console.log('adicionou registros!');
    conn.end();//fecha a conexão
    });
}
///////////////////////////////////////////// LISTA TODAS AS CIDADES E CLIMAS /////////////////////////////////////////////////


///////////////////////////////////////////// LISTA AS 5 CIDADES MAIS PESQUISADAS /////////////////////////////////////////////


///////////////////////////////////////////// LISTA AS ÚLTIMAS 5 CIDADES PESQUISADAS //////////////////////////////////////////


////////////////////////////////////////// Força a criação da tabela "cidadeClima" caso não tenha sido criada em queriesSQL.sql
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
