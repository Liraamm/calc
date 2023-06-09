let output = document.getElementById("output");
console.log(output.value);
function display(num) {
  output.value += num;
}

function Calculate() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    alert("Invalid number");
  }
}

function Clear() {
  output.value = "";
}

function del() {
  output.value = output.value.slice(0, -1);
}
