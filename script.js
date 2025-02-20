//your code here
() => { 
    cy.get(".card.bg-danger")
        .should('exist')
        .contains("Alert"); 
}