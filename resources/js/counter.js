const counter = document.getElementById("counter")
console.log(counter)
let count = 0;
setInterval(() => {
    count++
    counter.textContent = count.toString()
}, 1000)