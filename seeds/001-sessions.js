
exports.seed = function(knex) {
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
        {country: 'Kenya', product: 'maize'},
        {country: 'Rwanda', product: 'oil'},
        {country: 'Uganda', product: 'rice'}
      ]);
    });
};
