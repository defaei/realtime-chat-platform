import { User } from 'src/entities/users.entity';
import { CustomBcrypt } from 'src/utilities/bcrypt';
import { CustomUuid } from 'src/utilities/uuid';
import { DataSource } from 'typeorm';

const usersNames = [
  'alice',
  'bob',
  'charlie',
  'david',
  'eve',
  'frank',
  'grace',
  'henry',
  'irene',
  'jack',
];

export class UsersSeeder {
  static async up(dataSource: DataSource) {
    const repository = dataSource.getRepository(User);

    await repository.insert(
      usersNames.map((name: string) => ({
        id: CustomUuid.generateUuid(),
        username: name,
        email: `${name}@gmail.com`,
        password: CustomBcrypt.hashString(`${name}123456`),
      })),
    );
    console.log('✅ users seeded');
  }

  static async down(dataSource: DataSource) {
    await dataSource.query(`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`);
    console.log('✅ users removed');
  }
}
