// JavaScript to handle button hover effect and section switching
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', function() {
      // Remove 'active' class from all buttons
      document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('active');
      });
      // Add 'active' class to the clicked button
      this.classList.add('active');
      // Get the category from the clicked button
      const category = this.getAttribute('data-category');
      // Hide all category items
      document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
      });
      // Show only the items matching the clicked category
      document.querySelectorAll(`.category-item[data-category="${category}"]`).forEach(item => {
        item.classList.add('active');
      });
    });
});


const firstAvailableButton = document.querySelector('.category-button');
    if (firstAvailableButton) {
        firstAvailableButton.click(); // Simulate click on the first available button
    }