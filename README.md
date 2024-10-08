## Project Name: Assesment

**Description:**
This Angular project features a basic structure with Home, About Us, Resources, and Contact pages. The Contact page includes a form to submit user inquiries, which are then sent via email using EmailJS.

**Technologies Used:**
* Angular
* EmailJS

**Getting Started:**

1. **Prerequisites:**
   - Node.js and npm (or yarn) installed.
   - Angular CLI installed globally (`npm install -g @angular/cli`)
2. **Clone the repository:**
   ```bash
    git clone https://github.com/bhanuasc/mid-assignment-angular.git

3. **Install dependencies:**
   ```bash
    cd your-project
    npm install

4. **Development server:**
   ```bash
    ng serve

5. **Configuration:**

     Replace the placeholder email service configuration in the ContactService with your actual EmailJS credentials.
     Ensure proper CORS configuration for your email API if necessary.

6. **Testing:**
   To run unit tests:
   ```Bash
   ng test


8. **Email Service:**
The project utilizes EmailJS for sending contact form submissions. Ensure you have an EmailJS account and have configured the service accordingly.


# Routeangular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
