
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'user_1', password: 'password_1' },
        { username: 'user_2', password: 'password_2' },
        { username: 'user_3', password: 'password_3' },
      ]);
    });
};
