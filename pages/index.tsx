import SideBar, { Item } from "../components/SideBar"
import ColumnList from "../components/ColumnList"
import { createStyles, List, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
  },
}));


const Home = () => {
  const classes = useStyles();

  const item1: Item = { text: 'Hello' };
  const item2: Item = { text: 'World' };

  return (
    <div className={classes.root}>
      <SideBar items={[item1, item2]} />
      <ColumnList />
    </div>
  )
}

export default Home;
