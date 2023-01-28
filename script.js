//
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visuals = document.querySelector(".visuals");
  const colors = [
    "#603978",
    "#33b6d7",
    "#be467a",
    "#dc3a04",
    "#33cc61",
    "#072083",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = (index) => {
    //Create bubbles
    const bubble = document.createElement("div");
    visuals.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function () {
      visuals.removeChild(this);
    });
  };
});
