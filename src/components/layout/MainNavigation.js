import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);


  return (
    <header className={classes.header}>
      <div className={classes.logo}>Digital PostCards</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Postcards</Link>            
          </li>
          <li>
            <Link to='/new-meetup'>Add New Postcard</Link>            
          </li>
          <li>
            <Link to='/favourites'>
              My Favourites
              <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
            </Link>            
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
