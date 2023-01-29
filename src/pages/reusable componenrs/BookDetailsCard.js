import { useState, useEffect } from 'react';

const BookDetailsCard = (props) => {
    const [data, setdata] = useState({})
    
    useEffect(()=>{
        setdata(props.data)
    },[props])
    return(
    <>
        <div id="sidecardmenu" className={props.cardclicked ? "fixed z-50 top-0 left-0 w-screen h-screen ": "hidden"}>    
                <div className="fixed top-0 left-0 w-screen h-screen z-[60] backdrop-blur-sm" onClick={()=>props.closecarddetails()}></div>
              <div >
                <div className="z-[70] relative rounded-xl p-1 bg-[#AC0266] min-h-[530px] h-fit md:w-[700px] lg:w-[900px] mx-auto my-12 animate-showcarddetails">
                    <div className="">
                        <h2 className="text-center mt-4 font-bold text-3xl text-white">About the book</h2> 
                        <div className="w-[80px] h-1 border-b border-white mx-auto animate-borderanim"></div>
                    </div>
                    <div className="grid grid-cols-12 mt-8">
                        <div className={props.cardclicked ? "relative col-span-5 z-[55] w-fit mx-auto text-white " : "hidden"}>
                            <div className="h-fit w-[280px] mt-4">
                                <img src={`https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`} alt="" className="object-contain rounded-[18px] w-full h-full mb-3"/>
                            </div>
                        </div>
                        <div className="relative col-span-7 py-2 h-fit my-auto   text-lg text-justify text-white text-[18px] font-regular ">
                            <p className="font-bold text-3xl text-center">{data.title}</p>
                            <p className="font-meduim text-lg text-center text-[#ffffff] mb-4">{data.author_name}</p>
                            <div className=" w-[300px] mx-auto h-16 my-3 p-2 bg-[#bb67e4] flex flex-row rounded-3xl justify-evenly text-lg font-medium items-center">
                                <p>{data.number_of_pages_median} pages</p>
                                <span className="w-[4px] h-7 rounded-[20px] bg-gray-700 mt-1"></span>
                                <p>2hrs30min</p>
                            </div>
                            <div className="relative">
                                <h2 className="relative font-bold text-2xl">Plot</h2>
                                <p className="w-[96%]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo eros. 
                                Quisque vitae  leo eros. Quisque vitae purus ut neque auctor efficitur id et metus. Integer bibendum lorem eu mattis gravida. Duis et dictum 
                                </p>  
                                <span className="absolute bottom-[-40px] bg-gradient-to-t from-[#ac0265] via-[#ac0265d3]  to-[#ac026500] flex flex-row h-28 w-[100%] right-0 items-center">
                                    <button className="p-3 text-black bg-white rounded-xl text-xl font-medium mx-auto h-fit ">Read more</button>
                                </span>   
                            </div>  
                        </div>  
                    </div>
                </div>
              </div>
        </div>
    </>
    )
}

export default BookDetailsCard;