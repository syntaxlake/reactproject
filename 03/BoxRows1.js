import { useState } from "react";
//  const BoxRows1 = (probs) => {
const BoxRows1 = ({mv}) => {
//  const mvlist = [...probs.mv] // ... 배열 펼침. // probs.mv
// console.log("boxrows", mv)    // 속성값으로 box에서 넘겨옴. probs. 
    const [footTag, setFootTag] = useState('');

    const showMV = (row) => {
        console.log(row)
        setFootTag(row.movieCd)
        console.log(footTag)
    }
// 클릭된 자료 확인 (파라미터 이름은 바꿀 수 있음)
   // const showMV = (line) => {
      //  console.log(line)
    //}

    let trTags = [] ;           // 10개의 mv data는 tag가 들어있지 않으므로 배열을 만듦. 
    for (let row of mv) {
        console.log(row.rank, row.mv, row.movieNm, row.salesAmt, row.rankInten)
        let icon ; 
        let intent = parseInt(row.rankInten)
        if (intent === 0) icon = '⏺' ;
        else if (intent < 0) icon = '🔽' ;
        else icon = '🔼' ;
        
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMV(row)}> 
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td className="td3">{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{intent ===0 ? '' : Math.abs(intent)}</td>
            </tr>
        )
    }

    console.log(trTags) ;

    return (                                    // tbody 결과 뿐 아니라 tfoot의 박스오피스 결과 출력을 위해 해당 부분 수정. 
        <>
            <tbody>
                <tr>
                    {trTags}
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colSpan="4">{"합계"}</td> 
                </tr>              
            </tfoot>
        </>
    )
}                                               //colspan 4개 칼럼을 합쳐서 하나로 하여 결과 출력. (매출액, 순위등)
export default BoxRows1 ;