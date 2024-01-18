import React,{useState,useEffect} from "react";
// import imgData from '../imgsdatared-300

export default function Main(){

    let [form,setForm] = useState({
        toptext:"",
        bottomtext:"", 
        URL:'https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTcwNTU2NTk3OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600'
    })

    // useEffect(()=>{
    //     fetch('https://source.unsplash.com/1600x900/?nature')
    //         .then((response)=>{
    //             console.log(response.url)
    //         })
    // },[])

    function handleChange(event){
        setForm((prev)=>{
            return (
                {
                    ...prev,
                    [event.target.name]: event.target.value
                }
            )
        })
    }

    function handleClick(){

        fetch('https://source.unsplash.com/1600x900/?nature')
            .then((response)=>{
                let imgURL = response.url
                setForm((prev)=>{
                    return(
                        {
                            ...prev,
                            URL: imgURL
                        }
                    )
                })
            })

    }

    return(
        <div className="w-1/2 mx-auto">
            <div className="w-full mx-auto mt-[50px] space-y-10">
                <div className="flex items-center justify-between">
                    <label className="text-2xl" htmlFor="fname">First Name</label>
                    <input onChange={handleChange} id="fname" type="text" name="toptext" value={form.toptext} className="bg-gray-100 border-2 p-2 rounded-md w-[300px] text-gray-600 text-xl"></input>
                </div>
                <div className="flex items-center justify-between">
                    <label className="text-2xl" htmlFor="lname">Last Name</label>
                    <input onChange={handleChange} id="lname" type="text" name="bottomtext" value={form.bottomtext} className="bg-gray-100 border-2 p-2 rounded-md w-[300px] text-gray-600 text-xl"></input>
                </div>
                <button onClick={handleClick} className="block w-full px-7 py-2 rounded-lg text-2xl bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white">
                    Change Image
                </button>
                <div className="relative">
                    <div id="top" className="absolute text-center w-full top-[130px] text-slate-200 italic text-5xl z-30">{form.toptext}</div>
                    <div id="bottom" className="absolute text-center w-full bottom-[130px] text-slate-200 italic text-5xl z-30">{form.bottomtext}</div>
                    {URL && <img className="w-full rounded-lg z-1" src={form.URL} alt="nature" />}
                </div>
            </div>
        </div>
    )
}


// https://source.unsplash.com/1600x900/?nature