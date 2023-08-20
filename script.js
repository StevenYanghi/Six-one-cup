function ad(){
    alert("-蒙猪牛奶，助力追梦!         -巴萨和牛，你的最优选！");
}

var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

setInterval(showSlide, 3000);  //每隔3秒自动切换图片