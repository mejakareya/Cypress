describe ("dropdown checking", () => {
it("Select Value", function (){
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
    cy.get('#dropdowm-menu-1').select('JAVA');
    cy.get('#dropdowm-menu-2').select('JUnit');
    cy.get('#dropdowm-menu-3').select('HTML');

    cy.get("input[value='option-1']").check().should('be.checked');

    cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
})

})