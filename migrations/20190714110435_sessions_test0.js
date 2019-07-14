
exports.up = function(knex) {
  return knex.schema.createTable('sessions', sessions => {
    
    // Primary key   
    sessions.increments(); 
 
    // Country name 
    sessions 
        .string('country', 100)
        .notNullable()
        .unique(); 

    // Product name 
    sessions
        .string('product', 100)
        .notNullable(); 
    
    // Timestamp 
    sessions.timestamps(); 
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sessions'); 
};
