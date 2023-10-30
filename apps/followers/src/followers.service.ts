import { Injectable } from '@nestjs/common';
import { CreateFollowerInput } from './dto/create-follower.input';
import { Follower } from './entities/follower.entity';

@Injectable()
export class FollowersService {
  private readonly followers: Follower[] = [];


  create(createFollowerInput: CreateFollowerInput) {
    this.followers.push(createFollowerInput);
    return createFollowerInput;
  }

  findAll() {
    return this.followers;
  }

  findOne(id: string) {
    return this.followers.find(follower => follower.id === id);
  }
}
