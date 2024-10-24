import LoginPage from "../../../pom/login/login.cy";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

describe('Login Test', () => {

  Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
  });
  
  //scenario for valid Login
  When('I should see the homepage', () => {
    LoginPage.verifyLoginPage().should('have.text', 'Login');
  });
  When('I submit the Username', () => {
    LoginPage.inputUsername().type('Admin');
  });
  When('I submit the Password', () => {
    LoginPage.inputPassword().type('admin123');
  });
  Then('I click the button Login', () =>{
    cy.intercept('GET', '**action-summary').as('actionSummary');
    LoginPage.buttonSubmit().click();
    cy.wait('@actionSummary').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
  })
  //no need intercept button
  Then('click the button Login', () =>{
    LoginPage.buttonSubmit().click();
  })
   
  //Scenario for Login with invalid USername
  When('I submit the invalid Username', () => {
    LoginPage.inputUsername().type('akun123');
  });

  //Scenario for Login with invalid Password
  When('I submit the invalid Password', () => {
    LoginPage.inputPassword().type('Kmzwa8awaa');
  });

  //error message invalid credential
  Then('I should see an error message', () => {
    LoginPage.invalidCredentials().should('have.text', 'Invalid credentials');
  });

  //error message require
  Then('I should see an require username message', () => {
    LoginPage.requireUsernameMessage().eq(0);
  });
  Then('I should see an require password message', () => {
    LoginPage.requirePasswordMessage().eq(1);
  });

});