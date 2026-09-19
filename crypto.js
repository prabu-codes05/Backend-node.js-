import crypto from 'crypto'
/* Algorithm - sha-256, sha-512 */
const decrypt = {}
//random value
decrypt.random = crypto.randomBytes(16).toString('utf-8')
decrypt.hashing = crypto.createHash('sha256').update("Hello World").digest("hex")

//password hashing
decrypt.passwordHashing = (password) => {
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.createHmac('sha256',salt).update(password).digest('hex')
    return {
        salt,
        hash
    }
}
decrypt.verifyPassword = (password,salt,hash)=>{
    const hashVerify = crypto.createHmac('sha256',salt).update(password).digest('hex')
    return hash === hashVerify
}

 const iv = crypto.randomBytes(16);
 const key = crypto.randomBytes(32)

decrypt.encryption =  (text)=>{
   
    const cipher = crypto.createCipheriv( //cipher ley alg ,key and iv linxa
        'aes-256-cbc',
        key,
        iv
    );
    let encrypted = cipher.update(text,'utf8','hex');
    encrypted+= cipher.final('hex');//hex bhaneko hamle nabujni code , utf-8 bhaneko hamle bujni language

    return {
        iv : iv.toString('hex'),
        key ,
        encryptedData : encrypted

    };
}

decrypt.decrypts = (encrypted)=>{
    const decipher = crypto.createDecipheriv(
        'aes-256-cbc',
        key,
        iv,
    );

    let decrypted = decipher.update(encrypted,'hex','utf-8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

export default decrypt