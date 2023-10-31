import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Follwer } from './follower.entity';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  body: string;

  @Field()
  authorId: string;

  @Field(() => Follwer)
  follower?: Follwer;
}
