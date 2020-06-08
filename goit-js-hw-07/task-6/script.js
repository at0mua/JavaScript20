const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('input', event => {
  if (event.target.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    return;
  }
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
});
