export default class SelectablePage {
  static visit() {
    cy.visit("https://demoqa.com/selectable");
  }

  static clickGridTab() {
    cy.get("#demo-tab-grid").click();
  }

  static getGridItem(text) {
    return cy.contains(".list-group-item", text);
  }

  static clickGridItem(text) {
    SelectablePage.getGridItem(text).click();
  }

  static isItemHighlighted(text) {
    return SelectablePage.getGridItem(text).should("have.class", "active");
  }

  static isItemNotHighlighted(text) {
    return SelectablePage.getGridItem(text).should("not.have.class", "active");
  }
}
