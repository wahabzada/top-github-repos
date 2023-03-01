describe("repos", () => {
  const searchTerm = "Python"

  it(`lists repos for ${searchTerm}: using the trending search button`, () => {
    cy.visit("http://localhost:3000/")

    cy.get('[data-testid="search-btn"]').should("be.disabled")
    cy.get('[name="search-input"]').should("be.empty")

    cy.contains("button", `${searchTerm}`).click()
    cy.url().should("include", `language=${searchTerm}`)

    cy.get('[data-testid="repo-list"]')
      .children()
      .its("length")
      .should("eq", 30)

    cy.contains("button", "most stars").click()
    cy.contains("button", "recently added").click()
    cy.url().should("include", "sort=recently_added")
  })

  it(`lists repos for ${searchTerm}: using the search box `, () => {
    cy.visit("http://localhost:3000/")

    cy.get('[data-testid="search-btn"]').should("be.disabled")
    cy.get('[name="search-input"]').should("be.empty")

    cy.get('[name="search-input"]')
      .type(`${searchTerm}`)
      .then(() => cy.get('[data-testid="search-btn"]').click())

    cy.url().should("include", `language=${searchTerm}`)

    cy.get('[data-testid="repo-list"]')
      .children()
      .its("length")
      .should("eq", 30)

    cy.contains("button", "most stars").click()
    cy.contains("button", "recently added").click()
    cy.url().should("include", "sort=recently_added")
  })
})

export {}
