import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePost1624381933132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'posts',
        columns: [
          {
            name: "id",
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isPrimary: true,
            type: "uuid",
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'content',
            type: 'varchar(200)',
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ]
      }))


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('posts')
    }

}
