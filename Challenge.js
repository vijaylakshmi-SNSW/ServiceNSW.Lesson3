let people = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Dana",
        age: 46
    },
    {
        name: "Jade",
        age: 19
    },
    {
        name: "Jim",
        age: 12
    }
];

function searchByChar(array, searchTerm) {
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        let found = false;
        for(let i = 0; i < element.name.length; i++){
            let letter = element.name[i];
            if(letter.toLowerCase() == searchTerm.toLowerCase()){
                found = true;
            }
        }

        if(found) {
            resultArr.push(element);
        }
    }
    return resultArr;
}

console.log(searchByChar(people, "A"));