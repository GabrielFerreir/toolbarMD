var situationNav;
var sideNav;

window.onload = () => {
  // Pegando elementos
  sideNav = document.querySelector('.side-nav');
  returnSideNav = document.querySelector('.toolbar .side-nav .side-nav-toolbar .side-nav-toolbar-return');


// EventListeners
  document.addEventListener('mousedown', (event) => {
    closeNav(event);
  });
}


function openNav() {
    sideNav.classList.add('side-nav-open');
}

function closeNav(e) {
  if(sideNav != e.target && sideNav != e.target.parentNode && sideNav != e.target.parentNode.parentNode || e.target === returnSideNav) {
    sideNav.classList.remove('side-nav-open');
  }
}
