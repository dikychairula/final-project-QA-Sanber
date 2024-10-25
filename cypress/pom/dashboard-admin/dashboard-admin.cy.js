export default class adminPage{
  static verifyAdminPage(){
    return cy.get('h5').contains('System Users');
  }
  static verifyAddUserPage(){
    return cy.get('h6').contains('Add User');
  }
  static inputUsername(){
    return cy.get('[name="username"]');
  }
  static inputPassword(){
    return cy.get('[name="password"]');
  }
  static AddUserinputPassword(){
    return cy.get('[type="password"]').eq(0);
  }
  static AddUserinputConfirmPassword(){
    return cy.get('[type="password"]').eq(1);
  }
  static searchDropdown(){
    return cy.get('.oxd-select-text');
  }
  static inputSearchUsername(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(1);
  }
  static inputEmployee(){
    return cy.get('[placeholder="Type for hints..."]');
  }
  static validationUsernameFound(){
    return cy.get('div[data-v-6c07a142]').eq(0);
  }
  static buttonSubmit(){
    return cy.get('[type="submit"]');
  }
  static buttonAddUser(){
    return cy.contains('button', 'Add');
  }
}