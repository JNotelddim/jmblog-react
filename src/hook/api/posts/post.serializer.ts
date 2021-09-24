import { Post, SummarizedPost } from 'src/typings';

const serializePost = (item: Record<string, unknown>) => ({
  id: item._id as string,
  title: item.title as string,
  content: item.content as string,
  author: item.author as string,
  createdAt: item.createdAt as string, // Date
  modifiedAt: item.modifiedAt as string, // Date
  comments: item.comments as string[], // Id array
});

const serializeSummarizedPost = (item: Record<string, unknown>) => ({
  id: item._id as string,
  title: item.title as string,
  summary: item.summary as string,
  author: item.author as string,
  createdAt: item.createdAt as string, // Date
});

export const serializePostResponse = async (
  response: Response
): Promise<Post> => {
  const payload = (await response.json()) as unknown;
  return serializePost(payload as Record<string, unknown>);
};

export const serializePostsResponse = async (
  response: Response
): Promise<SummarizedPost[]> => {
  const payload = (await response.json()) as unknown;
  return (payload as Record<string, unknown>[]).map(serializeSummarizedPost);
};
