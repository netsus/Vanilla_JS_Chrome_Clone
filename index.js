// Create Object

const cwjinfo = {
    name: "cwj",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Aling the gods",'LOTR',"SweetHome"],
    favFood: 
    [
        {name:"Kimchi", fatty:false},
        {name:"Cheese burger", fatty:true}
    ]
}

console.log(cwjinfo.gender);

// Object can be changed
cwjinfo.gender = "Female"

console.log(cwjinfo.gender);

console.log(cwjinfo);

console.log(cwjinfo.favFood[10].name);