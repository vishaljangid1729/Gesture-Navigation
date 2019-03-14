var count1 =0;
var count2 =0;

window.addEventListener("wheel",function(e){
    
    if(e.deltaX<(-40)&&count1==0){
        count1++;
        history.back();
        console.log("hello back");
    }
    if(e.deltaX>40&&count2==0){
        console.log("hello faw");
        count2++;
        history.forward();
    }
})
document.addEventListener("dblclick", function(e) {
    
      toggleFullScreen();
    
  }, false);
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }
  var count3=0;
  window.addEventListener("wheel",function(e){
    if(pageYOffset==0&&e.deltaY<-90&&count3==0){
      count3++;
      console.log(e.deltaY);
      location.reload();
      console.log("page load");
      
    }
  })