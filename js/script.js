document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
  
    const flyingImage = document.querySelector('.flying-image');
  
    document.addEventListener('mousemove', function (e) {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
  
      // Check collision between cursor and flying image
      if (isColliding(cursor, flyingImage)) {
        // If collision occurs, make flying image fly away
        flyingImage.style.transform = 'translate(-50%, -200%)'; // Move the flying image upwards
      }
    });
  
    // Function to check collision between two elements
    function isColliding(elem1, elem2) {
      const rect1 = elem1.getBoundingClientRect();
      const rect2 = elem2.getBoundingClientRect();
      return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
    }
  });
  