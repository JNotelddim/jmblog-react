import { LoginResponse } from 'src/typings';

export const serializeLoginResponse = async (
  response: Response
): Promise<LoginResponse> => {
  const payload = (await response.json()) as Record<string, unknown>;
  return { accessToken: payload.access_token as string };
};
