import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Follower {
  @Field(()=> ID)
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
