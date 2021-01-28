describe ("Login with fixture checking", () => {

    before (function () {
        cy.fixture('example').then(function(filedata){
            globalThis.mydata = filedata;
        })
    })

    it("Login with fixture", function (){
        cy.visit('/index.php')
        cy.login(mydata.email,mydata.password);
    })
    
    })