window.onload = function () {
  const audio = document.getElementById("music");
  if (audio) {
    audio.volume = 0;
    let fade = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume += 0.02;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💕";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 600);
    setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 1000);
    setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️‍🩹";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }, 1400);
};
