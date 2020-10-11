type Thread = {
  id: number,
  title: string,
  messageCount: number,
};

type ThreadDictionary = {
  [url: string]: string;
}


export default Thread;
export type { ThreadDictionary };
