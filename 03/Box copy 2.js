import BoxRows2 from "./BoxRows2" ;
import { useState, useRef, useEffect } from "react"
import "./BoxCss copy.css" ;
const Box = () => {
    const [mvlist, setMvlist] = useState() ;  
    let seldt ; 
    
    useEffect(() => {
        //어제날짜 만들기
        //https://ko.javascript.info/date
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        seldt = yesterday.getFullYear() ;
        let month = yesterday.getMonth()+1;
        month = month < 10 ? `0${month}` : month ;
        let day = yesterday.getDate() ;
        day = day < 10 ? `0${day}` : day ;

        seldt = `${seldt}${month}`  ;
        seldt = `${seldt}${yesterday.getDate()}` ; 
        
        console.log('yesterday =', seldt)
        dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}` ;
        getData(seldt);
    },[])       // array가 없는 데 넣음. 어제 날짜를 로드시켜야 하므로 아무데도 없는데 넣는다. 

    //날짜 입력창

    const dt1 = useRef();
    
    // console.log("dt1=" dt1.current.value);

    const getUrl = (targetDt) => {
        const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${targetDt}`;
        return url;
      }

    //날짜 선택
    const getDt = () => {
        console.log("dt1=", dt1.current.value);
        let seldt = dt1.current.value.replaceAll('-', '');
        console.log("seldt=", seldt);
        const url = getUrl(seldt);
        console.log("url=", url)

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err))
    }

    

    //데이터 가져오기
    const getData = () => {
        let seldt = dt1.current.value.replaceAll('-', '');   
        const url = getUrl(seldt);
        console.log("url=", url)
        
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err))
           
    }
    return (                                                        // return은 오직 하나의 node만, 추가로 쓰고 싶다면 <> </> fragment tag. 
        <main className="container">
            <article>
                <header>
                    <nav>
                    <ul>
                    <li><h1>일박스오피스</h1></li>
                    </ul>
                    <ul>
                    <li>
                    <input ref={dt1} type="date" id="dt1" name="dt1" onChange={() => getDt()} />    
                    </li>
                    </ul>
                    </nav>
                </header>      
                <table>
                <thead>
                     <tr className="cl">
                          <th scope="col">순위</th>
                          <th scope="col">영화명</th>
                          <th scope="col">매출액</th>
                          <th scope="col">증감</th>
                      </tr>
                </thead>
                      {mvlist && <BoxRows2 mv={mvlist} />}
                </table>
            </article>
        </main>
    )
}

export default Box ;