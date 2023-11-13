document.addEventListener('DOMContentLoaded', () => {
  let messageForm = document.getElementById('messegeForm');
  let message = document.getElementById('messege');
  let rightDiv = document.getElementById('rightLog');
  let hamburgerBtn = document.querySelector('.hambugerBtn');
  let sidebar = document.querySelector('.side');

  messageForm.addEventListener('submit', () => {

    let messageText = message.ariaValueMax;
    if (messageText) {
      let messageLi = document.createElement('li');

      messageLi.textContent = messageText;

      rightDiv.appendChild(messageLi)
    }
  })
  hamburgerBtn.addEventListener('click', () => {
    if (sidebar.style.width === '100px') {
      sidebar.style.width = '0';
    } else { 
      sidebar.style.width = '100px';
    }
  })
})