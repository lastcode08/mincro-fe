describe("testttt", () => {
  it("should add an item to the cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#app").click();
    cy.get("#showlogin").click();
    cy.get("#loginbtn").click();
    cy.get("#addtocart_1").click();
    cy.get("#addtocart_2").click();
    cy.get("#showcart").click();
    cy.get("#showcart").click();
    cy.get("#to_cart").click();
    cy.get("#grandtotal").should("contain", "$14.98");
    cy.get("#clearcart").click();
  });
});
