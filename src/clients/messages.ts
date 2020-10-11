import client from './client';
import Message from '../models/Message';

type getMessageRequest = {
  bbs: string,
}

type getMessagesResponse = {
  ok: boolean,
  messages: Message[],
}

const getMessages = async (url: string): Promise<getMessagesResponse> => {
  const res = await client.get(url);
  const result: getMessagesResponse = res.data;

  return result;
}

export { getMessages };
export type { getMessagesResponse };
