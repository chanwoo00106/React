import jwt from 'jsonwebtoken';

const jwtMiddleware = (ctx, next) => {
    const token = ctx.cookies.get('access_token');
    console.log(token)
    if (!token) return next();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        return next();
    } catch(e){
        // 토큰 검증 실패
        return next();
    }
}

export default jwtMiddleware;