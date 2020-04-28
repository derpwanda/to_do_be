const db = require("../dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    getNotesByUserId,
    deleteUser
};

function getNotesByUserId(id) {
    return db("notes").where({ "notes.user_id": id });
}

function find() {
    const query = db("users").select("id", "username");
    return query;
}

function findBy(filter) {
    return db("users").where(filter);
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
}

function findById(id) {
    return db("users")
        .select("id", "username") // doesnt display password
        .where({ id })
        .first();
}

function deleteUser(id) {
    return db("users")
        .where({ id })
        .del();
}