function onSubmit(e) {
    e.preventDefault();

    // get data from the form 
    const prompt = docment.querySelector('#description-input');
    console.log(prompt);
}
document.querySelector('#div-body').addEventListener('submit', onSubmit);

