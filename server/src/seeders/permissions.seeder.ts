import { ChatPermission } from "src/entities/chatPermissions.entity";
import { CustomUuid } from "src/utilities/uuid";
import { DataSource } from "typeorm";

const permissions = [
  "READ_MESSAGES",
  "SEND_MESSAGES",
  "EDIT_MESSAGES",
  "DELETE_MESSAGES",
  "ADD_MEMBERS",
  "SEND_ATTACHMENTS",
  "KICK_MEMBERS",
];

export class PermissionsSeeder {
  static async up(dataSource: DataSource) {
    const permissionRepo = dataSource.getRepository(ChatPermission);

    await permissionRepo.insert(
      permissions.map((permission) => ({
        id: CustomUuid.generateUuid(),
        name: permission,
      }))
    );
    console.log("✅ permissions seeded");
  }

  static async down(dataSource: DataSource) {
    await dataSource.query(`TRUNCATE TABLE "chatPermissions" RESTART IDENTITY CASCADE`);
    console.log("✅ permissions removed");
  }
}
