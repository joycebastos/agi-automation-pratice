# language: pt
Funcionalidade: Realizar busca no blog
  Eu como um cliente agibank
  Quero realizar buscas no blog
  Para visualizar os conteúdos relacionados do meu interesse

  Cenario: Realizar a busca de todos os artigos encontrados a partir de uma frase completa no título
    Dado que cliquei no botão buscar
    E inseri o texto "Vale refeição: o que é e como funciona o benefício"
    Quando clicar enter
    Entao devo visualizar uma lista de resultos com o texto inserido
    E resultados devem ser exibidos por data mais recente

  Cenario: Realizar a busca de todos artigos encontrados a partir de uma palavra chave no título
    Dado que cliquei no botão buscar
    E inseri a palavra "imposto"
    Quando clicar enter
    Entao devo visualizar uma lista de resultos com a palavra inserida
    E resultados devem ser exibidos por data mais recente

  Cenario: Não encontrar nenhum resultado esperado para a busca desejada
    Dado que cliquei no botão buscar
    E inseri a palavra "addhasdhus"
    Quando clicar enter
    Entao devo visualizar a mensagem "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras"
