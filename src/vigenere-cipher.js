const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse';
  }

  createKeyStr(text, key) {
    let keyStr = '';

    let index = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90) {
        keyStr += key[index++];
        if (index === key.length) index = 0;
      } else {
        keyStr += '_';
      } 
    }

    return keyStr;
  }

  encrypt(plaintext, key) {
    if (plaintext === undefined || key === undefined) throw new Error();
    const FIRST_CODE = 65;
    const ALPHABET_LENGTH = 26;

    let ciphertext = '';
    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();
    let keyStr = this.createKeyStr(plaintext, key);

    for (let i = 0; i < plaintext.length; i++) {
      if (keyStr[i] === '_') {
        ciphertext += plaintext[i];
      } else {
        ciphertext += String.fromCharCode(((plaintext[i].charCodeAt() - FIRST_CODE + keyStr[i].charCodeAt() - FIRST_CODE) 
          % ALPHABET_LENGTH) + FIRST_CODE);
      }
    }

    return this.type === 'direct' ? ciphertext : ciphertext.split('').reverse().join('');
  }    

  decrypt(ciphertext, key) {
    if (ciphertext === undefined || key === undefined) throw new Error();
    const FIRST_CODE = 65;
    const ALPHABET_LENGTH = 26;

    let plaintext = '';
    ciphertext = ciphertext.toUpperCase();
    key = key.toUpperCase();
    let keyStr = this.createKeyStr(ciphertext, key);

    for (let i = 0; i < ciphertext.length; i++) {
      if (keyStr[i] === '_') {
        plaintext += ciphertext[i];
      } else {
        plaintext += String.fromCharCode((((ciphertext[i].charCodeAt() - FIRST_CODE) + 
          ALPHABET_LENGTH - (keyStr[i].charCodeAt() - FIRST_CODE)) % ALPHABET_LENGTH) + FIRST_CODE);
      }
    }
    
    return this.type === 'direct' ? plaintext : plaintext.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
