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

decrypt.encryption =  (text,key)=>{
    const iv = crypto.randomBytes(16);
    const key = crypto.randomBytes(32)
    const cipher = crypto.createCipheriv(
        'aes-256-cbc',
        key,
        iv
    );
    let encrypted = cipher.update(text,'utf8','hex');
    encrypted+= cipher.final('hex');

    return {
        iv : iv.toString('hex'),
        encrypted : encrypted
    };
}

export default decrypt