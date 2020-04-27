const bcrypt = require('bcryptjs')

function auth(req, res, next) {
    console.log('hello from auth')
    let user = req.body

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash

    console.log('goodbye from auth')

}

module.exports = auth;
