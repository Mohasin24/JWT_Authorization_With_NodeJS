const jwt = require('jsonwebtoken')

const authenticationMiddleware = async(req,res,next)=>{
     
     const authHeader = req.headers.authorization;

     if(!authHeader || !authHeader.startsWith('Bearer ')){
          throw new Error('No token provided')
     }

     const token = authHeader.split(' ')[1]
     
     try {
          const decode = jwt.verify(token, process.env.JWT_Secret)
          
          const {id,username } = decode
          req.user = {id,username}
          next()
     } catch (error) {
          throw new Error('Inavlid token')
     }
     
}

module.exports = authenticationMiddleware;