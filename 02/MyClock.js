import MyClockimage from "./MyClockimage";
import MyClockTime from "./MyClockTime";

const MyClock = () => {

    return(
        <main className="container" >
            <article data-theme="dark">
                <MyClockimage />
                <MyClockTime />
                <progress>
                </progress>
            </article>
        </main>
    );
}

export default MyClock ;