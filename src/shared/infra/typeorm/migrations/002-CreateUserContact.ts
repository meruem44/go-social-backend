import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserContact1624452979707 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "contacts",
        columns: [
          {
            name: "id",
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isPrimary: true,
            type: "uuid",
          },
          {
            name: "user_id",
            type: "uuid",
            isUnique: true,
          },
          {
            name: "whatssap",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telegram",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "facebook",
            type: "varchar",
            isNullable: true,
          },

          {
            name: "instagram",
            type: "varchar",
            isNullable: true,
          },

          {
            name: "linkedin",
            type: "varchar",
            isNullable: true,
          },

          {
            name: "link",
            type: "varchar",
            isNullable: true,
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
    await queryRunner.dropTable("contacts");
  }
}
