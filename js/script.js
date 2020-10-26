let valuesIn = JSON.parse(localStorage.getItem("VALUESIN")) || [];
let valuesOut = JSON.parse(localStorage.getItem("VALUESOUT")) || [];

document.getElementById("inputIn").addEventListener("change", function () {
  console.log("Add one in sale.");
});

function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function addIn() {
  const inputIn = document.getElementById("inputIn");
  const value = parseFloat(inputIn.value);

  valuesIn.push(value);

  inputIn.value = "";

  saveLocalStorage("VALUESIN", valuesIn);
  updateScreen();
}

function addOut() {
  const inputOut = document.getElementById("inputOut");
  const value = parseFloat(inputOut.value);

  valuesOut.push(value);

  inputOut.value = "";

  saveLocalStorage("VALUESOUT", valuesOut);
  updateScreen();
}

function calculateTotal() {
  let totalIn = 0;
  let totalOut = 0;

  for (const item of valuesIn) {
    totalIn += item;
  }

  for (const item of valuesOut) {
    totalOut += item;
  }

  return totalIn - totalOut;
}

function updateScreen() {
  let total = calculateTotal();

  if (total >= 0) {
    document.getElementById("displayUp").style = "display: flex";
    document.getElementById("totalUp").innerHTML = `R$ ${total}`;
    document.getElementById("displayDown").style = "display: none";
  } else {
    document.getElementById("displayDown").style = "display: flex";
    document.getElementById("totalDown").innerHTML = `R$ ${total}`;
    document.getElementById("displayUp").style = "display: none";
  }
}

function clearLocalStorage() {
  valuesIn = [];
  valuesOut = [];
  localStorage.clear();
  updateScreen();
}

updateScreen();
