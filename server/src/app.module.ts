import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmDataSource } from './utilities/data-source';
import { User } from './entities/users.entity';
import { Permission } from './entities/chatPermissions.entity';
import { Chat } from './entities/chats.entity';
import { ChatParticipant } from './entities/memberships.entity';
import { Message } from './entities/messages.entity';
import { Attachment } from './entities/attachments.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(TypeOrmDataSource.options),
    User,
    Permission,
    Chat,
    ChatParticipant,
    Message,
    Attachment,
  ],
})
export class AppModule {}
