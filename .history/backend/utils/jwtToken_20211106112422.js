const sendToken = (user, statusCode, res){

    const token = user.getJWTToken();

    // options for cookie
    const option = {
        expires:new Date(
            Date.now + process.env.COOKIE_EXPIRE * 24 
        ),
        httpOnly: true,
    }
}