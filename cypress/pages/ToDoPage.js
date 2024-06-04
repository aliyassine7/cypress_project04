/// <reference types="cypress" />

class ToDoPage {
  // Locators
  getToDoAppModalTitle() {
    return cy.get(".panel-heading");
  }

  getNewToDoInputField() {
    return cy.get("#input-add");
  }

  getAddButton() {
    return cy.get("#add-btn");
  }

  getSearchField() {
    return cy.get("#search");
  }

  getEmptyTaskList() {
    return cy.get(".todo-item > p");
  }

  getListItems() {
    return cy.get("#panel");
  }

  getSpecificListItems(index) {
    return this.getListItems().children().eq(index);
  }

  getListButtons() {
    return cy.get(".mr-auto .panel-icon");
  }

  getSpecificListIcon(index) {
    return this.getListButtons().eq(index);
  }

  getRemoveCompletedTasksButton() {
    return cy.get("#clear");
  }

  getErrorMessage() {
    return cy.get(".notification");
  }

  // Methods
  typeAndEnterNewTask(message) {
    this.getNewToDoInputField().clear().type(`${message}{enter}`);
  }

  clickRemoveCompletedTasksButton() {
    this.getRemoveCompletedTasksButton().click();
  }

  clickListButtons(index) {
    this.getSpecificListIcon(index).click();
  }

  typeInSearchBar(input) {
    this.getSearchField().clear().type(input);
  }
}

export default ToDoPage;
