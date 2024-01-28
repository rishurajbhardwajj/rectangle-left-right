var rectanglee = document.getElementById("rectangle");

rectanglee.addEventListener("mousemove", function (dets) {
  var details = rectanglee.getBoundingClientRect();
  var mouseinrect = dets.clientX - details.left;
  if (mouseinrect < details.width / 2) {
    var redcolour = gsap.utils.mapRange(
      0,
      details.width / 2,
      255,
      0,
      mouseinrect
    );
    gsap.to(rectanglee, {
      backgroundColor: `rgb(${redcolour},0,0)`,
      ease: Power4,
    });
  } else {
    var bluecolour = gsap.utils.mapRange(
      details.width / 2,
      details.width,
      0,
      255,
      mouseinrect
    );
    gsap.to(rectanglee, {
      backgroundColor: `rgb(0,0,${bluecolour})`,
      ease: Power4,
    });
  }
});
rectanglee.addEventListener("mouseleave",function(){
  gsap.to (rectanglee,{
  backgroundColor:"white",
  })
})
