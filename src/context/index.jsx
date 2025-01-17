import { createContext, useState } from "react";


export const GlobalContext = createContext(null);



export default function GlobalState({children}){

    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favouritesList,setFavouritesList] = useState([]);

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

            const data = await res.json();
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false);
                setSearchParam('')
            }

           
            
        } catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddToFavourites(getCurrentItem){
        console.log(getCurrentItem);
        let cpyFavouritesList = [...favouritesList];
        const index = cpyFavouritesList.findIndex(item=> item.id === getCurrentItem.id)
    
        if(index === -1) {
          cpyFavouritesList.push(getCurrentItem)
        } else {
          cpyFavouritesList.splice(index)
        }
    
        setFavouritesList(cpyFavouritesList)
      }
    
      console.log(favouritesList, 'favoritesList'); 

    return <GlobalContext.Provider value={{searchParam,loading, recipeList, setSearchParam,handleSubmit, recipeDetailsData, setRecipeDetailsData, handleAddToFavourites, favouritesList}} >{children}</GlobalContext.Provider>
    
}
