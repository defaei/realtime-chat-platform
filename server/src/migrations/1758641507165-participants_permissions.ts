import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ParticipantsPermissions1758641507165
  implements MigrationInterface
{
  name = 'ParticipantsPermissions1758641507165';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'participants_permissions',
        columns: [
          {
            name: 'participantId',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'permissionId',
            type: 'varchar',
            isPrimary: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('participants_permissions', [
      new TableForeignKey({
        columnNames: ['participantId'],
        referencedTableName: 'chats_participants',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['permissionId'],
        referencedTableName: 'permissions',
        referencedColumnNames: ['id'],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('participants_permissions');
  }
}
