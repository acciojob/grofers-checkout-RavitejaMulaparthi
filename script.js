const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const totalPrice = item.reduce((sum, item) => sum + item.price, 0);

  // Display the total price
  alert(`Total Price: $${totalPrice}`);
  
};

getSumBtn.addEventListener("click", getSum);

