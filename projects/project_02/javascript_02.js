const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const height = parseFloat(document.querySelector('#Height').value);
    const weight = parseFloat(document.querySelector('#Weight').value);
    const results = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please enter a valid height!";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please enter a valid weight!";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: <strong>${bmi}</strong></span>`;
    }
});
