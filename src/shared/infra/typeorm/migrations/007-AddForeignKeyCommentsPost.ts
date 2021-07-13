import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddForeignKeyCommentsPost1625606189567
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.addColumn('comments', new TableColumn({
      name: 'post_id',
      type: 'uuid',
    }))

    await queryRunner.createForeignKey(
      "comments",
      new TableForeignKey({
        name: "PostCommentsID",
        columnNames: ["post_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "posts",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("comments", "PostCommentsID");
    await queryRunner.dropColumn('comments', 'post_id')
  }
}
