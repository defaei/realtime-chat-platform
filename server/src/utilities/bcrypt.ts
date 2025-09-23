import bcrypt from 'node_modules/bcryptjs';

export class CustomBcrypt {
  static hashString(value: string) {
    return bcrypt.hashSync(value);
  }
}
