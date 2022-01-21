let counter = document.getElementById('count');

let count = 0;
counter.innerHTML = `Count: ${count}`; 

function plus() {
    count += 1;
    counter.innerHTML = `Count: ${count}`
}

function minus() {
    count -= 1;
    counter.innerHTML = `Count: ${count}`
}

function reset() {
    count = 0;
    counter.innerHTML = `Count: ${count}`
}