import { User } from 'src/entities/users.entity';
import { CustomBcrypt } from 'src/utilities/bcrypt';
import { CustomUuid } from 'src/utilities/uuid';
import { DataSource } from 'typeorm';

export class UsersSeeder {
  static async up(dataSource: DataSource) {
    const repository = dataSource.getRepository(User);

    await repository.insert([
      {
        id: CustomUuid.generateUuid(),
        username: 'alice',
        email: 'alice@gmail.com',
        password: CustomBcrypt.hashString('alice123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'bob',
        email: 'bob@gmail.com',
        password: CustomBcrypt.hashString('bob123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'charlie',
        email: 'charlie@gmail.com',
        password: CustomBcrypt.hashString('charlie123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'david',
        email: 'david@gmail.com',
        password: CustomBcrypt.hashString('david123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'eve',
        email: 'eve@gmail.com',
        password: CustomBcrypt.hashString('eve123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'frank',
        email: 'frank@gmail.com',
        password: CustomBcrypt.hashString('frank123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'grace',
        email: 'grace@gmail.com',
        password: CustomBcrypt.hashString('grace123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'henry',
        email: 'henry@gmail.com',
        password: CustomBcrypt.hashString('henry123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'irene',
        email: 'irene@gmail.com',
        password: CustomBcrypt.hashString('irene123456'),
      },
      {
        id: CustomUuid.generateUuid(),
        username: 'jack',
        email: 'jack@gmail.com',
        password: CustomBcrypt.hashString('jack123456'),
      },
    ]);
    console.log('✅ users seeded');
  }

  static async down(dataSource: DataSource) {
    await dataSource.query(`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`);
    console.log('✅ users removed');
  }
}
