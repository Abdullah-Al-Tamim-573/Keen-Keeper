import { createContext, useState } from "react";

export let FriendsDataContext = createContext()

 const Context = ({children}) => {

    let [friendsData, setFriendsData] = useState([]);
    let [copyArry  , setCopyArry] = useState([]);


    let handleFiterOutFriendsActions = (filterAction) => {
        
        
         let filterFriendsAction = copyArry.filter(filterData => filterData.clickAction === filterAction);
        
         setFriendsData(filterFriendsAction)
    }

    

    

    let handleFriendsData = (findTargetFriend, clickAction) => {
        

         let changeFriendDataObj = {
                clickAction,
              ...findTargetFriend

         }
         setCopyArry([...copyArry, changeFriendDataObj])

         setFriendsData([...friendsData, changeFriendDataObj])

         
        
    }

    

    let data = {
        handleFriendsData,
        friendsData,
        handleFiterOutFriendsActions
    }

    return (
        <div>
             <FriendsDataContext value={data}>
                   {
                      children
                   }
             </FriendsDataContext>
        </div>
    );
};

export default Context;