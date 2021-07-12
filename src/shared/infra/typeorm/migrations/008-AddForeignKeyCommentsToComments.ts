import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddForeignKeyCommentsToComments1625605814763
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
        columns: [
          {
            name: "id",
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isPrimary: true,
            type: "uuid",
          },

          {
            name: "content",
            type: "varchar",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comments");
  }
}
