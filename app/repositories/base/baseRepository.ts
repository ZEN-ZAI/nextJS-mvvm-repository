import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  findAll(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<T | undefined> {
    throw new Error('Method not implemented.');
  }

  create(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
