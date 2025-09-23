import { TypeOrmDataSource } from 'src/utilities/data-source';
import { UsersSeeder } from './users.seeder';
import { PermissionsSeeder } from './permissions.seeder';

(async () => {
  try {
    const run = process.argv[2];
    await TypeOrmDataSource.initialize();

    if (run === 'run') {
      await UsersSeeder.up(TypeOrmDataSource);
      await PermissionsSeeder.up(TypeOrmDataSource);
    } else if (run === 'revert') {
      await PermissionsSeeder.down(TypeOrmDataSource);
      await UsersSeeder.down(TypeOrmDataSource);
    }

    TypeOrmDataSource.destroy();
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
})();
