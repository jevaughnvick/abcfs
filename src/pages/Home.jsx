export default function Home(){

    return (

        <>
        <div id="home" className="text-white flex items-center relative">
            {/* <img src="../../public/words.PNG" alt=""/> */}
            <div className="flex-1 flex justify-center">
                <div className="flex flex-col gap-[10px]">
                    <h1 className="text-center">
                        <p className="text-[10rem] font-[Bubble] select-none">
                            <span className="text-green-500">a</span>
                            <span className="text-cyan-600">b</span>
                            <span className="text-teal-600">c</span>
                        </p>
                        <p className="font-[Game] text-6xl leading-2 text-green-500 select-none">
                            Fast or Slow
                        </p>
                    </h1>
                    <p className="text-center select-none">
                        A light web version of the classical game.
                    </p>
                    <div>
                        <button className="border px-8 py-2 rounded">
                            Play
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                
            </div>
        </div>
        </>
    )
}