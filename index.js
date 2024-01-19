const COLORS = ["#FFFFFF", "#63E6BE", "#74C0FC", "#B197FC"];
const FRAMES = ["Frame-1", "Frame-2", "Frame-3", "Frame-4"];
let previousStarPosition = { x: 0, y: 0 };

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.partical = document.createElement("div");
    this.partical.classList.add("dot");
    this.partical.style.left = `${this.x}px`;
    this.partical.style.top = `${this.y}px`;
    this.partical.style.animationName = FRAMES[Math.floor(Math.random() * 4)];
    this.partical.innerHTML = `<svg viewBox="0 0 576 512"><path fill=${COLORS[Math.floor(Math.random() * 4)]
      } d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>`;
    this.glow = document.createElement("div");
    this.glow.classList.add("glow");
    this.glow.style.left = `${this.x}px`;
    this.glow.style.top = `${this.y}px`;
  }

  distance() {
    return Math.sqrt(
      Math.pow(previousStarPosition.x - this.x, 2) +
      Math.pow(previousStarPosition.y - this.y, 2),
    );
  }

  create() {
    if (this.distance() >= 50) {
      previousStarPosition = { x: this.x, y: this.y };
      document.body.appendChild(this.partical);
      setTimeout(() => {
        document.body.removeChild(this.partical);
      }, 1000);
    }

    document.body.appendChild(this.glow);
    setTimeout(() => {
      document.body.removeChild(this.glow);
    }, 100);
  }
}

const handleMouseMove = (event) => {
  const star = new Star(event.clientX, event.clientY);
  star.create();
};

window.addEventListener("mousemove", handleMouseMove);
