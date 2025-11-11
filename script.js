function removeColor() {
      // Get the dropdown element
      const select = document.getElementById("colorSelect");

      // Get the selected index
      const selectedIndex = select.selectedIndex;

      // Check if an option is selected
      if (selectedIndex !== -1) {
        // Remove the selected option
        select.remove(selectedIndex);
      } else {
        alert("Please select a color to remove!");
      }
    }