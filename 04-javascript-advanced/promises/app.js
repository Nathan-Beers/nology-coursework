// What is a promise
// A promise has 3 states... pending, resolved and rejected


// let nathansPromise = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// });

// nathansPromise
//     .then((message) => {
//         console.log(`${message} I am in the THEN`)
//     })
//     .catch((message) => {
//         console.log(`${message} I am in the CATCH`)
//     });

// API requests
// https://randomuser.me/api/

// const heading = document.querySelector('.user');
// const userAge = document.querySelector('.age');
// const getRandomUser = () => {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(json => heading.innerHTML = `${json.results[0].name.first} ${json.results[0].name.last}`)
//         .catch(err => console.log(err))
// };

// const getUserAge = () => {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(json => userAge.innerHTML = `Age: ${json.results[0].registered.age}`)
//         .catch(err => console.log(err))
// }

// getRandomUser();
// getUserAge();


// Mini challenge
// https://api.punkapi.com/v2/beers/random
// Card format (div)
// -name(h1) -tagline(h4) -description(p) -abv(h2/3) -the first food that pairs well(p)

const makeBeerCard = beer => {
    return `
    <div class="container">
        <div class="card">
            <h1>${beer.name}</h1>
            <h4>${beer.tagline}</h4>
            <p>${beer.description}</p>
            <h3>${beer.abv}%</h3>
            <p>Served best with: ${beer.food_pairing[0]}</p>
        </div>
    </div>`
}


const getBeerInformation = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(res => res.json())
        .then(json => document.body.innerHTML += makeBeerCard(json[0]))
        .catch(err => console.log(err));
}

getBeerInformation();

