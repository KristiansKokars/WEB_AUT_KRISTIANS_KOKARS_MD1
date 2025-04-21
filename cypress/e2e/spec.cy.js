import SelectablePage from "../pageObjects/selectable.page";

describe("Selectable Grid", () => {
  it("should only highlight selected items", () => {
    SelectablePage.visit();
    SelectablePage.clickGridTab();

    const itemsToSelect = ["Two", "Four", "Six", "Eight"];
    for (const item of itemsToSelect) {
      SelectablePage.clickGridItem(item);
    }

    for (const item of itemsToSelect) {
      SelectablePage.isItemHighlighted(item);
    }

    const itemsNotSelected = ["One", "Three", "Five", "Seven", "Nine"];
    for (const item of itemsNotSelected) {
      SelectablePage.isItemNotHighlighted(item);
    }
  });
});
