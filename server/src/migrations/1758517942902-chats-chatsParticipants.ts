import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class ChatsChatsParticipants1758517942902 implements MigrationInterface {
  name = 'ChatsChatsParticipants1758517942902';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'chats_participants',
      new TableColumn({
        name: 'chatId',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'chats_participants',
      new TableForeignKey({
        columnNames: ['chatId'],
        referencedTableName: 'chats',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('chats_participants', 'chatId');
  }
}
