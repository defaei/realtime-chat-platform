import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class MessagesChatsRelation1758517198675 implements MigrationInterface {
  name = 'MessagesChatsRelation1758517198675';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'messages',
      new TableColumn({
        name: 'chatId',
        type: 'varchar',
        isNullable: false,
      }),
    );
    await queryRunner.createForeignKey(
      'messages',
      new TableForeignKey({
        columnNames: ['chatId'],
        referencedTableName: 'chats',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('messages', 'chatId');
  }
}
