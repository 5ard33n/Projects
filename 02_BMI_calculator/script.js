const form = document.querySelector("form")
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form from reloading the page
    const height = parseInt(document.querySelector('#HEIGHT').value)
    const weight = parseInt(document.querySelector('#WEIGHT').value)
    const result = document.querySelector('.results')

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `PLEASE ENTER A VALID HEIGHT ${height}`;
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `PLEASE ENTER A VALID WEIGHT ${weight}`;
    }
    else {
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${BMI}</span>`;
        const data = document.querySelector("span")
        data.style.padding = "12px"
    }
})
