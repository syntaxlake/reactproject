import data from './dataFrcst.json';
import style from './Frcst.module.css';
import { useState } from "react";
const Frcst = () => {
    const dtKey =["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"] ;
    const cnKey =["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"] ;
    // 배열은 순서가 의미있으나 오브젝트는 키에 의해서 구분. 
    // 예보 1일, 2일, 3일, 4일 것 

    dtKey.map((item) => console.log(data[item]));
    cnKey.map((item) => console.log(data[item]));
    console.log(data);
    
    dtKey.map((item, idx) => console.log(data[item], cnKey[idx])) ; // idx(map에서 배열의 순서)
    
    const dtcn = {};
    dtKey.map((item, idx) => {
        dtcn[data[item]] = data[cnKey[idx]];
    });

    console.log(dtcn);

    //상세정보(state 변수 3단계)
    
    const details = (k) => {
        let dtcnItem = dtcn[k].split(',')   // SPLIT 후 배열 생성
        setselDT(k) ;
        dtcnItem = dtcnItem.map((item) => item.split(':'))
        console.log(dtcnItem)
        dtcnItem = dtcnItem.map((item) => 
        <div key={item[0]}>
                <span className={style.sp1}>{item[0]}</span>
                {item[1].trim() === '낮음'? <span className={style.sp21}>{item[1]}</span>
                    : item[1].trim() === '보통'? <span className={style.sp22}>{item[1]}</span>
                    : <span className={style.sp23}>{item[1]}</span>}


        </div>)
        
        //    tempTag = dtcn[k];
        setbodyTag(dtcnItem);
    }
    

    //state 변수 2단계, 구조분할
    const [bodyTag, setbodyTag] = useState('') ;
    const [selDT, setselDT] = useState('')

    //state 변수 3단계


    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item) =>
    <button>
    <div className={style.dt} 
    key={item} 
    onClick = {() => details(item)}> 
    {item}
    </div>
    </button> //moudle css 
    );

    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                    <div className = 'grid'>
                        {dtTag}
                    </div>
                </header>
                    <div className = 'grid'>
                        {bodyTag}
                    </div>
            </article>
        </main>
    );
}

export default Frcst;