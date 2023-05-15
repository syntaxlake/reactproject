//1. useState import 추가. 중괄호 써야함.  
import { useState } from "react";
const MyClockTime = () => {      
     
    //let myTime = new Date().toLocaleTimeString() ; //렌더링 1번째. 자동 재렌더링 필요. 
    // setInterval(()=>console.log(new Date().toLocaleTimeString()), 1000) ; // 1000ms
    //2. state변수 선언
    const [myTime, setMytime] = useState(new Date().toLocaleTimeString()) ; // useState 배열 선언, setmyTime 함수 들어가야함. 초기값 toLocaledatastring 넣음. 
                                    // 무조건 함수로 선언 , 두개 변수. 1변수는 입력변수, 2변수는 바꾸는 변수
    
    //3. 1초에 한번씩 state 변수 변경
    setInterval(()=>{
        setMytime(new Date().toLocaleTimeString()) // 따라서 할당연산자가 불가능하므로 함수 set mytime
    }, 1000) ; // 1000ms(1초에 한번씩 바꿈 ) state변수는 할당연산자로 바꿀 수 없음. 
    return(            
        <footer>
            <h1>{myTime}</h1>            
        </footer>
    );
}

export default MyClockTime ;
// Create-react App -> public -> src/index.js (Browserdom, div) -> src/app.js 
// -> src/01/Myclock.js