import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class MessagesAttachmentsRelation1758516884396
  implements MigrationInterface
{
  name = 'MessagesAttachmentsRelation1758516884396';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'attachments',
      new TableColumn({
        name: 'messageId',
        type: 'varchar',
        isNullable: false,
      }),
    );
    await queryRunner.createForeignKey(
      'attachments',
      new TableForeignKey({
        columnNames: ['messageId'],
        referencedTableName: 'messages',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('attachments', 'messageId');
  }
}
