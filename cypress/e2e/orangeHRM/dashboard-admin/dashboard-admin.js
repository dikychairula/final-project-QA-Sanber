import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import adminPage from "../../../pom/dashboard-admin/dashboard-admin.cy";

describe('System Users Manage Test', () => {
  //Login to dashboard
  Given('I logged in as admin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    
    cy.intercept('GET', '**action-summary').as('actionSummary');
    cy.get('button[type="submit"]').click();
    cy.wait('@actionSummary').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    cy.wait(2000);
  });

  //navigation to Admin page
  When('I navigate to the System Users page', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?*').as('adminUsers');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    cy.wait(3000);
    cy.wait('@adminUsers').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
      expect(intercept.response.body).to.have.property('data');
    });
  });
  When('I should see the "System Users" header', () => {
    adminPage.verifyAdminPage().should('have.text', 'System Users');
  });

  //   Search by Username
  //*[@class="oxd-input oxd-input--active"]
  When('I fill the search username', () => {
    cy.get('[class = "oxd-input oxd-input--active"]').eq(1).type('Admin');
  });
  Then('I click search', () => {
    cy.get('button[type="submit"]').click();
    cy.wait(4000)
  });
  When('I should see what I find', () => {
    cy.get('div[data-v-6c07a142]').eq(0).should('have.text', 'Admin');
  });

  //  Search by User Role
  When('I click on dropdown role', () => {
    cy.get('.oxd-select-text').eq(0).click();
    cy.contains('ESS').click();
  });  
  When('should see what I find', () => {
    cy.get('div[data-v-6c07a142]').eq(1).should('have.text', 'ESS');
    cy.viewport(1400,924)
  });


  //Add a new User
  
  When('I click on the "Add" button', () => {
    cy.contains('button', 'Add').click();
    cy.wait(2000);
  });
  When('I should see the "Add User" header', () => {
    adminPage.verifyAddUserPage().should('have.text', 'Add User');
  });
  When('I fill user role', () => {
    cy.get('.oxd-select-text').eq(0).click();
    cy.contains('ESS').click();
  });
  When('I fill status', () => {
    cy.get('.oxd-select-text').eq(1).click();
    cy.contains('Enabled').click();
  });

  When('I fill the username', () => {
    //*[@class='oxd-input oxd-input--active']
    cy.get('[class = "oxd-input oxd-input--active"]').eq(1).type('johnnathan');
    cy.wait(8000);
    cy.contains('John Doe').click();
  });
  When('I fill and choose employee', () => {
    cy.get('[placeholder="Type for hints..."]').type('John Doe');
    cy.wait(8000);
    cy.contains('John Doe').click();
  });
  When('I fill the password', () => {
    cy.get('[type = "password"]').eq(0).type('Kmzwa8awaa');
  });
  When('I fill the confirm password', () => {
    cy.get('[type = "password"]').eq(1).type('Kmzwa8awaa');
  });
  Then('Then I click on submit', () => {
    cy.get('[type="submit"]');
  })
  

});
