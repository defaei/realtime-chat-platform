import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UsersChatsParticipants1758516045615 implements MigrationInterface {
  name = 'UsersChatsParticipants1758516045615';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('chats-participants', 'chats_participants');

    await queryRunner.addColumn(
      'chats_participants',
      new TableColumn({
        name: 'userId',
        type: 'varchar',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'chats_participants',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('chats_participants', 'userId');
    await queryRunner.renameTable('chats_participants', 'chats-participants');
  }
}
