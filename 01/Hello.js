import logo from '../logo.svg';
import './Hello.css';
const Hello = () => {                       // 대문자로 태그이름 시작해야함. 화살표함수 function을 짜야함.  
    let name = '유동수'
    let git = 'https://github.com/syntaxlake'

    return(                                    // 무조건 Return을 반드시 써야 함. return 안에 태그를 담음 무조건 1개 태그(자식 노드는 무한정 있어도 됨. 즉 ex) div 1개) <>,</> 쓰면 2개 가능
       <main className='container'>
            <article data-theme="dark">
                <div>
                <img src={logo} className='App-logo' alt='logo' />
                </div>
            <footer>
                <hgroup>               
                    <h1>{name}</h1>
                    <h2><a href={git}>{git}</a></h2>
                </hgroup>
            </footer>
            <progress></progress>
            </article>
       </main>
       
    );
}

export default Hello ; // 반드시 exprot, 내보내기 되어야함. react component의 기본 구조. class는 반드시 classnam을 써야함. 