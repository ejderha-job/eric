import reactLogo from './assets/present.png'
import './App.css'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

function App() {
    const onOpen = async () => {

        await jsConfetti.addConfetti()
        window.location = 'http://www.google.com';
    }

    return (
        <div className={"wrapper"}>
            <div className={"box"}>
                <p className={"text"}>
                    Привет, это Эрик!
                    Ты сегодня выиграла целых два титула😱
                    <br/>
                    1. Самое позитивная девочка дня.
                    <br/>
                    2. Самый милый застенчивый смех недели.

                    Чтобы забрать приз, просто нажми на него
                    👇👇👇
                </p>
                <img onClick={onOpen} src={reactLogo} className="gift" id={"test"}/>
            </div>
        </div>
    )
}

export default App
