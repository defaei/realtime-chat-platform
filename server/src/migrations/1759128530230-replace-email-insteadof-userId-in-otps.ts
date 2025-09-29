import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class ReplaceEmailInsteadofUserIdInOtps1759128530230 implements MigrationInterface {
  name = "ReplaceEmailInsteadofUserIdInOtps1759128530230";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("otps", "userId");
    await queryRunner.addColumn(
      "otps",
      new TableColumn({
        name: "email",
        type: "varchar",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("otps", "email");
    await queryRunner.addColumn(
      "otps",
      new TableColumn({
        name: "userId",
        type: "varchar",
        isNullable: false,
      })
    );
    await queryRunner.createForeignKey(
      "otps",
      new TableForeignKey({
        columnNames: ["userId"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
      })
    );
  }
}
