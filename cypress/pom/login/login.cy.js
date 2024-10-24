export default class loginPage{
  static verifyLoginPage(){
    return cy.get('h5').contains('Login');
  }
  static inputUsername(){
    return cy.get('[name="username"]');
  }
  static inputPassword(){
    return cy.get('[name="password"]');
  }
  static buttonSubmit(){
    return cy.get('[type = "submit"]');
  }
  static verifyDashboardPage(){
    return cy.get('h6').contains('Dashboard');
  }
  static invalidCredentials(){
    return cy.get('[class="oxd-alert-content oxd-alert-content--error"]');
  }
  static requireUsernameMessage(){
    return cy.get('.oxd-input-field-error-message');
  }
  static requirePasswordMessage(){
    return cy.get('.oxd-input-field-error-message');
  }
}