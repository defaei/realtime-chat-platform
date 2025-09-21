import ChatRoleEnum from 'src/enums/chat-role';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ChatsParticipants1758462620056 implements MigrationInterface {
  name = 'ChatsParticipants1758462620056';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'chats-participants',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'role',
            type: 'enum',
            enum: Object.values(ChatRoleEnum),
            default: `'${ChatRoleEnum.Member}'`,
          },
          {
            name: 'joinsAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'leavesAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chats-participants');
  }
}
