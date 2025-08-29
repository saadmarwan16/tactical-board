export abstract class BaseUsecase<T, U> {
  abstract execute(query: T): Promise<U>;
}
