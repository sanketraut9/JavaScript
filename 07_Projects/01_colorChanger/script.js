const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'lavender') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'lightgreen') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'skyblue') {
      body.style.backgroundColor = e.target.id;
    }
  });
});