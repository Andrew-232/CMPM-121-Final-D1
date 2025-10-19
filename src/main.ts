let counter: number = 0;

document.body.innerHTML = `
  <h1>Clicker Game</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Manuel Clicker Button!</button>
`;

document.body.style.backgroundColor = "lightgrey";

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter.toString();
});

// Added set interval where the counter hould increase by 1 every second.
setInterval(() => {
  counter++;
  counterElement.textContent = counter.toString();
}, 1000);
