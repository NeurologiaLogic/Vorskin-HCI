let subsCount = document.querySelector(".subsCount");
let counter = 0;
let speed = 10;
let counterMax = 3;
let times = 1;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
let running = false;
const animation = () => {
  counter += counterMax * times;
  if (counter % 2 == 0) {
    subsCount.innerHTML = numberWithCommas(counter);
  }
  if (counter > 190000000) {
    subsCount.innerHTML = numberWithCommas(counter);
    return;
  }
  if (counter % 3 == 0) {
    counterMax += 10000;
  }
  if (counter % 100 == 0) {
    times += 10;
  }
  if (running) requestAnimationFrame(animation);
};
const startOnce = () => {
  if (!running) running = true;
  requestAnimationFrame(animation);
};
let start_count = document.querySelector(".thanks");
window.addEventListener("scroll", (e) => {
  let meh = start_count.getBoundingClientRect();
  //   console.log(meh)
  console.log(meh.y);
  //   console.log(Math.abs(meh.y - scrollY))
  if (!running && meh.y < 350) {
    startOnce();
  }
});
