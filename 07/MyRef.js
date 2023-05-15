import { useState, useRef, useEffect } from "react";// useref는 state 렌더링 일어날때 바뀐 값 한번에 보임, 그전까지는 콘솔에서 확인 가능
import styles from './MyRef.module.css';
const MyRef = () => {
    const txtref = useRef() ;   // 인풋 제어용으로 사용, input 박스안에 ref속성으로 꽂아야함 ref={txtref} 입력 // 화면 시작되면 마우스 커서가 클릭한(focus) 거처럼 useeffect 사용, 처음 한번 적용
                                // 1. 레버변수로 사용하거나 >>> itemArr로 레퍼변수로 사용 / 폼테그 안에 넣어 폼테그 변수관리하는 용도로 2가지 사용 >>> {txtref} 인풋안에 레퍼라는 속성을 줌
                                // useEffect(()=> {},[]) 사용법

    const itemArr = useRef([]) ;
    const [itemTag, setItemTag] = useState() ; // usestate 사용하는 식 << state 사용하는 이유는 변경하는 순간 재 렌더링을 일어나게 하기 위해 {Itemtag}<header> 안에 태그로 들어감. 

    useEffect(() => {
        txtref.current.focus();
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value]; // 배열 그대로에 내가 찍은 변수값 아이템 커렌트에 추가
        itemArr.current = new Set(itemArr.current );    //중복값 입력 안되게 하는 방법 new Set
        itemArr.current = [...itemArr.current]

        let tempTag = itemArr.current.map((item,idx) => <span key={'sp'+idx} className={styles.sp}>{item}</span>);
        setItemTag(tempTag) ;
        console.log("addItem=", itemArr.current);
        resetItem();
    }

    const resetItem = () => {       //이벤트 기본 동작을 막기위해 preventDefault이용하여 페이지 재로드 없이 JS 코드 실행하여 동작 수행
        txtref.current.value = '';
        txtref.current.focus();     // 등록버튼 누른 후 인풋창 리셋, 비워지게 함. 
        console.log("resetItem");
    }

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className='grid'>
                            <label htmlFor="txt1">과일입력</label>
                            <input ref={txtref} type="text" id="txt1" name="txt" />
                            <div>
                                <button onClick={(e)=> addItem(e)}>등록</button>   
                                <button onClick={(e)=> resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div className="grid">
                        {itemTag}
                </div>
            </article>
        </main>
    );
};


export default MyRef;