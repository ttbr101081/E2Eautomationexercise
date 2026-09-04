const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Generate a random email for uniqueness across test runs
const randomEmail = `testuser_${Math.floor(Math.random() * 100000)}@example.com`;
const name = 'Usuario Cypress';
const password = 'Password123';

Given('que visito la página de inicio {string}', (url) => {
  cy.visit(url);
});

When('hago clic en {string}', (text) => {
  if(text === 'Signup / Login') {
      cy.get('a[href="/login"]').click();
  } else {
      cy.contains(text).click();
  }
});

When('completo el formulario de registro con un correo electrónico generado', () => {
  cy.contains('h2', 'New User Signup!').should('be.visible');
  cy.get('[data-qa="signup-name"]').type(name);
  cy.get('[data-qa="signup-email"]').type(randomEmail);
  cy.get('[data-qa="signup-button"]').click();
});

When('termino de completar el resto de mi información de cuenta', () => {
  cy.contains('b', 'Enter Account Information').should('be.visible');

  // Personal details
  cy.get('#id_gender1').check(); // Mr.
  cy.get('[data-qa="password"]').type(password);
  cy.get('[data-qa="days"]').select('1');
  cy.get('[data-qa="months"]').select('1');
  cy.get('[data-qa="years"]').select('2000');

  // Address info
  cy.get('[data-qa="first_name"]').type('Test');
  cy.get('[data-qa="last_name"]').type('User');
  cy.get('[data-qa="company"]').type('Test Company');
  cy.get('[data-qa="address"]').type('123 Test St');
  cy.get('[data-qa="address2"]').type('Apt 4B');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('NY');
  cy.get('[data-qa="city"]').type('New York');
  cy.get('[data-qa="zipcode"]').type('10001');
  cy.get('[data-qa="mobile_number"]').type('1234567890');
});

When('hago clic en Crear Cuenta', () => {
  cy.get('[data-qa="create-account"]').click();
});

Then('veo el mensaje {string}', (message) => {
  cy.get('[data-qa="account-created"]').should('be.visible').invoke('text').then((text) => {
    expect(text.trim().toLowerCase()).to.equal(message.toLowerCase());
  });
});

When('hago clic en el botón Continuar', () => {
  cy.get('[data-qa="continue-button"]').click();
});

When('cierro la sesión de mi cuenta', () => {
  cy.get('a[href="/logout"]').click();
});

When('completo mis credenciales en el formulario de inicio de sesión', () => {
  cy.contains('h2', 'Login to your account').should('be.visible');
  cy.get('[data-qa="login-email"]').type(randomEmail);
  cy.get('[data-qa="login-password"]').type(password);
});

When('hago clic en el botón Login', () => {
  cy.get('[data-qa="login-button"]').click();
});

Then('veo que estoy logueado correctamente con mi nombre', () => {
  cy.contains(`Logged in as ${name}`).should('be.visible');
});

Then('elimino la cuenta para limpiar el entorno', () => {
  cy.get('a[href="/delete_account"]').click();
  cy.get('[data-qa="account-deleted"]').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});
