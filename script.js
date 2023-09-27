const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

/* Your CSS Code here. */
        function calculateTotalPrice() {
            const priceElements = document.querySelectorAll('.prices');
            let totalPrice = 0;

            // Iterate through price elements and calculate the sum
            priceElements.forEach((priceElement) => {
                const price = parseFloat(priceElement.innerText);
                if (!isNaN(price)) {
                    totalPrice += price;
                }
            });

            // Create a new row to display the total price
            const table = document.querySelector('table');
            const newRow = document.createElement('tr');
            const newCell = document.createElement('td');
            newCell.innerText = `Total Price: ${totalPrice.toFixed(2)}`;
            newRow.appendChild(newCell);
            table.appendChild(newRow);
        }

        // Calculate the total price when the page loads
getSumBtn.addEventListener("click", calculateTotalPrice());
