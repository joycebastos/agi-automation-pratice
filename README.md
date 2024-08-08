# Blog agibank

Prova pratica de automação - agi

## Pré-requisitos:
- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
## Tutorial, Instalação e Execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:** 

1 - instalar módulos e dependências do node
```
npm i
```
2 - Instalar o cypress
```
npm install cypress
```
3 - Instalar o typescript
```
npm install --save-dev typescript
```
### Utilizando o cypress

* Em um terminal execute um dos comandos abaixo para abrir o cypress:
```
npm run cy:open 
```
ou
```
npx cypress open 
```
* Para executar os testes diretamente, sem abrir o Cypress use:
```
npm run cy:test 
```
ou
```
npx cypress run 
```

### Lógica utilizada para os cenários de testes
Todos os cenários de testes foram criados pensando na estrutura do cypress
* describe: geralmente é usada pra agrupar casos de testes de uma funcionalidade
* context : geralmente utilizada para agrupar os cenários de testes de UM CASO de teste
* it: utilizada para implementar o cenário de teste

### Estrutura das pastas
<pre>
📦AGI-AUTOMATION-PRATICE 
 ┣ 📂cypress 
 ┃ ┣ 📂downloads 
 ┃ ┣ 📂e2e  
 ┃ ┃ ┗ 📂buscar  
 ┃ ┃   ┣ 📜buscar.cy.ts 
 ┃ ┣ 📂fixture  
 ┃ ┗ 📂support  
 ┃   ┣ 📂commands
 ┃   ┃ ┗ 📜base_commands.ts   
 ┣ 📜.gitignore  
 ┣ 📜cypress.config.ts 
 ┣ 📜package-lock.json  
 ┣ 📜package.json  
 ┣ 📜README.md
 ┣ 📜tsconfig.json  
 </pre>

Os cenários de testes estão na pasta e2e

### A prova
Funcionalidade a ser testada: Buscar. Foram elencados três cenários envolvendo a funcionalidade buscar. São eles:


* Cenário de uma busca com sucesso a partir de um título completo
 Este cenário valida a busca por um artigo, dentro do blog, com o título exatamente igual ao inserido no campo buscar

* Cenário de busca de todos os artigos encontrados que contém a palavra inserida no campo de busca
 Este cenário valida a busca por todos os artigos encontrados e que contém em seus títulos a palavra inserida no campo buscar. Valida também que o artigo listado mais ao topo possui a data mais recente que o anterior (segundo ao topo)

* Cenário de busca sem nenhum resultado
 Este cenário valida a mensagem quando não é encontrado nenhum resultado esperado com o valor inserido no campo de busca

