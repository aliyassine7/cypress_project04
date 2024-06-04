/// <reference types="cypress" />

import ToDoPage from "../../pages/ToDoPage";

const toDoPage = new ToDoPage();

const validateListIsEmpty = () => {
  toDoPage
    .getEmptyTaskList()
    .should("have.text", "No tasks found!")
    .and("have.length", 1);
};

describe("ToDo List Form Tests", () => {
  beforeEach(() => {
    cy.clickCard("Project - Todo List");
  });

  it("Test Case 01 - Todo-App Modal Verification", () => {
    toDoPage.getToDoAppModalTitle().should("have.text", "My Tasks");
    toDoPage.getNewToDoInputField().should("be.enabled");
    toDoPage.getAddButton().should("be.enabled");
    toDoPage.getSearchField().should("be.enabled");
    validateListIsEmpty();
  });

  it("Test Case 02 - Single Task Addition and Removal", () => {
    toDoPage.typeAndEnterNewTask("task 1");
    toDoPage.getListItems().should("have.text", "task 1");
    toDoPage.getListItems().should("have.length", 1);
    toDoPage.getListButtons().click();
    toDoPage
      .getSpecificListIcon(0)
      .should("have.attr", "class", "panel-icon has-text-success");
    toDoPage.clickRemoveCompletedTasksButton();
    validateListIsEmpty();
  });

  const list = ["task 1", "task 2", "task 3", "task 4", "task 5"];

  it("Test Case 03 - Multiple Task Operations", () => {
    list.forEach((elem, index) => {
      toDoPage.typeAndEnterNewTask(elem);
      toDoPage.getSpecificListItems(index).should("have.text", elem);
      toDoPage.clickListButtons(index);
    });
    toDoPage.clickRemoveCompletedTasksButton();
    validateListIsEmpty();
  });

  it("Test Case 04 - Search and Filter Functionality in todo App", () => {
    list.forEach((elem, index) => {
      toDoPage.typeAndEnterNewTask(elem);
      toDoPage.getSpecificListItems(index).should("have.text", elem);
    });
    toDoPage.typeInSearchBar(list.at(-1));
    toDoPage
      .getListItems()
      .should("have.length", 1)
      .and("have.text", list.at(-1));
  });

  it.only("Test Case 05 - Task Validation and Error Handling", () => {
    toDoPage.typeAndEnterNewTask("");
    validateListIsEmpty();
    toDoPage.typeAndEnterNewTask("1234567891011121314151617181920");
    toDoPage
      .getErrorMessage()
      .should("have.text", "Error: Todo cannot be more than 30 characters!");
    toDoPage.typeAndEnterNewTask(list[0]);
    toDoPage.getListItems().should("have.length", 1);
    toDoPage.typeAndEnterNewTask(list[0]);
    toDoPage
      .getErrorMessage()
      .should(
        "have.text",
        `Error: You already have ${list[0]} in your todo list.`
      );
  });
});
