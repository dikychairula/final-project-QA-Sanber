export default class ForgotPasswordPage {
  static verifyHomePage(){
    return cy.get('h5').contains('Login');
  }
  static linkForgotPasswordPage(){
    return cy.get('.oxd-text--p.orangehrm-login-forgot-header').contains('Forgot your password?');
  }
  static verifyForgotPasswordPage() {
    return cy.get('h6').contains('Reset Password');
  }
  static inputUsername(){
    return cy.get('[name="username"]');
  }
  static buttonSubmit(){
    return cy.get('[type = "submit"]');
  }
  static verifyResetPasswordSuccessMessage() {
    return cy.get('h6').contains('Reset Password link sent successfully');
  }
}