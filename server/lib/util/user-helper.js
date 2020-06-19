"use strict";

const Chance      = require("chance"),
      chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    // const gender    = chance.gender();
    // const firstName = chance.first({gender: gender});
    // const lastName  = chance.last();
    
    const firstName = ['Andromeda', 'Antlia', 'Apus', 'Aquarius', 'Aquila', 'Apollo', 'Ara', 'Aries', 'Atlas','Auriga', 'Boötes', 'Caelum', 'Camelopardalis', 'Cancer', 'Comet', 'Cupid', 'Venatici', 'Capricornus', 'Carina', 'Cassiopeia', 'Centaurus', 'Cepheus', 'Cetus', 'Chamaeleon', 'Circinus', 'Columba', 'Coma', 'Berenices', 'Corona', 'Borealis', 'Corvus', 'Crater', 'Crux', 'Cygnus', 'Delphinus', 'Dorado', 'Draco', 'Equuleus', 'Eridanus', 'Fornax', 'Galileo', 'Gemini', 'Grus', 'Hercules', 'Horologium', 'Hydra', 'Hydrus', 'Indus', 'Jupiter', 'Luke', 'Lacerta', 'Leo', 'Lepus', 'Libra', 'Lupus', 'Lynx', 'Lyra', 'Mensa', 'Microscopium', 'Monoceros', 'Musca', 'Neptune', 'Norma', 'Oberon', 'Octans', 'Ophiuchus', 'Orion', 'Pavo', 'Pegasus', 'Perseus', 'Phoenix', 'Pictor', 'Pisces', 'Piscis', 'Pluto', 'Pollux', 'Puppis', 'Pyxis', 'Reticulum', 'Saturn', 'Sagitta', 'Sagittarius', 'Scorpius', 'Sculptor', 'Scutum', 'Serpens', 'Sextans', 'Sirius', 'Skywalker', 'Taurus', 'Telescopium', 'Titan', 'Triangulum', 'Tucana', 'Ursa' , 'Vader', 'Vela', 'Virgo', 'Volans', 'Vulpecula', 'Zenith'];
    
    const lastName = ['Andromeda', 'Antlia', 'Apus', 'Aquarius', 'Aquila', 'Apollo', 'Ara', 'Aries', 'Atlas','Auriga', 'Boötes', 'Caelum', 'Camelopardalis', 'Cancer', 'Comet', 'Cupid', 'Venatici', 'Capricornus', 'Carina', 'Cassiopeia', 'Centaurus', 'Cepheus', 'Cetus', 'Chamaeleon', 'Circinus', 'Columba', 'Coma', 'Berenices', 'Corona', 'Borealis', 'Corvus', 'Crater', 'Crux', 'Cygnus', 'Delphinus', 'Dorado', 'Draco', 'Equuleus', 'Eridanus', 'Fornax', 'Galileo', 'Gemini', 'Grus', 'Hercules', 'Horologium', 'Hydra', 'Hydrus', 'Indus', 'Jupiter', 'Luke', 'Lacerta', 'Leo', 'Lepus', 'Libra', 'Lupus', 'Lynx', 'Lyra', 'Mensa', 'Microscopium', 'Monoceros', 'Musca', 'Neptune', 'Norma', 'Oberon', 'Octans', 'Ophiuchus', 'Orion', 'Pavo', 'Pegasus', 'Perseus', 'Phoenix', 'Pictor', 'Pisces', 'Piscis', 'Pluto', 'Pollux', 'Puppis', 'Pyxis', 'Reticulum', 'Saturn', 'Sagitta', 'Sagittarius', 'Scorpius', 'Sculptor', 'Scutum', 'Serpens', 'Sextans', 'Sirius', 'Skywalker', 'Taurus', 'Telescopium', 'Titan', 'Triangulum', 'Tucana', 'Ursa' , 'Vader', 'Vela', 'Virgo', 'Volans', 'Vulpecula', 'Zenith'];

    
    const randomFirst = firstName[Math.floor(Math.random()*firstName.length)];
    const randomLast = lastName[Math.floor(Math.random()*lastName.length)];
    
    const userName  = randomFirst + " " + randomLast;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix();
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += randomLast;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = ["001.png", "002.png", "003.png", "004.png", "005.png", "009.png", "012.png", "014.png", "015.png", "019.png", "020.png", "021.png", "023.png", "025.png", "026.png", "029.png", "030.png", "031.png", "032.png", "035.png", "036.png", "037.png", "039.png", "040.png", "040.png", "041.png", "042.png", "043.png", "044.png", "045.png", "050.png", "astronaut.png", "space.png"];
    
    const userAvatar = avatars[Math.floor(Math.random()*avatars.length)]
  

    return {
      name: userName,
      handle: userHandle,
      avatars: 'images/' + userAvatar
    };
  }
};