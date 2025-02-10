export default class AppError extends Error {
  private _statusCode: number;
  public _isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this._statusCode = statusCode;
    this._isOperational = true;

    // Error.captureStackTrace(this, this.constructor);
  }

  get statusCode() {
    return this._statusCode;
  }
}
