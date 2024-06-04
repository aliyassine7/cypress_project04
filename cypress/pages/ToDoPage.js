/// <reference types="cypress" />

class ToDoPage {

  // Locators
  getToDoAppModalTitle() {
    return cy.get('.panel-heading')
  }

  getNewToDoInputField() {
    return cy.get('#input-add')
  }

  getAddButton() {
    return cy.get('#add-btn')
  }

  getSearchField() {
    return cy.get('#search')
  }

  getTaskList() {
    return cy.get('.todo-item > p')
  }



  // Methods
  typeAndEnterNewTask() {
    this.getNewToDoInputField()
  }
}

export default ToDoPage;