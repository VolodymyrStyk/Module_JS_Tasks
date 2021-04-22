let comentsDiv = document.getElementsByClassName('C4VMK');
console.log(comentsDiv);

let usersDiv = document.querySelectorAll('.C4VMK h3 a');
console.log(usersDiv);
usersDiv.forEach(value => {
    console.log(value.textContent);
})