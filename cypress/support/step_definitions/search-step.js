import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open website zero bank", () => {
  cy.visit("http://zero.webappsecurity.com/index.html");
});

When("I field keyword online in Search and enter", () => {
  cy.get("#searchTerm").type("online {enter}");
});

Then("I should see search results page", () => {
  cy.get("h2").should("be.visible").and("contain", "Search Results:");
});