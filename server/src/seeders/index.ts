import { TypeOrmDataSource } from 'src/utilities/data-source';
import { UsersSeeder } from './users.seeder';
import { PermissionsSeeder } from './permissions.seeder';
import { ProfilesSeeder } from './profiles.seeder';
import { ChatsSeeder } from './chats.seeder';
import { MembershipsSeeder } from './memberships.seeder';

(async () => {
  try {
    const run = process.argv[2];
    await TypeOrmDataSource.initialize();

    if (run === 'run') {
      await UsersSeeder.up(TypeOrmDataSource);
      await PermissionsSeeder.up(TypeOrmDataSource);
      await ProfilesSeeder.up(TypeOrmDataSource);
      await ChatsSeeder.up(TypeOrmDataSource);
      await MembershipsSeeder.up(TypeOrmDataSource);
    } else if (run === 'revert') {
      await MembershipsSeeder.down(TypeOrmDataSource);
      await ChatsSeeder.down(TypeOrmDataSource);
      await ProfilesSeeder.down(TypeOrmDataSource);
      await PermissionsSeeder.down(TypeOrmDataSource);
      await UsersSeeder.down(TypeOrmDataSource);
    }

    TypeOrmDataSource.destroy();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
