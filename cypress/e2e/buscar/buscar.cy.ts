/// <reference types="cypress" />

import moment = require("moment");

describe("funcionalidade Buscar", () => {
    context("Cenarios de realizar uma busca com sucesso", () => {
        beforeEach(() => {
            cy.visit('/')
          })

            it("Realizar a busca de todos os artigos encontrados a partir de uma frase completa no título", () => { //Nome do cenário de testes
                let titulo = "Vale refeição: o que é e como funciona o benefício";
                cy.get('.icon-search:nth-child(2) > svg').click();
                cy.get('#search-field').type(`${titulo}{enter}`)
                cy.get('.page-title').invoke('text').then(($value) => {
                cy.log($value)
                expect($value).to.eq(' Resultados encontrados para: Vale refeição: o que é e como funciona o benefício ')
                })
            });

            it("Realizar a busca de todos os artigos encontrados a partir de uma única palavra no campo de busca", () => { //Nome do cenário de testes
                let palavra = "imposto";
                cy.get('.icon-search:nth-child(2) > svg').click();
                cy.get('#search-field').type(`${palavra}{enter}`)
                cy.get('#post-6362 > .ast-post-format- > .post-content > .entry-title').invoke('text').then((Text) => {
                    expect(Text.toString().toLowerCase()).to.contain(palavra);
                });
                cy.get('#post-5499 > .ast-post-format- > .post-content > .entry-title > a').invoke('text').then((Text) => {
                    expect(Text.toString().toLowerCase()).to.contain(palavra);
                });
                cy.get('#post-6362 > .ast-post-format- > .post-content > .entry-header > .entry-meta > .posted-on > .published').invoke('text').then(($value_1) => {
                    cy.get('#post-5499 > .ast-post-format- > .post-content > .entry-header > .entry-meta > .posted-on > .published').invoke('text').then(($value_2) => { 
                        var dataTitulo1 = moment($value_1).format('YYYY-MM-DD');
                        var dataTitulo2 = moment($value_2).format('YYYY-MM-DD');
                        let resultado = dataTitulo1 < dataTitulo2;
                        expect(resultado).to.eq(true)
                    })
                }) 
            });

            it("Não encontrar nenhum resultado esperado para a busca desejada", () => {
                let titulo = "sdfghjkjhg";
                cy.get('.icon-search:nth-child(2) > svg').click();
                cy.get('#search-field').type(`${titulo}{enter}`)
                cy.get('.page-content > p').invoke('text').then(($value) => {
                  cy.log($value)
                  expect($value).to.eq('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
                })
            });
    });
});