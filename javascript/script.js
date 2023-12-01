/* Landing page (index.html) */
/* Changing the EXPLORE button when hovering */
document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("explore");
    const originalText = button.innerText;

    // When hover, display Let's Go!
    button.addEventListener("mouseenter", function(){
        button.innerText = "Let's Go!";
    });

    // When not hover, display Explore (original text)
    button.addEventListener("mouseleave", function(){
        button.innerText = originalText;
    });
});

/* Background image slideshow (index.html) */
document.addEventListener("DOMContentLoaded", function(){
    const backgroundImages = [
        "https://www.tinycurl.co/wp-content/uploads/2022/05/blog-frog-amigurumi1.jpg",
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/28/48860.jpg",
        "https://curiouspapaya.com/cdn/shop/articles/2_413d2269-83fe-4aa4-b6cf-2ef4987ba50a.png?v=1683949534"
    ]
    
    let currentImageIndex = 0;
    
    function changeBackground() {
        const body = document.querySelector(".index-body");
        body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    
        // Increment the index or reset it to 0 when reaching the end
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    }
    
        // Initial call to set the first background
        changeBackground();
    
        // Set interval to change background every 8 seconds
        setInterval(changeBackground, 8000);
})

/* Changing input to uppercase (contact.html) */
document.addEventListener("DOMContentLoaded", function(){
    let el = document.getElementById("name");
      el.addEventListener(
        "keyup",
        function (e) {
          console.log(e.target.value);
          el.value = e.target.value.toUpperCase();
        },
        false
      );
})

/* Validation for name input box where it must be between 5-20 characters (contact.html) */
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var form = document.querySelector("form");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        // Get the value of the name input
        var nameInput = document.getElementById("name").value;

        // Check if the name is shorter than 5 characters or longer than 20 characters
        if (nameInput.length < 5 || nameInput.length > 20) {
            // Show an alert
            alert("Name must be between 5 and 20 characters.");
            
            // Prevent the form submission
            event.preventDefault();
        }

        else {
            // If the validation passes, the form will be submitted as usual
            alert("Submission complete!")
        }
        
    });
});



