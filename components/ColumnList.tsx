import React from 'react';
import { createStyles, List, makeStyles } from "@material-ui/core"
import ColumnItem from '../src/models/ColumnItem';
import ThreadsColumn from './ThreadsColumn';
import MessagesColumn from './MessagesColumn';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    height: '100vh',
    padding: 0,
    paddingLeft: theme.spacing(1),
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

type Props = {
  items: ColumnItem[],
};

const ColumnList = (props: Props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.items.map((item) => {
        switch (item.type) {
          case 'threads':
            return (
              <ThreadsColumn url={item.url} />
            );

          case 'messages':
            return (
              <MessagesColumn url={item.url} />
            );

          default:
            break;
        }
      })}
    </List>
  );
}

export default ColumnList;
