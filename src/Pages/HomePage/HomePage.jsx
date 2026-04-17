import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import StatsBoxes from '../../Components/Stats Boxes/StatsBoxes';
import YourFriends from '../../Components/Your Friends/YourFriends';

let friendsDataPromise = fetch('/friends.json').then(res => res.json())


const HomePage = () => {
    return (
        <>
            
                  <Banner></Banner>
                  <StatsBoxes></StatsBoxes>

                  <Suspense fallback={<h3>Friends Data Loading please wait........</h3>}>
                            <YourFriends friendsDataPromise={friendsDataPromise}></YourFriends>
                  </Suspense>
                  
           
        </>
    );
};

export default HomePage;