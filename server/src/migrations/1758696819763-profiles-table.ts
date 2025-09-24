import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ProfilesTable1758696819763 implements MigrationInterface {
  name = 'ProfilesTable1758696819763';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profiles',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'firstname',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'lastname',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bio',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'avatarUrl',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dateOfBirth',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('profiles');
  }
}
