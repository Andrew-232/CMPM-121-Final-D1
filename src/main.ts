let counter: number = 0;
let growthRate: number = 0;
const upgradeCost: number = 10;

document.body.innerHTML = `
 <h1>Clicker Game</h1>
 <p>Counter: <span id="counter">0</span></p>
 <p>Auto Clickers Bought: <span id="growthRateDisplay">0</span></p>
 <button id="increment">Manuel Clicker Button!</button>
 <button id="purchaseUpgrade" disabled>Purchase Auto Clicker Upgrade (Cost: ${upgradeCost})</button>
`;

document.body.style.backgroundColor = "lightgrey";

// Add click handler
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;
const purchaseUpgradeButton = document.getElementById(
  "purchaseUpgrade",
) as HTMLButtonElement;
const growthRateDisplay = document.getElementById("growthRateDisplay")!;

button.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter.toString();
});

//Logic for the upgrade
purchaseUpgradeButton.addEventListener("click", () => {
  if (counter >= upgradeCost) {
    counter -= upgradeCost;
    growthRate++;
    growthRateDisplay.textContent = growthRate.toString();
    console.log("Upgrade bought!");
  }
});

let currentFrame: number = 0;

//Function for the animation loop
function gameLoop(timestamp: number) {
  if (currentFrame === 0) {
    currentFrame = timestamp;
  }

  const deltaTime = (timestamp - currentFrame) / 1000;

  currentFrame = timestamp;

  counter += growthRate * deltaTime;

  counterElement.textContent = Math.floor(counter).toString();

  purchaseUpgradeButton.disabled = counter < upgradeCost;

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
