import { MigrationInterface, QueryRunner, TableUnique } from 'typeorm';

export class UsersUniqueConstraint1758613076281 implements MigrationInterface {
  name = 'UsersUniqueConstraint1758613076281';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createUniqueConstraint(
      'users',
      new TableUnique({
        name: 'UQ_users_username',
        columnNames: ['username'],
      }),
    );
    await queryRunner.createUniqueConstraint(
      'users',
      new TableUnique({
        name: 'UQ_users_email',
        columnNames: ['email'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropUniqueConstraint('users', 'UQ_users_username');
    await queryRunner.dropUniqueConstraint('users', 'UQ_users_email');
  }
}
