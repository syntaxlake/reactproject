import MyDivArticle from "./MyDivArticle";
import "./MyDiv.css" ;
const MyDiv = () => {                   // function 함수로 쓸수도 있음. function(MyD)

    return (                            //aname= 속성. name 속성을 가짐
        <main className="container">    
            <h1>MyDiv</h1>
            <ul>
                <li>Mydiv</li>
                <li>Mydiv</li>
            </ul>
            <MyDivArticle />
            <MyDivArticle aname='MyDiv1'/> 
            <MyDivArticle aname='MyDiv2'/>
        </main>
    );
}

export default MyDiv ;