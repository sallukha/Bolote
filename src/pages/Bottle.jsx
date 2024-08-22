import bottle from "../assets/b.png"

const Bottle = () => {
    return (
        <div className="flex  justify-between w-full h-[80vh] px-24 ">
            <div className="flex flex-col justify-between pt-9">
                <h1 className="  text-7xl font-bold  tracking-wide   ">
                    Drinking
                    <br />
                    Water
                    <br />
                    Bottle
                </h1>
                <p className=" ">The cap is  simple without <br /> excess details
                    eon drink from <br /> phasont&.
                    like drinkir9 Of a gloss</p>
                <div className="flex gap-5 flex-grow-1">
                    <button className=" p-2 border-2 border-black rounded-lg">Start Now</button>
                    <button  className="border-2 black rounded-full size-12">play</button>
                </div>
            </div>
            <div className=" ml-28 ">
                <img className="h-[75vh] zero" src={bottle} alt="bottle" />
                <p>Lightweight ond WATER BOTTLE lets
                    hydrate Of high quciity</p>
            </div>
            <div className="flex  flex-col my-16 mx-10 gap-12">
                <div className=" mx-11">
                    <h1 className="font-bold text-3xl">Water Bolote</h1>
                    <p> we make Travel Tumbler</p> 
                </div>
                <div className=" my-9  mx-11">
                    <h1 className="font-bold text-3xl">Travel Number</h1>
                    <p>We providede quilty full </p>
                </div>
                <div className=" my-[50px] mx-11">
                    <h1  className="font-bold text-3xl">Active Thumbler</h1>
                    <p className="my-11">We provide qulityfull active thumbler</p>
                </div>
            </div>

        </div>
    )
}

export default Bottle