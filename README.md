# CNABReader

## Sobre

### Funcionalidades:
O Back-End do CNABReader é responsável por:
- Interpreta o arquivo CNAB.
- Formata as informações do arquivo.
- Armazenar as informações em um Banco de Dados Relacional.

O Front-End do CNABReader é responsável por:
- Renderizar formulário para requisição de armazenamento no BackEnd de forma amigável.
- Renderizar os dados das transações armazenadas no Banco de Dados Relacional.
- Renderizar os dados das empresas registradas nas transações e de seus respectivos proprietários.

### Tecnologias usadas:
Esse projeto teve seu Front-End programado em JS por meio do framework ReactJS, foi utilizada a biblioteca de estilização Material UI (MUI), o Back-End foi programado em Python por meio do framework Django e Django REST Framework, o Banco de Dados Relacional é implementado por meio do SGBD PostgreSQL.

## Instruções para executar o CNABReader

### Instalação de dependências e configuração de váriaveis de ambiente:
<ol>
<li> Na pasta raiz do projeto crie um ambiente virtual em python por meio dos comando: <code> python -m venv venv</code> </li>
<li> Inicie o ambiente por meio do comando: <code> ./venv/Scripts/Activate.ps1 </code> </li>
<li> Instale os dependências essenciais para o Back-End projeto por meio do comando: <code> pip install -r requirements.txt </code> </li>
<li> Acesse a pasta do Front-End por meio do comando: <code> cd frontend </code> </li>
<li> Instale as dependências esseciais para o Front-End do projeto por meio do comando: <code> yarn install </code> </li>
<li> Crie um banco de dados PostgreSQL. </li>
<li> Preencha as váriaveis de ambiente (.env) conforme o exemplo (.env.example). </li>
</ol>

### Executando o CNABReader:
<ol>
<li> Na pasta raiz do projeto abra um terminal e acesse a pasta backend: <code> cd backend </code> </li>
<li> Execute as migrações do Django por meio do comando: <code> python manage.py migrate </code> </li>
<li> Inicie o servidor Django por meio do comando: <code> python manage.py runserver </code> </li>
<li> Na pasta raiz do projeto abra um novo terminal e acesse a pasta frontend: <code> cd frontend </code> </li>
<li> Inicie o servidor React por meio do comando: <code> yarn start </code> </li>
</ol>

Para a aplicação funcionar corretamente os dois terminais devem ficar em execução.


## Documentação Swagger-UI
endpoint: http://127.0.0.1:8000/api/docs/