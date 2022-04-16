export interface IRead<T> {
  findAll(item: T): Promise<T[]>;
  findOne(id: string): Promise<T | undefined>;
}
