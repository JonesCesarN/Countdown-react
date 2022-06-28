import BottonImg from "./assets/BottonImg";
import Rocket from "./assets/Rocket";
import TopImg from "./assets/TopImg";


function date(date: string) {
  return <span className="text-xs lg:text-[15px] text-txt-color font-light">{date}</span>
}

function time(time: string) {
  return <span className="text-black text-[28px] lg:text-[35px]">{time}</span>
}

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col items-center justify-center overflow-hidden relative p-5">
      <TopImg className="w-full absolute top-0 z-0" />
      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 z-10 items-center sm:flex-row">
        <div className="flex flex-col items-center gap-[30px]">
          <h1 className="font-bold text-2xl text-purple lg:text-4xl">Ready to launch in...</h1>
          <div className="grid justify-items-center">

            <div className="grid grid-cols-4 gap-5 justify-items-center">
              {date('Dias')}
              {date('Horas')}
              {date('Minutos')}
              {date('Segundos')}
            </div>

            <div className="grid grid-cols-7 justify-items-center gap-1">
              {time('08')}
              {time(':')}
              {time('12')}
              {time(':')}
              {time('44')}
              {time(':')}
              {time('28')}
            </div>

          </div>
          <p className="text-txt-color text-xs text-center lg:text-base">Inscreva-se para saber mais sobre o lançamento</p>
          <button className="text-white bg-purple py-4 px-8 rounded-2xl">Inscreva-se</button>
        </div>
        <Rocket className="w-[90%] sm:w-[45%] lg:w-[500px] xl:w-[600px]" />
      </div>
      <BottonImg className="absolute bottom-0 z-0" />
    </div>
  );
}

export default App;
