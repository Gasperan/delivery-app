"use strict";

exports.up = async function (knex) {
  return knex.schema.createTable("search_history", (table) => {
    table.string("id").primary();
    table.string("origin").notNullable();
    table.string("destination").notNullable();
    table.decimal("distance");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("search_history");
};
