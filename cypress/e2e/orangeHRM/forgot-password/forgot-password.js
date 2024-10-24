import ForgotPasswordPage from "../../../pom/forgot-password/forgot-password.cy";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe('Forgot Password Test', () => {
  Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(8000);
  });
  When('I should see the homepage', () => {
    ForgotPasswordPage.verifyHomePage().should('have.text', 'Login');
  });
  When('I click on the "Forgot Password" link', () => {
    ForgotPasswordPage.linkForgotPasswordPage().click();
  });
  Then('I should see the Reset Password page', () => {
    ForgotPasswordPage.verifyForgotPasswordPage().should('have.text', 'Reset Password');
  });

  When('I submit my username', () => {
    ForgotPasswordPage.inputUsername().type('Admin');
  });

  When('I click the submit button', () => {
    ForgotPasswordPage.buttonSubmit().click();
  });

  Then('I should see the message "Reset Password link sent successfully"', () => {
    ForgotPasswordPage.verifyResetPasswordSuccessMessage()
    .should('have.text', 'Reset Password link sent successfully');
  });
  
});