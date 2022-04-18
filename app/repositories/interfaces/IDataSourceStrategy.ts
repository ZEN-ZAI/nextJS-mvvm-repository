interface IDataSourceStrategy<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T | undefined>;
  post(item: T): Promise<boolean>;
  put(id: string, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export default IDataSourceStrategy;
