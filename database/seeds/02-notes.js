
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        { user_id: 1, title: 'user1_note1', note_text: 'user1 note1' },
        { user_id: 1, title: 'user1_note2', note_text: 'user1 note1' },
        { user_id: 1, title: 'user1_note3', note_text: 'user1 note1' },
        { user_id: 2, title: 'user2_note1', note_text: 'user2 note1' },
        { user_id: 2, title: 'user2_note2', note_text: 'user2 note1' },
        { user_id: 2, title: 'user2_note3', note_text: 'user2 note1' },
        { user_id: 3, title: 'user3_note1', note_text: 'user3 note1' },
        { user_id: 3, title: 'user3_note2', note_text: 'user3 note2' },
        { user_id: 3, title: 'user3_note3', note_text: 'user3 note3' },
      ]);
    });
};
