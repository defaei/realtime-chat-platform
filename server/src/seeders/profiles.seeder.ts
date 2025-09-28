import { Profile } from "src/entities/profiles.entity";
import { User } from "src/entities/users.entity";
import { CustomUuid } from "src/utilities/uuid";
import { DataSource } from "typeorm";

const usersInfos = [
  {
    username: "alice",
    lastName: "Johnson",
    bio: "Loves books and coffee, exploring new ideas every day.",
    dateOfBirth: "1999-04-21",
  },
  {
    username: "bob",
    lastName: "Smith",
    bio: "Tech enthusiast and football fan, always ready for a challenge.",
    dateOfBirth: "1998-11-12",
  },
  {
    username: "charlie",
    lastName: "Brown",
    bio: "Adventurer at heart, enjoys hiking and nature photography.",
    dateOfBirth: "2000-06-05",
  },
  {
    username: "david",
    lastName: "Miller",
    bio: "Musician and gamer, passionate about creating experiences.",
    dateOfBirth: "1997-02-14",
  },
  {
    username: "eve",
    lastName: "Davis",
    bio: "Creative designer, loves art galleries and fashion.",
    dateOfBirth: "2001-08-09",
  },
  {
    username: "frank",
    lastName: "Wilson",
    bio: "Fitness lover and software developer with a taste for puzzles.",
    dateOfBirth: "1996-12-01",
  },
  {
    username: "grace",
    lastName: "Taylor",
    bio: "Writer and traveler, documenting stories around the world.",
    dateOfBirth: "1999-03-18",
  },
  {
    username: "henry",
    lastName: "Anderson",
    bio: "Foodie and photographer, always chasing the perfect shot.",
    dateOfBirth: "1995-09-25",
  },
  {
    username: "irene",
    lastName: "Thomas",
    bio: "Engineer and chess player, curious about how things work.",
    dateOfBirth: "1998-07-30",
  },
  {
    username: "jack",
    lastName: "White",
    bio: "Entrepreneur spirit, passionate about startups and innovation.",
    dateOfBirth: "2000-01-11",
  },
];

export class ProfilesSeeder {
  static async up(dataSource: DataSource) {
    const profilesRepo = dataSource.getRepository(Profile);
    const usersRepo = dataSource.getRepository(User);
    const users = await usersRepo.find();

    await profilesRepo.insert(
      users.map((user) => {
        const userInfo = usersInfos.find(({ username }) => username === user.username);
        return {
          id: CustomUuid.generateUuid(),
          firstname: userInfo?.username,
          lastname: Math.random() > 0.5 ? userInfo?.lastName : (null as any),
          bio: Math.random() > 0.5 ? userInfo?.bio : (null as any),
          dateOfBirth: Math.random() > 0.5 ? userInfo?.dateOfBirth : (null as any),
          userId: user.id,
        };
      })
    );
    console.log("✅ profiles seeded");
  }

  static async down(dataSource: DataSource) {
    await dataSource.query(`TRUNCATE TABLE "profiles" RESTART IDENTITY CASCADE`);
    console.log("✅ profiles removed");
  }
}
