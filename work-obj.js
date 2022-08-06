const myCity = {
    city: 'Zaporizhzhya',
    info: {
        isPopular: true
    },
    cityGreeting: function () {
        console.log(myCity);
    }
}

console.log(myCity);

myCity.country = 'Ukraine';

console.log(myCity);

const myNameAndSurname = 'user';

myCity[myNameAndSurname] = 'Dovgal Dima';

console.log(myCity);

delete myCity.info['isPopular'];

console.log(myCity);

delete myCity.info;

console.log('info delete: ');
console.log(myCity);

console.log('myCity function cityGreeting: ');
myCity.cityGreeting();

