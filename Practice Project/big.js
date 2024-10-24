let friends = ['Rahim', 'Karim', "abdul", "Sadaam", "Hero Alam"];

// 1st way
// let big = friends[0]; 

// for(let i = 0; i < friends.length; i++){
//     if(friends[i].length > big.length){
//         big = friends[i];
//     }
// }

// console.log(big);

//2nd way

const checkbigfriend = (friends) => {
    let big = friends[0]; 

    for(let i = 0; i < friends.length; i++){
        if(friends[i].length > big.length){
            big = friends[i];
        }
    }

    return big;
}

console.log(checkbigfriend(friends));