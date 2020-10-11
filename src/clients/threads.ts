import client from './client';
import Thread from '../models/Thread';

type getThreadsRequest = {
  bbs: string,
}

type getThreadsResponse = {
  ok: boolean,
  threads: Thread[],
}

const getThreads = async (url: string): Promise<getThreadsResponse> => {
  const res = await client.get(url);
  const result: getThreadsResponse = res.data;

  return result;
}

export { getThreads };
export type { getThreadsResponse };
