# CovidPortal

Features Of Corona Portal

Website Link: http://covidapp19-vineet.surge.sh/dashboard

- Realtime Statistics of Corona cases in India.
- Precautions
- Latest News
- Add Latest News
- Login functionality

Default Credentials of Login
## Username: admin
## Password: Admin@1234

Functionalities:
- OnRefresh the user will not logout from the portal 
- Only admin can post the comments
- Proper validation of forms fields.
- InMemory Web Api is used for news and other data
- corona stats public apis
    For fetching the details of the covid stats, use https://api.covid19india.org/data.json 
    For districts data, use https://api.covid19india.org/state_district_wise.json 
- Onclicking the state it will show the details of districts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
