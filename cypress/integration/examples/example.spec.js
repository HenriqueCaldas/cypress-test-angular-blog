const { createYield } = require("typescript")

describe('Primeiro Teste', () => {
    it('Examples Cypress', () => {
        createYield.visit('https//example.cypress.io')
        expect(true).to.equal(true)
    })
})