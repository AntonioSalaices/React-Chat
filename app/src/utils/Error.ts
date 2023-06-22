class MyError extends Error {
  constructor(name: string) {
    super(name);
    this.name = this.constructor.name;
  }
}
export class ReadError extends MyError {
  constructor(message: any, cause: any) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

export class ValidationError extends MyError {}
export class PropertyRequiredError extends ValidationError {
  property: string;
  constructor(property: string) {
    super(`No property: ${property}`);
    this.name = 'PropertyRequiredError';
    this.property = property;
  }
}
