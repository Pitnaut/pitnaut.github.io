const profilePhoto = document.getElementById("profile-photo");

let changeImage = () => profilePhoto.style.transition = "all .5s";
profilePhoto.addEventListener('mouseover', changeImage);
