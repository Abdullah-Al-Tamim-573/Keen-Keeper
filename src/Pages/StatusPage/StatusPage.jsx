import React, { useContext, useEffect, useState } from "react";
import { FriendsDataContext } from "../../Context/Context";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const StatusPage = () => {
  let contextData = useContext(FriendsDataContext);
  let { copyArry } = contextData;

  let [text, setText] = useState([]);
  let [video, setVideo] = useState([]);
  let [call, setCall] = useState([]);

   useEffect(() => {
  
  let textData = copyArry.filter(item => item.clickAction === 'text');
  let callData = copyArry.filter(item => item.clickAction === 'call');
  let videoData = copyArry.filter(item => item.clickAction === 'video');

  
  setText(textData);
  setCall(callData);
  setVideo(videoData);

}, [copyArry]);

  


  
  

  const data = [
  { name: 'text', value: text.length, fill: '#0088FE' },
  { name: 'call', value: call.length, fill: '#00C49F' },
  { name: 'video', value: video.length, fill: '#FFBB28' },
  
];
 
  
  return (
    <div className="my-8 md:my-10  md:space-y-5 text-center md:text-left">
      <div>
        <h2 className="dark-blue font-bold text-3xl  md:text-4xl lg:text-5xl">
          Friendship Analytics
        </h2>
        <div className="p-3 md:p-8">
          <h4 className="light-dark-green font-medium text-xl">
            By Interaction Type
          </h4>
        </div>
      </div>

      <div className="my-10 flex justify-center">

      <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
       
        innerRadius="80%"
        outerRadius="100%"
       
        cornerRadius="50%"
        fill="#8884d8"
        
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
      
    </PieChart>
      </div>
    </div>
  );
};

export default StatusPage;
