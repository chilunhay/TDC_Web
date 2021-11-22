const sendToken = (user, statusCode, res){

    const token = user.getJWTToken();

    // options for cookie
    const option = {
        expires:new Date(
            Date.now + pro
        ),
        httpOnly: true,
    }
}