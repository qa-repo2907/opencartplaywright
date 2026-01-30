import { faker } from "@faker-js/faker";

export class RandomDataUtil
{
    static getFirstName()
    {
        return faker.person.firstName();
    }
    static getLasttName()
    {
        return faker.person.lastName();
    }
    static email()
    {
        return faker.internet.email();
    }
    static getCity()
    {
        return faker.location.city();
    }
    static getPhoneNumber()
    {
        return faker.phone.number();
    }
}