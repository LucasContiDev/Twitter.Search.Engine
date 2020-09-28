import { Entities } from './twitter-message-entities';
import { User } from './twitter-message-user';

export class Status {
  created_at: any;
  id: any;
  text: any;
  entities: Entities;
  user: User;
}
