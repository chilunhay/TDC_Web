const sendToken = (user, statusCode, res){

    const token = user.getJWTToken();

    // options for cookie
    const option = {
        expires:new Date,
        httpOnly: true,
    }
}