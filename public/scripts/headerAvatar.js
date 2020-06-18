// const avatars = ["../images/avatars/005-space ship.png","../images/avatars/009-alien.png","../images/avatars/012-alien.png","../images/avatars/014-alien.png", "../images/avatars/015-alien.png", "../images/avatars/031-alien.png", "../images/avatars/035-alien.png", "../images/avatars/040-alien.png", "../images/avatars/047-alien.png", "../images/avatars/050-alien.png", "../images/avatars/001-abduction.png", "../images/avatars/019-alien.png","../images/avatars/020-alien.png","../images/avatars/021-alien.png","../images/avatars/023-alien.png", "../images/avatars/029-abducting.png", "../images/avatars/032-alien.png", "../images/avatars/036-alien.png", "../images/avatars/037-alien.png", "../images/avatars/039-alien.png", "../images/avatars/041-alien.png"];

const avatars = ["https://image.flaticon.com/icons/svg/2909/2909457.svg", "https://image.flaticon.com/icons/svg/2909/2909504.svg"]

const size = avatars.length
const x = Math.floor(size*Math.random())

$('#randomImages').attr('src', "tweeter/public/images/alien.png");

// const userAvatar = avatars[Math.floor(Math.random()*avatarArray.length)];

// $('#avatar').attr('src', userAvatar);

// tweeter/server/lib/util/avatars/001-abduction.png