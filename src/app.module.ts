import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostDetailsModule } from './post-details/post-details.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostDetailsModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
