import { Module } from '@nestjs/common';
import { PostDetailsService } from './post-details.service';
import { PostDetailsController } from './post-details.controller';

@Module({
  controllers: [PostDetailsController],
  providers: [PostDetailsService]
})
export class PostDetailsModule {}
