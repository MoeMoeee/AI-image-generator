function onSubmit(e) {
    e.preventDefault();

    // get data from the form 
    const prompt = document.querySelector('#description-input').value;
    var e = document.querySelector("#img-size");
    const img_size = e.options[e.selectedIndex].text;
    
    if (prompt === '') {
        alert('Please describe the image!');
        return;
    }

    console.log(prompt);
    console.log(img_size);
}
document.querySelector('#form').addEventListener('submit', onSubmit);


