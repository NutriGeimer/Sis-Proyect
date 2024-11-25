import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.JWT_SECRET){
    console.error('JWT_SECRET is not defined')
    throw new Error('JWT_SECRET is missing')
}

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Token is missing, access denied'
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        })
    }
}

export default authMiddleware