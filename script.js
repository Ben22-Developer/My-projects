let scroll;

document.addEventListener('scroll', () => {
   if (scrollY > scroll) {
    document.getElementById('navbar').classList.add('hidden');
   }
   else {
    document.getElementById('navbar').classList.remove('hidden');
   }
   scroll = scrollY;
})