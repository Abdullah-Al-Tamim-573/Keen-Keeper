import { createContext, useState } from "react";

export let FriendsDataContext = createContext()

 const Context = ({children}) => {

    let [friendsData, setFriendsData] = useState([]);

    

    let handleFriendsData = (findTargetFriend, clickAction) => {
        //  console.log(findTargetFriend)
        //  console.log(clickAction)

         let changeFriendDataObj = {
                clickAction,
              ...findTargetFriend

         }

         setFriendsData([...friendsData, changeFriendDataObj])

         
        
    }

    

    let data = {
        handleFriendsData,
        friendsData
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