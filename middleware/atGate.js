function atGate(req, res, next) {
    console.log('At the gate, waiting to be eaten');
    next();
}

module.exports = atGate;