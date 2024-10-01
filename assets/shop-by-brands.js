document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
      // Remove 'active' class from all buttons
      document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('active');
      });
      // Add 'active' class to the hovered button
      this.classList.add('active');
    });
  });