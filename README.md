# Scalable Chat App

A full-stack messaging platform built with NestJS, React.js, PostgreSQL, and TypeORM.  
Phase 1 includes authentication, user roles & permissions (PBAC), 1-to-1 & group chats, messages, attachments, and a React.js client interface.

---

## Badges

![License](https://img.shields.io/badge/license-MIT-blue)
![NestJS](https://img.shields.io/badge/NestJS-v10.2-orange)
![React](https://img.shields.io/badge/React-v18.2-blue)

---

## Tech Stack

- **Backend:** NestJS, TypeORM, PostgreSQL
- **Frontend:** React.js, Tailwind CSS
- **Authentication:** JWT, Refresh Tokens
- **Authorization:** PBAC (Permission-Based Access Control)
- **File Uploads:** Multer (local storage)

---

## Phase 1 Features

- User registration & login (JWT + refresh tokens)
- Roles & permissions (PBAC)
- 1-to-1 private chats & group chats
- Sending, editing, and deleting messages
- File uploads (images, docs) attached to messages
- Ownership guards for message & attachment editing/deleting
- React.js client for basic chat interface
