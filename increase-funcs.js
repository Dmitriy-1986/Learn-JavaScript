const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1;
    return person;
}

increasePersonAge(personOne);
console.log(personOne.age);
/* Не рекомендовано внутри функции мутировать внешний объект */

function increasePersonAgeTwo(person) {
    const updatedPerson = Object.assign({}, person);
    updatedPerson.age += 1;
    return updatedPerson;
}

const updatedPersonOne = increasePersonAgeTwo(personOne);
console.log(updatedPersonOne.age);
console.log(personOne.age);
