document.addEventListener('DOMContentLoaded', () => {
  let messageForm = document.getElementById('messageForm');
  let message = document.getElementById('message');
  let rightDiv = document.getElementById('rightLog');
  let hamburgerBtn = document.querySelector('.hambugerBtn');
  let sidebar = document.querySelector('.side');

  messageForm.addEventListener('submit', () => {

    let messageText = message.value;
    if (messageText) {
      let messageLi = document.createElement('li');
      messageLi.style.listStyleType = 'none'
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