function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  const obj = {}

  for ( let i =  0; 10000; i++){
    const number = Math.floor(Math.random()* 20 +1)
    if (!obj[number]) {obj[number] =1} else {obj [number]++ }
  } 

  console.log(obj);