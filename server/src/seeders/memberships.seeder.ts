import { Chat } from 'src/entities/chats.entity';
import { Membership } from 'src/entities/memberships.entity';
import { User } from 'src/entities/users.entity';
import { CustomPublicHelpers } from 'src/utilities/helpers/public';
import { CustomUuid } from 'src/utilities/uuid';
import { DataSource } from 'typeorm';

export class MembershipsSeeder {
  static async up(dataSource: DataSource) {
    const membershipsRepo = dataSource.getRepository(Membership);
    const usersRepo = dataSource.getRepository(User);
    const chatsRepo = dataSource.getRepository(Chat);

    const users = await usersRepo.find();
    const chats = await chatsRepo.find();

    let memberships: { chatId: string; members: string[] }[] = [];

    chats.forEach((chat) => {
      let members: string[] = [];
      while (true) {
        for (
          let i = 0;
          i < (chat.isGroup ? Math.floor(Math.random() * 3) + 3 : 2);
          i++
        ) {
          members.push(users[Math.floor(Math.random() * 10)].id);
        }
        if (CustomPublicHelpers.isArrayHasDuplicatedValue(members)) {
          members = [];
        }

        if (
          memberships.find((membership) =>
            CustomPublicHelpers.isArraysEqual(
              [...membership.members],
              [...members],
            ),
          ) &&
          !chat.isGroup
        ) {
          members = [];
        }

        if (members.length >= 2) {
          memberships.push({ chatId: chat.id, members });
          break;
        }
      }
    });

    for (const membership of memberships) {
      for (const member of membership.members) {
        await membershipsRepo.insert({
          id: CustomUuid.generateUuid(),
          chatId: membership.chatId,
          userId: member,
        });
      }
    }
    console.log('✅ memberships seeded');
  }

  static async down(dataSource: DataSource) {
    await dataSource.query(
      `TRUNCATE TABLE "memberships" RESTART IDENTITY CASCADE`,
    );
    console.log('✅ memberships removed');
    console.log('test');
  }
}
