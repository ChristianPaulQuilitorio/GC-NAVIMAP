  // JavaScript to toggle image visibility for each link
    var links = document.querySelectorAll('.showImageLink');
    var images = document.querySelectorAll('.image');
    var currentIndex = 0;
    

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault(); // prevent default link behavior
        var index = parseInt(this.getAttribute('data-index'));
        showImage(index);
      });
    }

    function showImage(index) {
      // Hide all images
      for (var j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
      }
      // Show the selected image
      images[index].style.display = 'block';
      currentIndex = index;
    }
    
   


    

