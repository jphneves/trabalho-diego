import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PerdiacheiService } from './perdiachei.service';
import { CreatePerdiacheiDto } from './dto/create-perdiachei.dto';
import { UpdatePerdiacheiDto } from './dto/update-perdiachei.dto';

@Controller('perdiachei')
export class PerdiacheiController {
  constructor(private readonly perdiacheiService: PerdiacheiService) {}

  @Post()
  create(@Body() createPerdiacheiDto: CreatePerdiacheiDto) {
    return this.perdiacheiService.create(createPerdiacheiDto);
  }

  @Get()
  findAll() {
    return this.perdiacheiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perdiacheiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerdiacheiDto: UpdatePerdiacheiDto) {
    return this.perdiacheiService.update(+id, updatePerdiacheiDto);
  }

  @Put(':id')
  updateWithPut(@Param('id') id: string, @Body() updatePerdiacheiDto: UpdatePerdiacheiDto) {
    return this.perdiacheiService.update(+id, updatePerdiacheiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perdiacheiService.remove(+id);
  }
}
