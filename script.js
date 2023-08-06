
// Define the Smoothie class
class Smoothie {
    constructor(flavor, base, toppings) {
        this.flavor = flavor;
        this.base = base;
        this.toppings = toppings;
    }
}

// Function to create and display the smoothie
function createSmoothie() {
    const flavor = document.getElementById("flavor").value;
    const base = document.getElementById("base").value;
    const toppings = document.querySelectorAll('input[name="toppings"]:checked');
    const selectedToppings = Array.from(toppings).map(topping => topping.value);

    const smoothie = new Smoothie(flavor, base, selectedToppings);
    displaySmoothie(smoothie);
}

// Function to display the smoothie details
function displaySmoothie(smoothie) {
    const smoothieOutput = document.getElementById("smoothieOutput");
    smoothieOutput.innerHTML = `<h2>Your Smoothie:</h2>
                                <p>Flavor: ${smoothie.flavor}</p>
                                <p>Base: ${smoothie.base}</p>
                                <p>Toppings: ${smoothie.toppings.join(", ")}</p>`;
}