import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Follwer } from './entities/follower.entity';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@Resolver(() => Follwer)
export class FollowerResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() follower: Follwer): Post[] {
    return this.postsService.forAuthor(follower.id);
  }
}
