import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Thread from '../src/models/Thread';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
}));

type Props = {
  thread: Thread,
};

const ThreadCard = (props: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {props.thread.title}
        </Typography>
        <Typography color="textSecondary">
          {props.thread.messageCount}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ThreadCard;
