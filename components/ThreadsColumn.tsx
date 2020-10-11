import React, { useEffect, useState } from 'react';
import { createStyles, List, makeStyles } from "@material-ui/core"
import ThreadCard from './ThreadCard'
import { getThreads } from '../src/clients/threads';
import Thread from '../src/models/Thread';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    width: theme.spacing(32),
    height: '100%',
    flexDirection: 'column',
    display: 'inline-block',
    overflowY: 'auto',
  },
}));

type Props = {
  url: string,
};

const ThreadsColumn = (props: Props) => {
  const classes = useStyles();

  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    getThreads(props.url)
      .then((response) => {
        console.log(response);
        setThreads(response.threads)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <List className={classes.root}>
      {threads.map((thread) => (
        <ThreadCard thread={thread} />
      ))}
    </List>
  );
}

export default ThreadsColumn;
