import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import adminPage from "../../../pom/dashboard-admin/dashboard-admin.cy";

describe('System Users Manage Test', () => {
  //Login to dashboard
  Given('I logged in as admin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
    adminPage.inputUsername().type('Admin');
    adminPage.inputPassword().type('admin123');
    
    cy.intercept('GET', '**action-summary').as('actionSummary');
    adminPage.buttonSubmit().click();
    cy.wait('@actionSummary').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    cy.wait(2000);
  });

  //navigation to Admin page
  When('I navigate to the System Users page', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users*').as('adminUsers');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    cy.wait(4000);
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
    adminPage.inputSearchUsername().type('Admin');
  });
  Then('I click search', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users*').as('adminUsers');
    adminPage.buttonSubmit().click();
    cy.wait(4000)
    cy.wait('@adminUsers').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
      expect(intercept.response.body).to.have.property('data');
    });
  });
  When('I found the username', () => {
    adminPage.validationUsernameFound().should('have.text', 'Admin');
  });

  //  Search by User Role
  When('I click on dropdown role', () => {
    adminPage.searchDropdown().eq(0).click();
    cy.contains('ESS').click();
  });  
  When('I found the role', () => {
    cy.get('div[data-v-6c07a142]').eq(1).should('have.text', 'ESS');
  });

  //  Search by User Status
  When('I click on dropdown status', () => {
    adminPage.searchDropdown().eq(1).click();
    cy.contains('Enabled').click();
  });  
  When('I found the status', () => {
    cy.get('div[data-v-6c07a142]').eq(3).should('have.text', 'Enabled');
  });

  //Search Unregistered Name
  When('I fill with unregistered username', () => {
    adminPage.inputSearchUsername().type('Saad Man');
  });
  Then('I click search button', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users*').as('adminUsers');
    adminPage.buttonSubmit().click();
    cy.wait(6000)
    cy.wait('@adminUsers').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
      expect(intercept.response.body.data).to.have.lengthOf(0);
    });
  });
  When('I not found the username', () => {
    cy.get('div[data-v-6c07a142]').should('not.exist');
  });


  //Add a new User
  When('I click on the "Add" button', () => {
    adminPage.buttonAddUser().click();
    cy.wait(2000);
  });
  When('I should see the "Add User" header', () => {
    adminPage.verifyAddUserPage().should('have.text', 'Add User');
  });
  When('I fill user role', () => {
    adminPage.searchDropdown().eq(0).click();
    cy.contains('ESS').click();
  });
  When('I fill status', () => {
    adminPage.searchDropdown().eq(1).click();
    cy.contains('Enabled').click();
  });

  When('I fill the username', () => {
    adminPage.inputSearchUsername().type('parkerpeter');
  });
  When('I fill and choose employee', () => {
    adminPage.inputEmployee().type('Peter');
    cy.wait(7000);
    cy.contains('Peter Mac Anderson').click();
  });
  When('I fill the password', () => {
    adminPage.AddUserinputPassword().type('Kmzwa8awaa');
  });
  When('I fill the confirm password', () => {
    adminPage.AddUserinputConfirmPassword().type('Kmzwa8awaa');
  });
  Then('I click on submit', () => {
    cy.intercept('POST', '**/validation/password').as('validationPassword');
    adminPage.buttonSubmit().click();
    cy.wait('@validationPassword').then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
  })

});
