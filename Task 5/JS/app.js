const users = [{ id: 1, age: 17},
              { id: 2, age: 18},
              { id: 3, age: 19},
              { id: 4, age: 21},
              { id: 5, age: 17},
              { id: 6, age: 20},
              { id: 7, age: 25},]

function selectionAge(users) {
    const ages = (users.filter(users => users.age > 18 && users.age < 21));
    let total = '';
    ages.forEach(element => total += `${element.id}, `);
    console.log(total);
};

selectionAge(users);