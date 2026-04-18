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

                  <Suspense fallback={<div className='text-center min-h-[20vh] md:min-h-[50vh] flex justify-center items-center'><div className="loading loading-spinner loading-xl"></div></div>}>
                            <YourFriends friendsDataPromise={friendsDataPromise}></YourFriends>
                  </Suspense>
                  
           
        </>
    );
};

export default HomePage;