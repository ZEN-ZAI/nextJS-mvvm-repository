interface IRepositoryStrategy<T> {
  getAll(): Promise<T[]> | T[];
  getOne(id: string): Promise<T | undefined> | T | undefined;
  post(item: T): Promise<boolean> | boolean;
  put(id: string, item: T): Promise<boolean> | boolean;
  delete(id: string): Promise<boolean> | boolean;
}

export default IRepositoryStrategy;
