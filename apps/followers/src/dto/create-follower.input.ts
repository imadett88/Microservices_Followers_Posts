import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFollowerInput {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
