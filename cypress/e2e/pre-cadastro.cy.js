/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Devo completar o pre cadastro', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('123456')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Larissa')
        cy.get('#account_last_name').type('Bravo')
        cy.get('.woocommerce-Button').click()
        
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    //Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.

});