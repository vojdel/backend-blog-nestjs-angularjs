import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostDetailsService } from './post-details.service';
import { CreatePostDetailDto } from './dto/create-post-detail.dto';
import { UpdatePostDetailDto } from './dto/update-post-detail.dto';

@Controller('post-details')
export class PostDetailsController {
  constructor(private readonly postDetailsService: PostDetailsService) {}

  @Post()
  create(@Body() createPostDetailDto: CreatePostDetailDto) {
    return this.postDetailsService.create(createPostDetailDto);
  }

  @Get()
  findAll() {
    return this.postDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDetailDto: UpdatePostDetailDto) {
    return this.postDetailsService.update(+id, updatePostDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postDetailsService.remove(+id);
  }
}
