import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FollowersService } from './followers.service';
import { Follower } from './entities/follower.entity';
import { CreateFollowerInput } from './dto/create-follower.input';

@Resolver(() => Follower)
export class FollowersResolver {
  constructor(private readonly followersService: FollowersService) {}

  @Mutation(() => Follower)
  createFollower(@Args('createFollowerInput') createFollowerInput: CreateFollowerInput) {
    return this.followersService.create(createFollowerInput);
  }

  @Query(() => [Follower], { name: 'followers' })
  findAll() {
    return this.followersService.findAll();
  }

  @Query(() => Follower, { name: 'follower' })
  findOne(@Args('id') id: string) {
    return this.followersService.findOne(id);
  }

}
