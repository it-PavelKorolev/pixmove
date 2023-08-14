describe('ToDo List Test', () => {
  it('should perform actions on ToDo list', () => {
    // Перейти на сайт
    cy.visit('https://forhemer.github.io/React-Todo-List/');

    // Добавить 3 элемента в ToDo лист
    cy.get('input:first').type('Task 1{enter}');
    cy.get('input:first').type('Task 2{enter}');
    cy.get('input:first').type('Task 3{enter}');

    // Проверить, что элементов в листе стало 3
    cy.get('li').should('have.length', 3);

    // Пометить один элемент как выполненный
    cy.get('li:first-child').within(() => {
      cy.get('[type="checkbox"]').check(); 
      });
    
    // Проверить, что текст этого элемента стал зачёркнутым
    cy.get('li:first-child span').should('have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)');

    // Удалить элемент из списка
    cy.get('li:first-child').within(() => {
      cy.get('button').click(); 
      });

    // Проверить, что элемент больше не отображается в списке
    cy.get('li').should('have.length', 2);
  });
});  