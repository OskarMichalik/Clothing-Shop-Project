import ShowItems from './components/showingItems/ShowItems';
import AddingItem from './components/new-item/AddingItem';
import classes from './page.module.css';

export default function Home() {

  return (
    <>
      <div className={classes.banner}>
        <div className={classes.bannerText}>
          <h2>Clean your Wardrobe!</h2>
          <AddingItem className={`button ${classes.bannerButton}`} />
        </div>
      </div>
        <ShowItems />
    </>
  );
}
