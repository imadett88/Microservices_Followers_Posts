import { NestFactory } from '@nestjs/core';
import { FollowersModule } from './followers.module';

async function bootstrap() {
  const app = await NestFactory.create(FollowersModule);
  await app.listen(3000);
}
bootstrap();
