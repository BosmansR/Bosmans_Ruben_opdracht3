// init Isotope
var iso = new Isotope( 'main', {
  itemSelector: '.item',
  layoutMode: 'fitRows',
  getSortData: {
    naam: '.naam',
    jaartal: '.jaartal'
  }
});

// bind filter button click
function collectionFilter() {
  let filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
}

let filterByCollection = document.querySelector('.filters-by-button-group');
filterByCollection.addEventListener("click", collectionFilter)

// bind sort button click
var sortByGroup = document.querySelector('.sort-by-button-group');
sortByGroup.addEventListener( 'click', function( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var sortValue = event.target.getAttribute('data-sort-value');
  iso.arrange({ sortBy: sortValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0; i < buttonGroups.length; i++ ) {
  buttonGroups[i].addEventListener( 'click', onButtonGroupClick );
}

function onButtonGroupClick( event ) {
  // only button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var button = event.target;
  button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
  button.classList.add('is-checked');
}
