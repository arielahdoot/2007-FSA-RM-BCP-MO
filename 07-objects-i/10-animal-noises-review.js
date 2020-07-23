let animalNoises = [
    { 'dog': {
      'America' : 'Woof! Woof!',
      'Germany' : 'Wau Wau!',
      'England' : 'Bow wow!',
      'Uruguay' : 'Jua jua!',
      'Afrikaans' : 'Blaf!',
      'Korea' : 'Mong mong!',
      'Iceland' : 'Voff voff!',
      'Albania' : 'Ham!',
      'Algeria' : 'Ouaf ouaf!'
      }
    },
    { 'cat': {
      'America' : 'Meow',
      'Germany' : 'Miauw!',
      'England' : 'mew mew',
      'Uruguay' : 'Miau Miau!',
      'Afrikaans' : 'Purr',
      'Korea' : 'Nyaong!',
      'Iceland' : 'Kurnau!',
      'Albania' : 'Miau',
      'Algeria' : 'Miaou!'
      }
    },
    { 'chicken': {
      'America' : 'Cluck cluck',
      'Germany' : 'tock tock tock',
      'England' : 'Cluck Cluck',
      'Uruguay' : 'gut gut gdak',
      'Afrikaans' : 'kukeleku',
      'Korea' : 'ko-ko-ko',
      'Iceland' : 'Chuck-chuck!',
      'Albania' : 'Kotkot',
      'Algeria' : 'Cotcotcodet'
      }
    }
  ];
  
  function petSounds(animal, country){
    // 'dog', 'Iceland'
    
    for (let i = 0; i < animalNoises.length; i++) {
      // { ANIMAL_NAME: ANIMAL_NOISE_INFO }
      
      // currentAnimal => { dog : {}}
  
      // currentAnimal => { cat: {}}
  
      // currentAnimal => { chicken: {}}
      const currentAnimal = animalNoises[i];
      if (animal in currentAnimal) {
        // investigate further
        // animal => 'dog'
        // currentAnimal => {dog : {}}
        
        
      // animalNoises =>   {
      // 'America' : 'Woof! Woof!',
      // 'Germany' : 'Wau Wau!',
      // 'England' : 'Bow wow!',
      // 'Uruguay' : 'Jua jua!',
      // 'Afrikaans' : 'Blaf!',
      // 'Korea' : 'Mong mong!',
      // 'Iceland' : 'Voff voff!',
      // 'Albania' : 'Ham!',
      // 'Algeria' : 'Ouaf ouaf!'
      // }
        // currentAnimal['dog']
        const animalNoises = currentAnimal[animal]
        // noiseInCountry => 'Voff voff!'
        const noiseInCountry = animalNoises[country];
        
        const animalName = animal[0].toUpperCase() + animal.slice(1) + 's';
        
        return `${animalName} in ${country} say ${noiseInCountry}`
      } else {
        // 
        continue;
      }
    }
  }