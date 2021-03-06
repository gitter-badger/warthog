import { BaseModel, Model, OneToMany, StringField } from '../../../src';

import { Post } from './post.entity';

@Model()
export class User extends BaseModel {
  @StringField()
  firstName?: string;

  @OneToMany(() => Post, post => post.user)
  posts?: Post[];
}
