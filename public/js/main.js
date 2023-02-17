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

    //generate the image after get the data
    document.querySelector('#msg').textContent = 'Your image is generating... Please wait...';
    generateImage(prompt, img_size);
}
async function generateImage(prompt, size) {
    try {
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt,
              size,
            }),
          });
      
          if (!response.ok) {
            throw new Error('That image could not be generated');
          }


          const res = await response.json();
          const imageUrl = res.data;
            
          document.querySelector('#image_display').src = imageUrl;

          document.querySelector('#msg').textContent = '';


    } catch (error) {
        document.querySelector('#msg').textContent = error;
    }
}

document.querySelector('#form').addEventListener('submit', onSubmit);


