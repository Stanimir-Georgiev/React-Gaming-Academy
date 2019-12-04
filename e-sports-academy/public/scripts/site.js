window.onload = function() {
    document.body.className += " loaded";
    var element = document.getElementsByClassName('site-footer')[0];
    var elementHeight = element.clientHeight;
  
    document.addEventListener('scroll', animate);
  
    function inView() {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
      if (scrollPosition > elementPosition) {
        return true;
      }
    
      return false;
    }
    function animate() {
      if (inView()) {
        element.classList.add("animate");
      }
    }
    function show() {
      if (inView()){
        element.classList.add("animate")
      }
    }
    show()
  }