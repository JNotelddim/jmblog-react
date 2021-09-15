import { User } from 'src/typings';

const serializeFn = (item: Record<string, unknown>): User => {
  return {
    email: item.email as string,
    id: item.id as string,
    username: item.username as string,
  };
};

export const serializeUser = async (response: Response): Promise<User> => {
  const payload = (await response.json()) as unknown;
  return serializeFn(payload as Record<string, unknown>);
};
