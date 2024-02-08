const jwt=require('jsonwebtoken');
let KEY=process.env.SECRET_KEY;
exports.EncodeToken=(email,user_id)=>{

    let EXPIRE={expiresIn: '24h'}
    let PAYLOAD={email:email, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

exports.DecodeToken=(token)=>{
    try {
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}