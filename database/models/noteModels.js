const db = require('../dbConfig.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

//NOTES
function find() {
    return db('notes')
}

function findById(id) {
    return db('notes').where({ id }).first()
}

function add(note) {
    return db('notes')
        .insert(note)
        .then(ids => { id: ids[0] })
}

function update(changes, id) {
    return db('notes')
        .where({ id: noteid })
        .update(changes)
}

function remove(id) {
    return db('notes')
        .where({ id })
        .del()
}
