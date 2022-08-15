import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite:(meetupId) => {}
});//own react component

export function FavouritesContextProvider(props){
    const [userFavourites, setUserFavourites] = useState([]);

function addFavouriteHandler (favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.concat(favouriteMeetup);
    });

}

function removeFavouriteHandler (meetupId) {
    setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.filter(meetup => meetup.id !== meetupId); // except the deleted favourite other return in filter
    });
}


function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some(meetup => meetup.id === meetupId); // if an item exists with userfavourites value then it returns true
}


const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler
};

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;