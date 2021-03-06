function run() {
  const input = document.getElementById("Input").value;
  const term = parseInt(input);
  if (input != parseInt(input)) {
    alert("Please enter a whole number");
    return;
  }
  if (term >= 0) {
    calculate(term);
  } else {
    alert("Please enter a positive number");
    return;
  }
}
function calculate(term) {
    let sequence = [0,1]
    while (term > sequence.length){
        const nextterm = sequence[sequence.length - 1] + sequence[sequence.length - 2]
        sequence.push(nextterm)
    }
    document.getElementById("answer").innerHTML = `Term ${term} in the Fibonacci Sequence is ${sequence[term - 1]}`
}
document.getElementById("submit").addEventListener("click", run);
