import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class GroupProfilesRelation1759036893096 implements MigrationInterface {
  name = 'GroupProfilesRelation1759036893096';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'groupProfiles',
      new TableColumn({
        name: 'chatId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'groupProfiles',
      new TableForeignKey({
        columnNames: ['chatId'],
        referencedTableName: 'chats',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('groupProfiles', 'chatId');
  }
}
