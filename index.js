console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  const dateInput = document.getElementById('date');

  if (!dateInput.value) {
    console.log('Input type date is empty');
  } else {
    console.log('Input type date is NOT empty');
    console.log(dateInput.value);
  }
});
