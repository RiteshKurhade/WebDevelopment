function genPassword() {
  let length = 8;
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let numbers = "0123456789";
  let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  let specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let password = "";

  var randomNumber = Math.floor(Math.random() * numbers.length);
  password += numbers[randomNumber];

  randomNumber = Math.floor(Math.random() * lowerCaseChar.length);
  password += lowerCaseChar[randomNumber];

  randomNumber = Math.floor(Math.random() * specialChar.length);
  password += specialChar[randomNumber];

  randomNumber = Math.floor(Math.random() * upperCaseChar.length);
  password += upperCaseChar[randomNumber];

  for (let i = 0; i < length - 4; i++) {
    randomNumber = Math.floor(Math.random() * charset.length);
    password += charset[randomNumber];
  }

  document.getElementById("RandomPass").value = password;
}

function copyPassword() {
  let copyText = document.getElementById("RandomPass");
  copyText.select();
  document.execCommand("copy");
}
