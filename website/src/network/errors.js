export class HttpError extends Error {
  name = 'HTTP ERROR';
}

export class ServerError extends Error {
  name = 'Server ERROR';
  constructor(message) {
    super();
    this.message = message;
  }
}