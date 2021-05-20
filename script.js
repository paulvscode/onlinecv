function jump(h) {
  let top = document.getElementById(h).offsetTop;
  console.log(top);
  top += 100;
  console.log(top);
  top.toString();
  window.scrollTo(0, top);
}
