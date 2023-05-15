
//const MydivArticle = (probs) => {               // 매개변수 probs로 article의 속성 전달. 
//import './MyDiv.css' ;                          // 전역 지정해서 스타일 적용
import style from "./MyDiv.module.css" ;        // 컴포넌트 지정해서 스타일 적용

//state변수 사용 (재렌더링 하여 좋아요 수 올림) 1단계 (useState hook)
import { useState } from "react";

//매개변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용

const MyDivArticle = ({aname}) => {
    let n = (aname === undefined) ? '0' : aname.slice(-1) ;      //const aname = probs.aname;
    // undefined되었다면 0, 그렇지 않으면 aname에서 하나를 빼서 표현. 
    //let cnt = 0 ;   // 한번 렌더링이 되면 바꿀수 없음. 변수가 바뀔 때마다 재랜더링 필요. 
    // 사용자 정의 속성. (Probs)

//state 변수 사용 2단계 : 변수 선언 (배열 형식. 반드시 대괄호 사용. ) (재렌더링하여 수정해야할 경우 stateUse함수로 사용. )
    const [cnt, setCnt] = useState(0) ; //cnt =1 등 안됨, set배열로 바꿈., return값 2개. (cnt, setCnt) -> 구조분해. 

//click 이벤트 처리, 함수명만 쓰지 말고 화살표 형식으로 기재할 것. 인수 필요시 인수 넣을 것. 
    const like = (n)=>{
        //cnt = cnt +1 ;
//state 변수 사용 3단계 : 변수 내용 변경 (반드시 setCnt로 바꿔야 함. )
        setCnt(cnt+1) ;        
        console.log(cnt);
    }

    return (                                            // 매개변수 probs로 aname속성 호출 받음. || -> or 표시. -> falsy 연산 return뒤는 javascript문법. 
        <article>
                <header><h1 className={style.mah1}>{aname || 'MyDiv0' }</h1></header>
                <ul className={style.aul}>
                    <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv'+n}1</li> 
                    <li>{'MyDiv'+n}2</li>
                </ul>
        { n === '1' &&
            <footer>
                <h1><span onClick={() => like ()}>💟</span>{cnt}</h1>    
            </footer> 
        }       
        </article>
    );  //                    <li>{aname + '1'}</li> or {!aname ? aname : 'MyDiv0'} {aname ==='MydDiv1'} {aname}2 , Onclik-> click 이벤트. nClick={()=>{cnt++; console.log(cnt)}}
}

export default MyDivArticle ;