import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1623782055690 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isPrimary: true,
            type: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },

          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },

          {
            name: "avatar",
            type: "varchar",
            isNullable: true
          },

          {
            name: "bio",
            type: "varchar",
            isNullable: true
          },

          {
            name: "job",
            type: "varchar",
            isNullable: true
          },

          {
            name: "password",
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
    await queryRunner.dropTable("users");
  }
}
