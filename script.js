function ad(){
    alert("-蒙猪牛奶，助力追梦!         -巴萨和牛，你的最优选！");
}

var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

/*function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

setInterval(showSlide, 3000);*/  //每隔3秒自动切换图片

window.onscroll = function() {
  toggleScrollTopButton();
};

function toggleScrollTopButton() {
  var scrollTopBtn = document.querySelector('.scroll-top-btn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function loadNewContent() {
  $.ajax({
    url: 'new-content.html', // 新内容所在的文件或API端点
    type: 'GET',
    success: function(data) {
      $('#content').html(data); // 将新内容替换原有内容
    },
    error: function() {
      console.log('加载新内容失败');
    }
  });
}

