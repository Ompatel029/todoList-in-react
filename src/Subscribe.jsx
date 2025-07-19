import React, { useState } from 'react';

export default function Subscribe() {
  const [subscribe, setSubscribe] = useState(0); 
 
  let incSubscribe = () => {
    setSubscribe(subscribe + 1);
    console.log(subscribe+1);
  }

  let decSubscribe = () => {
    setSubscribe(subscribe - 1);
  }


  return (
    <div>
      <h1>Subscriber: {subscribe}</h1>
      <button onClick={incSubscribe}>Subscribe</button>
      <button onClick={decSubscribe}>Unsubscribe</button>
    </div>
  );
}
