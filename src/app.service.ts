import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

@Injectable()
export class AppService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Alice Dupont',
      email: 'alice.dupont@example.com',
      age: 28,
    },
    {
      id: 2,
      name: 'Bob Martin',
      email: 'bob.martin@example.com',
      age: 34,
    },
    {
      id: 3,
      name: 'Charlie Durand',
      email: 'charlie.durand@example.com',
      age: 22,
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`Utilisateur avec l'id ${id} introuvable`);
    }
    return user;
  }
}
