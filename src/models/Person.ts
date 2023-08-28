abstract class Person {
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  constructor(
    firstName: string,
    lastName: string,
    address: string,
    age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.age = age;
  }
  abstract info(): string;
}

export default Person;
