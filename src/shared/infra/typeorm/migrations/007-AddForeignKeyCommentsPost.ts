import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddForeignKeyCommentsPost1625606189567
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "posts",
      new TableForeignKey({
        name: "PostUserId",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("posts", "PostUserId");
  }
}
