import { ObjectType, Field, Int, ID, Directive } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
export class Follower {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
