function calculate() {
  const service = document.getElementById("service").value;
  const qty = Number(document.getElementById("quantity").value);

  let basePrice = 0;

  if (service === "website") basePrice = 1500;
  if (service === "ads") basePrice = 1000;
  if (service === "ops") basePrice = 2000;

  const total = basePrice * qty;
  document.getElementById("result").innerText = `$${total}`;
}
