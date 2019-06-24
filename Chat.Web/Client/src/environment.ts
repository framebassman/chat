export const sentry_dns = 'https://1fbf53730f2248fea3880f6af3b81de0@sentry.io/1487973';

export function env(): string {
  if (process.env.ASPNETCORE_ENVIRONMENT === undefined && process.env.NODE_ENV === undefined) {
    return 'PRODUCTION';
  }
  if (process.env.NODE_ENV === undefined && process.env.ASPNETCORE_ENVIRONMENT !== undefined) {
    return process.env.ASPNETCORE_ENVIRONMENT.toUpperCase();
  }
  return process.env.NODE_ENV.toUpperCase();
};

export function isProd(): boolean {
  return env() === 'PRODUCTION';
}
