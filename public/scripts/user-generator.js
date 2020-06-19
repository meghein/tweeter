/* 
** Random avatar and name generator code to change the user profile when the page is refreshed **
*/

const avatars = ["001.png", "002.png", "003.png", "004.png", "005.png", "009.png", "012.png", "014.png", "015.png", "019.png", "020.png", "021.png", "023.png", "025.png", "026.png", "029.png", "030.png", "031.png", "032.png", "035.png", "036.png", "037.png", "039.png", "040.png", "040.png", "041.png", "042.png", "043.png", "044.png", "045.png", "050.png", "astronaut.png", "space.png"];

const names = ["Apollo", "Aries", "Astrophel", "Atlas", "Cielo", "Comet", "Kosmo", "Cupid", "Galileo", "Jupiter", "Leo", "Meteor", "Namid", "Neptune", "Oberon", "Orion", "Perseus", "Phoenix", "Pluto", "Pollux", "Regulus", "Saturn", "Sirius", "Sol", "Taurus", "Titan", "Zenith"];

$(document).ready(() => {
  $('<img id="avatar" src="images/' + avatars[Math.floor(Math.random()*avatars.length)] + '">').appendTo('#avatar');
  $('<h2>' + names[Math.floor(Math.random()*names.length)] + '</h2>').appendTo('#name');
});