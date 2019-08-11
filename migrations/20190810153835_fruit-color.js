exports.up = function(knex) {
  return knex.schema.table("fruits", tbl => {
    tbl.string("color", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.table("fruits", tbl => {
    tbl.dropColumn("color");
  });
};

//create migration files if you want to add to the data
