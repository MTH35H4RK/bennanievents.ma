window.onscroll = function() {myFunction()};

var header = document.getElementById("r-container");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function resizeIframe(iframe) {
  try {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  } catch (e) {
      console.error("Can't resize iframe:", e);
  }
}

// Call this function when the iframe is loaded
document.querySelector('iframe').onload = function() {
  resizeIframe(this);
};
window.addEventListener('load', function() {
  var iframe = document.getElementById('myIframe'); // Replace with your iframe's ID
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Hide elements by selector
  var elementsToHide = innerDoc.querySelectorAll('.selector-to-hide'); // Replace with actual selectors
  elementsToHide.forEach(function(el) {
    el.style.display = 'none';
  });
});



    document.addEventListener('DOMContentLoaded', function() {
        var images = document.querySelectorAll('#background-section .background-image');
        var durations = [5000, 3000, 3000]; // Durations for each slide
        var currentImageIndex = 0;

        // Function to change the background image
        function changeBackgroundImage() {
            images.forEach((img, index) => {
                img.classList.remove('active');
            });
            images[currentImageIndex].classList.add('active');

            currentImageIndex = (currentImageIndex + 1) % images.length;
            setTimeout(changeBackgroundImage, durations[currentImageIndex]);
        }

        // Immediately activate the first image
        images[currentImageIndex].classList.add('active');
        setTimeout(changeBackgroundImage, durations[currentImageIndex]);
    });
