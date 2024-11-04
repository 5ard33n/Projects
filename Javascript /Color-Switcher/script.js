const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'red') {
            body.style.backgroundColor = 'red';       //e.target.id
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';       //e.target.id
        }
        if (event.target.id === 'gray') {
            body.style.backgroundColor = 'gray';       //e.target.id
        }
        if (event.target.id === 'black') {
            body.style.backgroundColor = '#212121';       //e.target.id
        }
    })
})
