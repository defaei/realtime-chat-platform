import { v4 as uuid } from 'uuid';

export class CustomUuid {
  static generateUuid() {
    return uuid();
  }
}
