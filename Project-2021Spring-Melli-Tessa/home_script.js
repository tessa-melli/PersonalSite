//JavaScript to control the picture carousel

var picIndex = 1;
var picTimer;
var pictureCarousel;

//Actions upon window loading
window.addEventListener("load",function() {
    showPic(picIndex);
    picTimer = setInterval(function(){advancePic(1)}, 3000);
    pictureCarousel = document.getElementsByClassName('carousel')[0];
})

//Selecting the current picture via the arrows
function advancePic(index){
  clearInterval(picTimer);

  if (index < 0){
    showPic(picIndex -= 1);
  } else {
    showPic(picIndex += 1);
  }

  if (index === -1){
    picTimer = setInterval(function(){advancePic(index + 2)}, 3000);
  } else {
    picTimer = setInterval(function(){advancePic(index + 1)}, 3000);
  }
}

//Selecting the current picture via the dots
function dotPic(index){
  clearInterval(picTimer);
  picTimer = setInterval(function(){advancePic(index + 1)}, 3000);
  showPic(picIndex = index);
}

//Shows current picture in the carousel
function showPic(index){
  var i;
  var pictures = document.getElementsByClassName("carouselPic");
  var dots = document.getElementsByClassName("dot");

  if (index > pictures.length) {picIndex = 1}
  if (index < 1) {picIndex = pictures.length}

  for (i = 0; i < pictures.length; i++) {
      pictures[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  pictures[picIndex-1].style.display = "block";
  dots[picIndex-1].className += " active";
}
