describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.servicetitan.am');
    cy.get("#menu .nav-item").contains("Job Openings").click();
    cy.contains("a","Senior Quality Automation Engineer")
        .should('have.attr', 'href', "https://servicetitan.wd1.myworkdayjobs.com/ServiceTitan/job/Yerevan-Armenia/Senior-Automation-Engineer_JR105813-1");

  })
})