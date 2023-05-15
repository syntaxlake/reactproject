const TaccidentNav2 = ({c2, sel1, sel2, setSel2}) => {
    const c2Arr = c2.filter((item) => item[0] === sel1);
    //console.log(c2Arr)
    //console.log(c2);

    //const show = () => {
    //    console.log(item);
    //}
    const btTag = c2Arr.map((item)=>
        <li key={item}><button onClick = {() => setSel2(item)}>{item[1]}</button>
        </li> //jsx 배열
    );
    return(
        <nav>
        <ul>
          <h2>사고유형_중분류</h2>
        </ul>
        <ul>
          {btTag}
        </ul>
      </nav>
    );
}
export default TaccidentNav2;