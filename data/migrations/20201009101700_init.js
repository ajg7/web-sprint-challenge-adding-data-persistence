
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", table => {
            table.increments();
            table.string("name").notNullable().unique();
            table.string("description");
            table.boolean("completed").notNullable().defaultTo(false);
            table.integer("taskID").unsigned().references("id").inTable("projects").onDelete("RESTRICT").onUpdate("CASCADE");
            table.integer("resourceID").unsigned().references("id").inTable("resources").onDelete("RESTRICT").onUpdate("CASCADE");
        })
        .createTable("tasks", table => {
            table.increments();
            table.string("description").notNullable();
            table.string("notes");
            table.boolean("completed").notNullable().defaultTo(false);
            table.integer("projectID").unsigned().references("id").inTable("projects").onDelete("RESTRICT").onUpdate("CASCADE");
        })
        .createTable("resources", table => {
            table.increments();
            table.string("name").notNullable().unique();
            table.string("description");
            table.integer("projectID").unsigned().references("id").inTable("projects").onDelete("RESTRICT").onUpdate("CASCADE");
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks");
}; 
