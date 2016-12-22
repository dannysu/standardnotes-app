class SNCrypto {

  generateRandomKey() {
    return CryptoJS.lib.WordArray.random(512/8).toString();
  }

  generateUUID() {
     var d = new Date().getTime();
     if(window.performance && typeof window.performance.now === "function"){
         d += performance.now(); //use high-precision timer if available
     }
     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
         var r = (d + Math.random()*16)%16 | 0;
         d = Math.floor(d/16);
         return (c=='x' ? r : (r&0x3|0x8)).toString(16);
     });
     return uuid;
  }

  decryptText(encrypted_content, key) {
    var keyData = CryptoJS.enc.Hex.parse(key);
    var ivData  = CryptoJS.enc.Hex.parse("");
    var decrypted = CryptoJS.AES.decrypt(encrypted_content, keyData, { iv: ivData,  mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  encryptText(text, key) {
    var keyData = CryptoJS.enc.Hex.parse(key);
    var ivData  = CryptoJS.enc.Hex.parse("");
    var encrypted = CryptoJS.AES.encrypt(text, keyData, { iv: ivData,  mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
  }

  generateRandomEncryptionKey() {
    var salt = Neeto.crypto.generateRandomKey();
    var passphrase = Neeto.crypto.generateRandomKey();
    return CryptoJS.PBKDF2(passphrase, salt, { keySize: 512/32 }).toString();
  }

  firstHalfOfKey(key) {
    return key.substring(0, key.length/2);
  }

  secondHalfOfKey(key) {
    return key.substring(key.length/2, key.length);
  }

  sha256(text) {
    return CryptoJS.SHA256(text).toString();
  }

  sha1(text) {
    return CryptoJS.SHA1(text).toString();
  }

  hmac256(message, key) {
    var keyData = CryptoJS.enc.Hex.parse(key);
    var messageData = CryptoJS.enc.Utf8.parse(message);
    return CryptoJS.HmacSHA256(messageData, keyData).toString();
  }

  computeEncryptionKeysForUser({email, password, pw_salt, pw_func, pw_alg, pw_cost, pw_key_size} = {}, callback) {
     this.generateSymmetricKeyPair({password: password, pw_salt: pw_salt,
       pw_func: pw_func, pw_alg: pw_alg, pw_cost: pw_cost, pw_key_size: pw_key_size}, function(keys){
         var pw = keys[0];
         var mk = keys[1];

         callback({pw: pw, mk: mk});
       });
   }

   generateInitialEncryptionKeysForUser({email, password} = {}, callback) {
     var defaults = this.defaultPasswordGenerationParams();
     var {pw_func, pw_alg, pw_key_size, pw_cost} = defaults;
     var pw_nonce = this.generateRandomKey();
     var pw_salt = this.sha1(email + "SN" + pw_nonce);
     this.generateSymmetricKeyPair(_.merge({email: email, password: password, pw_salt: pw_salt}, defaults), function(keys){
       var pw = keys[0];
       var mk = keys[1];

       callback(_.merge({pw: pw, mk: mk, pw_nonce: pw_nonce}, defaults));
     });
   }
}

export { SNCrypto }
