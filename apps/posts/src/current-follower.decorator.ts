import { createParamDecorator } from '@nestjs/common';
import { GraphQLExecutionContext } from '@nestjs/graphql';

export const CurrentFollowerDecorator = createParamDecorator(
  (_data: any, ctx: GraphQLExecutionContext) => {
    try {
      const header = ctx.getArgs()[2].req.headers;
      if (headers.follower) {
        return JSON.parse(headers.follower);
      }
    } catch (err) {
      return null;
    }
  },
);
