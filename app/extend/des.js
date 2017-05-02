/**
 *
 */
'use strict';
const crypto = require('crypto');
module.exports = {
  encrypt(plaintext, key) {
    const cipher = crypto.createCipheriv('des-ecb', key, '');
    cipher.setAutoPadding(true)
    let ciph = cipher.update(plaintext, 'utf8', 'base64');
    ciph += cipher.final('base64');
    return ciph;
  },
  decrypt(encrypt_text, key) {
    const decipher = crypto.createDecipheriv('des-ecb', key, '');
    decipher.setAutoPadding(true);
    let txt = decipher.update(encrypt_text, 'base64', 'utf8');
    txt += decipher.final('utf8');
    return txt;
  },
};
