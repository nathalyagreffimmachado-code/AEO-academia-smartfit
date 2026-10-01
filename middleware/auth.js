import jwt from 'jsonwebtoken'

const segredo = 'amoofefe'

export default async function authMiddleware(req,res,next) {
    console.log("aqui")
    try {
      const token = req.headers['authorization']
      console.log(token)
      if (!token){
        throw new Error()
      }
      const decoded = jwt.verify(token,segredo)
      
      req.session = decoded
      next()
    } catch (error) {
        res.status(403).send({
            message: "usuario ou senha invalida"
        })
    }
}