// up makes new changes
// knex methods

exports.up = function(knex) {
  return knex.schema.createTable("fruits", tbl => {
    tbl.increments("id"),
      tbl
        .text("name", 128)
        .unique()
        .notNullable();
    tbl.decimal("avgWeightOz").notNullable();
    tbl.boolean("delicious");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits");
};

// down takes the changes out
//run knex migrate:latest executes up , to see database in SQLiteStudio
