export abstract class BaseDto<T, U> {
  abstract fromJson(json: T): U;
}
