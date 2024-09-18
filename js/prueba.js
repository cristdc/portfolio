const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const sm = entry.target.querySelector('.sm');

    if (entry.isIntersecting) {
      sm.classList.add('enter-animation');
	  return;
    }

    sm.classList.remove('enter-animation');
  });
});

observer.observe(document.querySelector('#sobremi'));

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const sm1 = entry.target.querySelector('.sm1');

    if (entry.isIntersecting) {
      sm1.classList.add('enter-animation1');
	  return;
    }

    sm1.classList.remove('enter-animation1');
  });
});

observer1.observe(document.querySelector('#sobremi'));
