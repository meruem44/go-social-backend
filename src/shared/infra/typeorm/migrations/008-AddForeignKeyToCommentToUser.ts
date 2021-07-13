import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddForeignKeyToCommentToUser1626177874191
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "comments",
      new TableColumn({
        name: "user_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "comments",
      new TableForeignKey({
        name: "UserIdComment",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("comments", "UserIdComment");
    await queryRunner.dropColumn("comments", "user_id");
  }
}
