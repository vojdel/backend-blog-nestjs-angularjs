import { Injectable } from '@nestjs/common';
import { CreatePostDetailDto } from './dto/create-post-detail.dto';
import { UpdatePostDetailDto } from './dto/update-post-detail.dto';

@Injectable()
export class PostDetailsService {
  create(createPostDetailDto: CreatePostDetailDto) {
    return 'This action adds a new postDetail';
  }

  findAll() {
    return `This action returns all postDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postDetail`;
  }

  update(id: number, updatePostDetailDto: UpdatePostDetailDto) {
    return `This action updates a #${id} postDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} postDetail`;
  }
}
