"use strict";

const Chance      = require("chance"),
      chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ["/avatars/005-space ship.png","/avatars/009-alien.png","/avatars/012-alien.png","/avatars/014-alien.png", "/avatars/015-alien.png", "/avatars/031-alien.png", "/avatars/035-alien.png", "/avatars/040-alien.png", "/avatars/047-alien.png", "/avatars/050-alien.png", "/avatars/001-abduction.png"],
      Male: ["/avatars/019-alien.png","/avatars/020-alien.png","/avatars/021-alien.png","/avatars/023-alien.png", "/avatars/029-abducting.png", "/avatars/032-alien.png", "/avatars/036-alien.png", "/avatars/037-alien.png", "/avatars/039-alien.png", "/avatars/041-alien.png"]
    
    }
    
    const avatarArray = avatars[gender]
    const userAvatar = avatarArray[Math.floor(Math.random()*avatarArray.length)]
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};