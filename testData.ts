import { faker } from '@faker-js/faker';

const phoneNumber = faker.random.numeric(9);
const email = faker.internet.email();

export class TestData {
    servicePrice;
    serviceTerm;

    constructor() {
        this.servicePrice;
        this.serviceTerm;
    }
}

export class Insurer {
    readonly lastName: string;
    readonly firstName: string;
    readonly fathersName: string;
    readonly birthDate: string;
    readonly passportNumber: string;
    readonly passportDateFrom: string;
    readonly passportIssuedBy: string;
    readonly phoneNumber: string;
    readonly email: string;
    readonly password: string;

    constructor() {
        this.lastName = "Марія";
        this.firstName = "Анна";
        this.fathersName = "Степанівна";
        this.birthDate = "12.12.1990";
        this.passportNumber = "КС 123456";
        this.passportDateFrom = "01.01.2000"
        this.passportIssuedBy = "Львів";
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = faker.random.alphaNumeric(5);
    }

}


export class RealEstate {
    readonly city: string;
    readonly street: string;
    readonly house: string;
    readonly flat: string;

    constructor() {
        this.city = "м. Київ";
        this.street = "Київська";
        this.house = faker.random.numeric();
        this.flat = faker.random.numeric(2);
    }
    
}
