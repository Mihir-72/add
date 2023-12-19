function add() {
  let f1 = document.getElementById("firstvalue").value;
  let f2 = document.getElementById("secondvalue").value;
  const result = parseInt(f1) + parseInt(f2);

  document.getElementById("output").innerHTML = result;
}