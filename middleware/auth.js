function auth(req, res, next) {
    if (req.url === '/password') {
        next();
    } else {
        res.send('No soup for you!')
    }
}

module.exports = auth;
