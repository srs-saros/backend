import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    'users',
    function (table: Knex.CreateTableBuilder) {
      table.increments();
      table.string('username');
      table.timestamps();
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users');
}
