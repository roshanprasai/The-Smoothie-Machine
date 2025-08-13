// Smoothie class
class Smoothie {
    constructor(size, base, fruits, addOns, sweetness, customer, notes) {
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.addOns = addOns;
        this.sweetness = sweetness;
        this.customer = customer;
        this.notes = notes;
    }

    description() {
        let fruitText = this.fruits.length > 0 ? this.fruits.join(", ") : "No fruits";
        let addOnText = this.addOns.length > 0 ? this.addOns.join(", ") : "No add-ons";
        return `
            <h2>🍹 Smoothie Order for ${this.customer}</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Fruits:</strong> ${fruitText}</p>
            <p><strong>Add-ons:</strong> ${addOnText}</p>
            <p><strong>Sweetness:</strong> ${this.sweetness}</p>
            <p><strong>Notes:</strong> ${this.notes || "None"}</p>
            <h3>✅ Your smoothie is on the way!</h3>
        `;
    }
}

// Event listener for order button
document.getElementById("orderBtn").addEventListener("click", () => {
    // Get form values
    let size = document.getElementById("size").value;
    let base = document.getElementById("base").value;

    // Fruits checkboxes
    let fruits = Array.from(document.querySelectorAll('fieldset:nth-of-type(1) input:checked')).map(cb => cb.value);

    // Add-ons checkboxes
    let addOns = Array.from(document.querySelectorAll('fieldset:nth-of-type(2) input:checked')).map(cb => cb.value);

    // Sweetness radio
    let sweetness = document.querySelector('input[name="sweetness"]:checked').value;

    // Customer name
    let customer = document.getElementById("customer").value.trim();
    if (!customer) {
        alert("Please enter your name.");
        return;
    }

    // Notes
    let notes = document.getElementById("notes").value.trim();

    // Create smoothie object
    let smoothieOrder = new Smoothie(size, base, fruits, addOns, sweetness, customer, notes);

    // Output to page
    document.getElementById("orderOutput").innerHTML = smoothieOrder.description();
});
