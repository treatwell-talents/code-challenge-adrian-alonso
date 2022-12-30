describe("Challenge Chat", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });

  it("show username prompt", () => {
    cy.get("button").should("have.text", "Start the chat");
  });

  it("login with a new user", () => {
    cy.get("input").type(`myusername`);
    cy.get("button").click();
    cy.get("button").should("have.text", "Send");
  });

  it("show chat when username is in session", () => {
    cy.get("input").type(`myusername`);
    cy.get("button").click();
    cy.reload();
    cy.get("button").should("have.text", "Send");
  });

  it("write new message", () => {
    cy.get("input").type(`myusername`);
    cy.get("button").click();

    cy.get("input").type(`new message`);
    cy.get("button").click();

    cy.get("div.message")
      .should("have.length", 1)
      .should(() => {
        expect(JSON.parse(localStorage.getItem("messages"))).to.length(1);
      });
  });

  it("write some messages", () => {
    cy.get("input").type(`myusername`);
    cy.get("button").click();

    cy.get("input").type(`new message`);
    cy.get("button").click();

    cy.get("input").type(`another message`);
    cy.get("button").click();

    cy.get("div.message").should("have.length", 2);
  });

  it("retrieve some messages with same username", () => {
    cy.get("input").type(`myusername`);
    cy.get("button").click();

    cy.get("input").type(`new message`);
    cy.get("button").click();

    cy.clearAllSessionStorage();
    cy.reload();

    cy.get("input").type(`myusername`);
    cy.get("button").click();

    cy.get("div.message").should("have.length", 1);
  });

  it("autocomplete last message", () => {
    cy.get("input").type(`myusername`);
    cy.get("button").click();

    cy.get("input").type(`new message`);
    cy.get("button").click();

    cy.get("input").type(`another message`);
    cy.get("button").click();

    cy.get("input").type(`{upArrow}`);
    cy.get("input").should("have.value", "another message");
    cy.get("input").type(` additional text`);

    cy.get("button").click();

    cy.get("div.message").should("have.length", 3);
  });
});
