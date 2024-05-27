import reactLogo from './assets/present.png'
import './App.css'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

function App() {
    const onOpen = async () => {

        await jsConfetti.addConfetti()
        window.location = 'Https://t.me/erik_james';
    }

    return (
        <div className={"wrapper"}>
            <div className={"box"}>
                <p className={"text"}>
                    Привет, это Эрик!
                    <br />
                    Ты сегодня выиграла целых два титула😱
                    <br/>
                    1. Самое позитивная девочка дня.
                    <br/>
                    2. Самый милый застенчивый смех недели.
                    <br/>
                    Чтобы забрать приз, просто нажми на него
                    <br/>
                    <p className={'fingers'}>👇👇👇</p>
                </p>
                <img onClick={onOpen} src={reactLogo} className="gift" id={"test"}/>
            </div>
        </div>
    )
}

export default App
