import { createSignal, onCleanup } from "solid-js";

const LiveCounter = () => {

    const [seconds, setSeconds] = createSignal(0),

        timer = setInterval(() => setSeconds(seconds() + 1), 1000);

    onCleanup(() => clearInterval(timer));



    return <div className="card solidjs">
        <a>
            <h2>
                SolidJS <span>&rarr;</span>
            </h2>
            <p className="flex justify-center items-center">
                Has been counting for: {seconds} seconds.
            </p>
        </a>
    </div>;

};

export default LiveCounter;