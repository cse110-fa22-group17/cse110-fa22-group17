window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
    displayHeader();
}

function displayHeader() {
    const imgFile = document.querySelector('#imgFile');
    const eImg = document.querySelector('#eImg');
    
    imgFile.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', event => {
          eImg.src = event.target.result;
      });
      reader.readAsDataURL(file);
  });
}