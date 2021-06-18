const navbarSticky = document.querySelector('.stiky-menu');
// console.log(navbarSticky.classList.remove('d-none'));

const olList = document.querySelector('ol  ');
const olListI = document.querySelectorAll('ol span div li i ');
// const olList = document.querySelectorAll('ol span ');

// console.log(olListI);

olList.addEventListener('mouseover', function (e) {
  e.stopPropagation();
  const elementsClick = e.target.querySelector('.ab');

  elementsClick.classList.remove('d-none');

  // console.log(elementsClick);
});

olList.addEventListener('mouseout', function (e) {
  e.stopPropagation();
  const elementsLeave = e.target.querySelector('.ab');

  elementsLeave.classList.add('d-none');

  // console.log(elementsLeave);
});

//////////////////////////////////////////////////////////
////////////////Sticky Menu  Album
//////////////////////////////////////////////////////////

const sectionAlbum = document.querySelector('.section-icons-album');

const initialCoords = sectionAlbum.getBoundingClientRect();
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);

  if (window.scrollY > initialCoords.top)
    navbarSticky.classList.remove('d-none');
  else navbarSticky.classList.add('d-none');
});

//////////////////////////////////////////////////////////
////////////////ol list play icon
//////////////////////////////////////////////////////////

// console.log(olList[0].classList.remove('d-none'));

// console.log(olList[0].classList.remove('d-none'));

// console.log(olListI);
// console.log(olList);

// console.log(olLista.querySelectorAll('  i'));

// aaaaaaaaaaaaaaaaaaaaaaaaaa

// olList.forEach(li => {
//   // li.classList.add('d-node');
//   // mouseenter
//   li.addEventListener('mouseenter', function (e) {
//     e.preventDefault();
//     // e.stopPropagation();

//     olListI.forEach(i => {
//       // console.log(i.classList.toggle('d-none'));
//       // e.target.classList.remove('d-none');
//       // i.classList.remove('d-none');
//       // console.log(i);
//       // e.currentTarget;
//       // console.log(e.currentTarget);
//       // i.style.backgroundColor = 'red';
//       if (i) i.classList.remove('d-none');
//     });
//   });

//   li.addEventListener('mouseleave', function (e) {
//     e.stopPropagation();

//     olListI.forEach(i => {
//       // console.log(i.classList.toggle('d-none'));
//       // e.target.classList.remove('d-none');
//       i.classList.add('d-none');
//     });
//   });

//   olListI.forEach(i => {
//     // console.log(i.classList.toggle('d-none'));
//     // e.target.classList.remove('d-none');
//     // i.classList.remove('d-none');
//     // console.log(i);

//     if (i) i.classList.remove('d-none');
//   });
// });

// li.addEventListener('mouseleave', function (e) {
//   e.preventDefault();
//   e.stopPropagation();

//   olListI.forEach(i => {
//     console.log(i);
//     // console.log(i.classList.toggle('d-none'));
//     // e.target.classList.remove('d-none');
//     i.classList.add('d-none');
//   });
// });

// i.addEventListener('click', e => {
// console.log('aaa');
// e.preventDefault();
// e.stopPropagation();
// console.log(e.currentTarget);
// console.log(e.target);
// e.target.classList.remove('');
// console.log(this.classList.remove('d-none'));
// i.classList.toggle('d-none');
// });

// console.log(li);
// });

// olListI.forEach(i => {
//   i.addEventListener('mouseleave', function (e) {
//     e.preventDefault();
//     e.stopPropagation();

//     i.forEach(i => {
//       console.log(i);
//       // console.log(i.classList.toggle('d-none'));
//       // e.target.classList.remove('d-none');
//       i.classList.add('d-none');
//     });
//   });
// });

// const stickyNav = function (entries) {
//   const [entry] = entries;

//   console.log(entry);
// };

// const sectionObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0.1,
// });

// sectionObserver.observe(sectionAlbum);
