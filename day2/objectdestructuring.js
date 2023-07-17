// object destructuring

const band={
    bandName:"rohit",
    famousSong:"kid",
    year:"1923",
    anothersong:1212,

}

// const name= band.bandName;
// const song= band.famousSong;
// console.log(name,song);

const {bandName,famousSong}=band;
console.log(bandName,famousSong);

// change name of key 
let{bandName:var1,famousSong:var2,...restprop} =  band;
console.log(var1,var2);

console.log(restprop);//{year: '1923', anothersong: 1212}