import { useState } from "react";

const MyClockTime1 = () => {      
    //let myTime = new Date().toLocaleTimeString() ;
    let t = new Date().toLocaleDateString();
    const [myTime, setmyTime] = useState(t);
      
    let cnt = 0 ;
    setmyTime (setTi(console.long(++cnt), 1000));

    
    return(            
        <footer>
            <h1>{myTime}</h1>            
        </footer>
    );
}

export default MyClockTime1 ;