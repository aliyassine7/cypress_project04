/// <reference types="cypress" />

import ToDoPage from "../../pages/ToDoPage";

const toDoPage = new ToDoPage();

describe("ToDo List Form Tests", () => {
  beforeEach(() => {
    cy.clickCard("Project - Todo List");
  });

  it("Test Case 01 - Todo-App Modal Verification", () => {
    toDoPage.getToDoAppModalTitle().should("have.text", "My Tasks");
    toDoPage.getNewToDoInputField().should("be.enabled");
    toDoPage.getAddButton().should("be.enabled");
    toDoPage.getSearchField().should("be.enabled");
    toDoPage
      .getTaskList()
      .should("have.text", "No tasks found!")
      .and("have.length", "1");
  });

  it.only("Test Case 02 - Single Task Addition and Removal", () => {
    
  });

  it("Test Case 03 - Multiple Task Operations", () => {});

  it("Test Case 04 - Search and Filter Functionality in todo App", () => {});

  it("Test Case 05 - Task Validation and Error Handling", () => {});
});
