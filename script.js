document.addEventListener("DOMContentLoaded", function() {
    
    const addButton = document.getElementById('add-text-button');

    
    const imageSets = [
        ['img1.jpeg', 'img2.jpeg', 'img3.jpeg'], 
        ['img4.jpeg', 'img5.jpeg', 'img6.jpeg'], 
        ['img7.jpeg', 'img8.jpeg', 'img9.jpeg']  
        ];
        
    
    let currentSetIndex = 0;

    
    function changeImages() {
        const images = document.querySelectorAll('.Imgs img');
        currentSetIndex = (currentSetIndex + 1) % imageSets.length;
        images.forEach((img, index) => {
            img.src = imageSets[currentSetIndex][index];
        });
    }

    addButton.addEventListener('click', function() {
        const newText = document.createElement('p');
        newText.textContent = "";
        newText.classList.add('dynamic-text');
        document.querySelector('.text-section').appendChild(newText);

       
        changeImages();
    });

   
    const textContainers = document.querySelectorAll('.text-container');
    
    textContainers.forEach(container => {
        container.addEventListener('mouseover', function() {
            this.style.backgroundColor = "#f0f0f0";
        });
        
        container.addEventListener('mouseout', function() {
            this.style.backgroundColor = "";
        });
    });

    
    const images = document.querySelectorAll('.Imgs img');
    
    images.forEach(image => {
        image.addEventListener('click', function() {
            alert("Você clicou na imagem: " + this.alt);
        });
    });
});
