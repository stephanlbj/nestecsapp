import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { User } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET /users → retourne tous les utilisateurs
  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  // GET /users/:id → retourne un utilisateur par ID
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.appService.getUserById(Number(id));
  }
}
