import SideBar, { Item } from "../components/SideBar"
import ColumnList from "../components/ColumnList"
import { createStyles, makeStyles } from "@material-ui/core"
import ColumnItem from "../src/models/ColumnItem";
import { useState } from "react";

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
  },
}));


const Home = () => {
  const classes = useStyles();

  const item1: Item = { text: 'Hello' };
  const item2: Item = { text: 'World' };

  const [columnItems, _] = useState<ColumnItem[]>([
    { type: 'threads', url: 'https://api.example.com/api/threads?bbs=dog' },
    { type: 'messages', url: 'https://api.example.com/api/messages?thread=1' },
    { type: 'messages', url: 'https://api.example.com/api/messages?thread=2' },
    { type: 'messages', url: 'https://api.example.com/api/messages?thread=3' },
    { type: 'messages', url: 'https://api.example.com/api/messages?thread=4' },
    { type: 'messages', url: 'https://api.example.com/api/messages?thread=5' },
  ]);

  return (
    <div className={classes.root}>
      <SideBar items={[item1, item2]} />
      <ColumnList items={columnItems} />
    </div>
  )
}

export default Home;
