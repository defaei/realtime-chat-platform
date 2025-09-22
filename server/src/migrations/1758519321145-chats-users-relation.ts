import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class ChatsUsersRelation1758519321145 implements MigrationInterface {
  name = 'ChatsUsersRelation1758519321145';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'chats',
      new TableColumn({
        name: 'ownerId',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'chats',
      new TableForeignKey({
        columnNames: ['ownerId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('chats', 'ownerId');
  }
}
