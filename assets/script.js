const lists = document.querySelectorAll('.list'); 
const leftBox = document.getElementById('left');
const rightBox = document.getElementById('right');

let selected = null;

for (let list of lists) {
	//detects the selected item after dragging
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
  });

  	//detects if its put down to nowhere it can remove hidden class
    list.addEventListener("dragend", function (e) {
    if (selected) {
      selected.classList.remove("hidden"); // Unhide the item
      console.log("Dropped outside valid drop zones");
      selected = null;
    }
  });
}

//detects where you drag and drop item
rightBox.addEventListener("dragover", function (e) {
  e.preventDefault();
  selected.classList.add("hidden");
});

rightBox.addEventListener("drop", function (e) {
  if (selected) {
    rightBox.appendChild(selected);
    selected.classList.remove("hidden");
    selected = null;
  }
});


leftBox.addEventListener("dragover", function (e) {
  e.preventDefault();
  selected.classList.add("hidden");
});

leftBox.addEventListener("drop", function (e) {
  if (selected) {
    leftBox.appendChild(selected);
    selected.classList.remove("hidden");
    selected = null;
  }
});


