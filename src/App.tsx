import BottonImg from "./assets/BottonImg";
import Rocket from "./assets/Rocket";
import TopImg from "./assets/TopImg";
import { add, intervalToDuration } from 'date-fns'
import { ButtonHTMLAttributes, FormEvent, useEffect, useState } from "react";

function date(date: string) {
  return <span className="text-xs lg:text-[15px] text-txt-color font-light">{date}</span>
}

function time(time: string, num?: boolean) {
  return <span className="text-black text-[28px] lg:text-[35px]">{num && '0'}{time}</span>
}

const dateFinish = add(new Date(), { days: 8, hours: 5, minutes: 25, seconds: 7 })


function App() {
  const [days, setDays] = useState<string | undefined>('0')
  const [hours, setHours] = useState<string | undefined>('0')
  const [minutes, setMinutes] = useState<string | undefined>('0')
  const [seconds, setSeconds] = useState<string | undefined>('0')
  const [isModal, setIsModal] = useState<boolean>(false)

  function openModal() {
    setIsModal(true)
  }

  function closeModal() {
    setIsModal(false)
  }

  useEffect(() => {

    const timer = setInterval(() => {
      setDays(intervalToDuration({ start: new Date(), end: dateFinish }).days?.toString())
      setHours(intervalToDuration({ start: new Date(), end: dateFinish }).hours?.toString())
      setMinutes(intervalToDuration({ start: new Date(), end: dateFinish }).minutes?.toString())
      setSeconds(intervalToDuration({ start: new Date(), end: dateFinish }).seconds?.toString())
    }, 1000)

    return () => clearInterval(timer)

  }, [])


  return (
    <div className="App w-screen h-screen flex flex-col items-center justify-center overflow-hidden relative p-5">
      <div className={`w-full h-full absolute z-50 ${isModal ? 'block' : 'hidden'}`} onClick={closeModal}></div>
      <form className={`shadow-md flex ${isModal ? 'top-auto' : 'top-[-999px]'} flex-col placeholder:text-center m-4 p-9 absolute z-[60] bg-slate-800 gap-4 rounded-2xl sm:w-[450px]`}>
        <span onClick={closeModal}
          className="absolute top-[10px] right-[10px] text-white font-bold rounded-[50%] bg-red-600 w-[25px] h-[25px] flex items-center justify-center cursor-pointer">
          X
        </span>
        <p className="text-lg text-txt-color text-center">
          Se inscreva agora mesmo para o maior evento <strong className="text-purple">dev.</strong>
        </p>
        <input type="text" placeholder="Digite seu nome"
          className="rounded-md outline-none p-2 border-2 focus:border-purple"
        />
        <input type="email" placeholder="Digite seu email"
          className="rounded-md outline-none p-2 border-2 focus:border-purple"
        />

        <button type="submit"
          className="bg-green-600 p-2 rounded-md hover:bg-green-700"
        >
          Confirmar
        </button>
      </form>

      <TopImg className="w-full absolute top-0 z-0" />
      <div className={`flex flex-col gap-12 sm:gap-16 lg:gap-20 z-10 items-center sm:flex-row ${isModal ? 'grayScale' : ''}`}>
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
              {days && (Number(days) < 10 ? time(days.toString(), true) : time(days.toString()))}
              {time(':')}
              {hours && (Number(hours) < 10 ? time(hours.toString(), true) : time(hours.toString()))}
              {time(':')}
              {minutes && (Number(minutes) < 10 ? time(minutes.toString(), true) : time(minutes.toString()))}
              {time(':')}
              {seconds && (Number(seconds) < 10 ? time(seconds.toString(), true) : time(seconds.toString()))}
            </div>

          </div>
          <p className="text-txt-color text-xs text-center lg:text-base">Inscreva-se para saber mais sobre o lançamento</p>
          <button onClick={openModal} className="text-white bg-purple py-4 px-20 rounded-2xl">Inscreva-se</button>
        </div>
        <Rocket className="w-[90%] sm:w-[45%] lg:w-[500px] xl:w-[600px]" />
      </div>
      <BottonImg className="absolute bottom-0 z-0" />
    </div>
  );
}

export default App;
