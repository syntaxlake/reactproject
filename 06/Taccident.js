import dataTaccident from './dataTaccident.json';
import TaccidentNav1 from './TaccidentNav1';
import TaccidentNav2 from './TaccidentNav2';
import { useState, useEffect } from 'react';
const Taccident = () => {
    //console.log(data['data']); 아래 방식대로 할 수 있음. 
    //console.log(dataTaccident.data)
    
    const data = dataTaccident.data ;
    let c1 = data.map((item) => item['사고유형_대분류']); // -> item.사고유형_대분류 도 가능
    c1 = new Set(c1); //new Set(c1) -> object, object에서 배열로 전개 ... 연산자. ... 연산자는 배열 2개를 합칠 때도 가능. [1,2], [4,5] -> [...c1, ...c2]    console.log(c1);
    c1 = [...c1];

    //for(let item of data) {
    //let temp = [item.사고유형_대분류,item.사고유형_중분류]  // -> map과 동일. 
    //temp.push(item.사고유형_대분류);
    //temp.push(item.사고유형_중분류);
    //c2.push(temp);
    const c2 = data.map((item) => [item.사고유형_대분류,item.사고유형_중분류])
    // const c2 = data.map((item) => item['사고유형_대분류','사고유형_중분류']);    // object로 쓰면 안됨(키가 중복되므로 배열로 갖고옴)
    // const c2 = data.map((item) => item['사고유형_대분류]), ['사고유형_중분류'];

    const [sel1, setSel1] = useState(0) ; // 대분류선택
    const [sel2, setSel2] = useState([]); // 중분류선택(대분류+중분류 배열)
    const [selData, setSelData] = useState({});

    useEffect(() => {
        console.log('Taccidentse1 Useeffect []', sel1);
    }, []);

    useEffect(() => {
        console.log('Taccidentse1 Useeffect sel1', sel1);
    }, [sel1]);

    useEffect(() => {
        console.log('Taccidentse1 Useeffect sel2', sel2);
        let temp = data.filter((item) => 
            item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]) ;
        setSelData(temp);//대분류 = 중분류 같은 걸 확인, filter로 돌렸을시 sel2 [0, 대분류] [1, 중분류]
    }, [sel2]);

    useEffect(() => {
        console.log('Taccidentse1 Useeffect selData', selData);
    }, [selData]);

    useEffect(() => {
        console.log('Taccidentse1 Useeffect none1', sel1);
        console.log('Taccidentse1 Useeffect none2', sel2);

    });

    return(
        <>
        <main className='container'>
            <article>
                <header>
                    <TaccidentNav1 c1 = {c1} sel1 = {sel1} setSel1 = {setSel1}/>
                    <TaccidentNav2 c2 = {c2} sel1 = {sel1} sel2 = {sel2} setSel2 = {setSel2}/>
                    <div class='grid'>
                        {JSON.stringify(selData)}
                    </div>
                </header>
            </article>
        </main>
        </>
    );

}

export default Taccident;