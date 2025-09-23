import { Permission } from 'src/entities/permissions.entity';
import { User } from 'src/entities/users.entity';
import { CustomUuid } from 'src/utilities/uuid';
import { DataSource } from 'typeorm';

export class PermissionsSeeder {
  static async up(dataSource: DataSource) {
    const permissionRepo = dataSource.getRepository(Permission);

    await permissionRepo.insert([
      { id: CustomUuid.generateUuid(), name: 'ADMIN' },
      { id: CustomUuid.generateUuid(), name: 'MODERATORS' },
      { id: CustomUuid.generateUuid(), name: 'PREMIUM' },
      { id: CustomUuid.generateUuid(), name: 'NORMAL' },
    ]);
    console.log('✅ permissions seeded');
  }

  static async down(dataSource: DataSource) {
    await dataSource.query(
      `TRUNCATE TABLE "permissions" RESTART IDENTITY CASCADE`,
    );
    console.log('✅ permissions removed');
  }
}
