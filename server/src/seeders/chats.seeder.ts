import { Chat } from "src/entities/chats.entity";
import { User } from "src/entities/users.entity";
import { CustomUuid } from "src/utilities/uuid";
import { DataSource } from "typeorm";

export class ChatsSeeder {
  static async up(dataSource: DataSource) {
    const usersRepo = dataSource.getRepository(User);
    const chatsRepo = dataSource.getRepository(Chat);

    const users: User[] = await usersRepo.find();

    await chatsRepo.insert(
      Array.from({ length: 7 }).map(() => {
        const isGroup = Math.random() > 0.6;
        return {
          id: CustomUuid.generateUuid(),
          isGroup,
          ownerId: isGroup ? users[Math.floor(Math.random() * 10)].id : (null as any),
        };
      })
    );
    console.log("✅ chats seeded");
  }

  static async down(dataSource: DataSource) {
    await dataSource.query(`TRUNCATE TABLE "chats" RESTART IDENTITY CASCADE`);
    console.log("✅ chats removed");
  }
}
