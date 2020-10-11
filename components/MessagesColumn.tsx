import React, { useEffect, useState } from 'react';
import { createStyles, List, makeStyles } from "@material-ui/core"
import MessageCard from './MessageCard'
import { getMessages } from '../src/clients/messages';
import Message from '../src/models/Message';

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

const MessagesColumn = (props: Props) => {
  const classes = useStyles();

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    getMessages(props.url)
      .then((response) => {
        console.log(response);
        setMessages(response.messages)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <List className={classes.root}>
      {messages.map((message) => (
        <MessageCard message={message} />
      ))}
    </List>
  );
}

export default MessagesColumn;
