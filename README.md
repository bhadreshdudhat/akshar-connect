# AksharConnect

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


--------

ng new akshar-connect --skipTests=true --prefix=ac

ng g m account --routing
ng g c account/login --skipTests
ng g c account/register --skipTests
ng g c account/reset-password --skipTests


ng g m core
ng g c core/header --skipTests


ng g m --routing attendance
ng g c attendance/attendance --skipTests
ng g c attendance/attendance-report --skipTests

ng g m --routing profile
ng g c profile/profile --skipTests --flat
ng g c profile/education --skipTests
ng g c profile/family --skipTests
ng g c profile/insurance --skipTests
ng g c profile/occupation --skipTests
ng g c profile/sabha --skipTests
ng g c profile/social-profiles --skipTests
ng g c profile/view-profile --skipTests

 ng g c core/dashboard --skipTests
