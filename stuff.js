(function() {
  document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector(".modal-overlay").addEventListener("click", function() {
      toggleModal();
    });
  });
})()

function createNewEntry (title, description) {
  var newEntry = document.createElement('div');
  newEntry.className = 'milestone shadow';
  newEntry.innerHTML =
    '<div class="marker shadow">'
    + '<i class="fa fa-map-marker"></i>'
    + '</div>'
    + '<div class="date" contenteditable="true">'
    + '22nd January 2015'
    + '</div>'
    + '<h1>' + title +'</h1>\n'
    + '<p>' + description + '</p>'
    + '<div class="remove" onclick="removeMilestone(this.parentElement)">'
    + '<i class="fa fa-times"></i>'
    + '</div>';

  return newEntry;
}

function toggleModal() {
  toggleDisplay('.modal');
  toggleDisplay('.modal-overlay');
}

function toggleDisplay(className) {
  var element = document.querySelector(className);

  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

function addMilestone() {
  var title = document.getElementById('title').value,
      description = document.getElementById('description').value;

  var newMilestone = createNewEntry(title, description);
  var milestone = document.querySelector('.milestone'),
      container = milestone.parentNode;

  container.insertBefore(newMilestone, milestone);

  toggleModal();
}

function removeMilestone(milestone) {  
  milestone.parentElement.removeChild(milestone);
}
