import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class ProfilesUsersRelation1758697066094 implements MigrationInterface {
  name = 'ProfilesUsersRelation1758697066094';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'profiles',
      new TableColumn({
        name: 'userId',
        type: 'varchar',
        isNullable: false,
      }),
    );
    await queryRunner.createForeignKey(
      'profiles',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('profiles', 'userId');
  }
}
