const accountIdFormElement = document.querySelector('#input_account');
const usernameFormElement = document.querySelector('#accountFields > fieldset > div:nth-child(2)');

usernameFormElement.after(accountIdFormElement);

accountIdFormElement.style.paddingTop = '20px';
usernameFormElement.style.paddingTop = '0';
