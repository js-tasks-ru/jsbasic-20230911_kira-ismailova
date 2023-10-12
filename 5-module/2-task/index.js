function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  button.addEventListener("click", handler);
 
  function handler() {
      text.hidden = !text.hidden;
  }
}

