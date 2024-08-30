console.log("Hello World!");

document.getElementById("submitBtn").addEventListener("click", function () {
  const carat = document.getElementById("carat").value;
  const weight = document.getElementById("weight").value;
  const pricePerGram = document.getElementById("pricePerGram").value;
  const gst = document.getElementById("gst").value;
  const makingCost = document.getElementById("makingCost").value;

  const goldPurity = (carat / 24) * 100;
  const pureGoldWeight = (goldPurity / 100) * weight;
  const goldPrice = pureGoldWeight * pricePerGram;
  const gstAmount = (goldPrice * gst) / 100;

  const finalPrice = goldPrice + gstAmount + parseFloat(makingCost);

  document.getElementById("result").innerHTML = `
    <h2>Calculation Result</h2>
    <p>Gold Carat: ${carat}</p>
    <p>Gold Weight: ${weight} grams</p>
    <p>Purity: ${goldPurity.toFixed(2)}%</p>
    <p>Pure Gold Weight: ${pureGoldWeight.toFixed(2)} grams</p>
    <p>Gold Price: PKR ${goldPrice?.toFixed(2)}</p>
    <p>GST: PKR ${gstAmount?.toFixed(2)}</p>
    <p>Making Cost: PKR ${parseFloat(makingCost).toFixed(2)}</p>
    <p><strong>Total Price: PKR ${finalPrice.toFixed(2)}</strong></p>
  `;
});
