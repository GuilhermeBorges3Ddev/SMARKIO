# SMARKIO
---
### Tecnologias: React.JS + Node API + MySQL 
---
__API Consumida:__

- __[OpenWeatherMap](https://openweathermap.org/api)__ - 
 Retorna na interface os dados: nome da cidade pesquisada, sigla do país da cidade buscada, temperatura, umidade,                
latitude e longitude.
---
### **Instruções para executar o projeto:** 
---
#### **1) Crie um diretório para clonar o projeto:**
Um exemplo seria criar um diretório `/git`:

```
mkdir git
```
---
#### **2) Clone o projeto no diretório criado:**
Basta rodar a diretiva `git clone` abaixo:

    --> Execute o comando no path: /git/
    cd git
    git clone https://github.com/GuilhermeBorges3Ddev/SMARKIO.git
---
#### **3) Baixe as dependências para poder rodar o projeto:**
Repare que foi criado o diretório `SMARKIO/`, após a clonagem.  
Entre então no novo diretório para instalar as dependências:
```
cd SMARKIO/aplicacao/
yarn
----> Observação: ao invés de 'yarn' pode-se usar 'npm install'
``` 
---
#### **4) Renderize o frontend:**
Abra uma nova aba do seu terminal acessando o mesmo caminho `/SMARKIO/aplicacao`, executando assim o seguinte comando:

    cd /SMARKIO/aplicacao
    yarn start
    --> Observação: aqui também pode-se optar por usar 'npm start'

##### Em caso de sucesso você verá o seguinte retorno no terminal:

<img src="https://user-images.githubusercontent.com/19985305/68077884-92c28500-fdaa-11e9-92d6-d9b687f0b7b3.png" alt="Your image title" width="100%" height="6%"/>

##### Com esta mensagem de sucesso basta abrir o link gerado pelo **yarn start** em seu navegador; você logo verá o frontend consumindo a <u>API OpenWeatherMap</u>; para isso acontecer corretamente digite um `nome` de uma cidade existente e a `sigla do país` desejado, como no caso da cidade de "São Paulo" com sigla "BR" referente ao país Brasil:

<img src="https://user-images.githubusercontent.com/19985305/68078019-1d0be880-fdad-11e9-8915-45f363c5e042.png" width="100%" height="11%"/>

##### Para o caso do frontend não rodar por algum motivo, verifique se o computador possui o pacote `create-react-app` instalado; caso não haja a instalação basta rodar um dos dois comandos abaixo: 
    npm install -g create-react-app
    yarn global add create-react-app
---
#### **5) Conecte-se ao MySQL para ligarmos ao frontend:** 
Tendo o frontend já funcionando com a consulta dos dados climáticos de qualquer cidade, temos o lado esquerdo do app pronto. Abra o seu <u>MySQL Workbench</u> e crie uma database para ser manipulada pelo Node.JS posteriormente; segue o comando para execução no Query Tool:
    
    CREATE DATABASE smarkioWeather;
    
Com a database criada, podemos usar o script contido no diretório: `/SMARKIO/aplicacao/backend`. Esse script em questão deve ser executado em um segundo terminal, diferente do primeiro terminal que não deve ser parado, pois lá o frontend permanece em execução. Nesse novo terminal digite os comandos abaixo, os quais criam a conexão com o <u>phpMyAdmin</u> e populam a tabela `cidadeClima`, que também é criada  automaticamente pelo script:

    cd SMARKIO/aplicacao/backend
    node callAPI.js

---
#### **6) Teste a conexão entre backend e frontend com o Node:**
Nesse ponto final do app, temos dois terminais abertos, um com o frontend e outro com a API Node acessando nosso MySQL. Além disso, são executadas em background as listagens do "Top 5 cidades buscadas" e "Buscas recentes". Para testar os resultados pode-se executar as seguintes requisições HTTP:

| URL           | Tipo de Requisição|
| ------------- |:-------------:|
| http://localhost/cidades/                 | GET           |
| http://localhost/maisPesquisadas/         | GET           |
| http://localhost/recentementePesquisadas/ | GET           |

Estas mesmas URL's disparadas automaticamente pelo Node.JS fazem funcionar o lado direito do frontend; que até então era inativo.
 
***

::: 
***(c) Código e documentação**: Guilherme S. Borges*
:::
