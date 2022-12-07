let main;

window.addEventListener("DOMContentLoaded", () => {
  setScaling();
  setIsOverflowingAttribute();
});

function setScaling() {
  main = document.getElementById("main");
  main.style.width = `${window.innerWidth * 1.5}px`;
  main.style.height = `${window.innerHeight * 1.5}px`;
}

function setIsOverflowingAttribute() {
  let tiles = document.getElementsByClassName("tile");
  for (let tile of tiles) {
    tile.firstElementChild?.setAttribute(
      "is-overflown",
      tile.firstElementChild.scrollHeight > tile.firstElementChild.clientHeight
    );
  }
}

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
  const mouseX = event.clientX,
    mouseY = event.clientY;

  const xDecimal = mouseX / window.innerWidth,
    yDecimal = mouseY / window.innerHeight;

  const maxX = main.offsetWidth - window.innerWidth,
    maxY = main.offsetHeight - window.innerHeight;

  let translateX = maxX * xDecimal * -1;
  let translateY = maxY * yDecimal * -1;

  main.animate(
    {
      transform: `translate(${translateX}px, ${translateY}px)`,
    },
    {
      duration: 4000,
      fill: "forwards",
      easing: "ease",
    }
  );
}
