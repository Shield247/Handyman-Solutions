const currentYear = 2024

let YearofBirth = 2007

let age = currentYear-YearofBirth ;

if (age>=18){
    console.log ("you are old enough" + age)
    document.getElementById('message').innerHTML="you are old enough" + age

}else{ 
    console.log ("you are prohibited" + age)
    document.getElementById ("message").innerHTML="YOU ARE PROHIBITED" + age
}

const users = [
    { username: 'Admin1', email: 'ogenyipromise8@gmail.com', password: '1234' },
    { username: 'Admin2', email: 'ogenyipromise3@gmail.com', password: 'firsta' },
    { username: 'Admin3', email: 'ogenyipromise2@gmail.com', password: 'learnlift' }
];

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
       
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Incorrect username or password';
        errorMessage.style.color = 'red';
    }
});
