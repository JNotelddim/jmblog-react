import { Post } from 'src/typings';

export const serializePost = (item: Record<string, unknown>) => ({
  id: item._id as string,
  title: item.title as string,
  content: item.content as string,
  author: item.author as string,
  createdAt: item.createdAt as string, // Date
  modifiedAt: item.modifiedAt as string, // Date
  comments: item.comments as string[], // Id array
});

export const serializePosts = async (response: Response): Promise<Post[]> => {
  const payload = (await response.json()) as unknown;
  return (payload as Record<string, unknown>[]).map(serializePost);
};
