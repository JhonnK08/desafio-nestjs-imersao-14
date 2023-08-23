import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route.dto';

@Injectable()
export class RoutesService {
  constructor(private prismaService: PrismaService) {}
  create(createRouteDto: CreateRouteDto) {
    return this.prismaService.route.create({
      data: {
        name: createRouteDto.name,
        destination: createRouteDto.destination,
        source: createRouteDto.source,
      },
    });
  }

  findAll() {
    return this.prismaService.route.findMany();
  }
}
