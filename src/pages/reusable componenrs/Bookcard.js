
import { useState, useEffect } from "react";

// const oldcard = ()=>{
//     return(<>
//     <div className="card relative mb-2 p-1 bg-[#99338f] rounded-[10px] w-[90%] mx-auto h-[130px] grid grid-cols-6 gap-1 transition duration-200 ease-in-out hover:scale-105" >
//             <div className="bg-gray-600 col-span-2 h-[90px] w-[90px] rounded-lg mx-auto my-auto" >cover</div>
//             <div className={"absolute h-[80%] w-[100px] rounded-lg  top-4 left-[27px] "+(cardhover ? "backdrop-blur-[2px]" : "")} onMouseEnter={()=>handlecardhover()} onMouseLeave={()=>handlecardhover()}></div>
//             <div className={"absolute top-[40px] left-[50px] "+(cardhover ? "" : "hidden")}>
//                 <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M35.5127 26.6346L16.0261 37.9413C14.3723 38.8999 12.25 37.7392 12.25 35.8067V13.1932C12.25 11.2639 14.3692 10.1001 16.0261 11.0617L35.5127 22.3685C35.8889 22.5832 36.2016 22.8937 36.4191 23.2683C36.6366 23.6429 36.7512 24.0684 36.7512 24.5015C36.7512 24.9347 36.6366 25.3602 36.4191 25.7348C36.2016 26.1094 35.8889 26.4198 35.5127 26.6346Z" fill="white"/>
//                 </svg>
//             </div>
//             <div className="col-span-3 h-[80%] my-auto">
//                 <h1 className="font-semibold text-2xl text-left h-6">Book title</h1>
//                 <h2 className="font-meduim text-lg text-left h-6">Author</h2>
//                 <h3 className="font-meduim text-base text-left">Genre, Genre, Genre</h3>
//                 <span className=" w-[50%] flex flex-row justify-center">
//                     <svg  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <g clip-path="url(#clip0_122_10)">
//                         <path d="M13.814 0.925842H8.31396V2.75918H13.814V0.925842ZM10.1473 12.8425H11.9806V7.34251H10.1473V12.8425ZM17.5081 6.77418L18.8098 5.47251C18.4156 5.00501 17.9848 4.56501 17.5173 4.18001L16.2156 5.48168C14.7557 4.30681 12.9379 3.66639 11.064 3.66668C6.50813 3.66668 2.81396 7.36084 2.81396 11.9167C2.81396 16.4725 6.49896 20.1667 11.064 20.1667C15.629 20.1667 19.314 16.4725 19.314 11.9167C19.314 9.98251 18.6356 8.19501 17.5081 6.77418ZM11.064 18.3425C7.51647 18.3425 4.6473 15.4733 4.6473 11.9258C4.6473 8.37834 7.51647 5.50918 11.064 5.50918C14.6115 5.50918 17.4806 8.37834 17.4806 11.9258C17.4806 15.4733 14.6115 18.3425 11.064 18.3425Z" fill="#FFFFFF"/>
//                         </g>
//                         <defs>
//                         <clipPath id="clip0_122_10">
//                         <rect width="22" height="22" fill="white"/>
//                         </clipPath>
//                         </defs>
//                     </svg>
//                     <p className="ml-2">2h20min</p>
//                 </span>
//             </div>
//             <div className="h-[51px] w-[51px] mx-auto my-auto mr-2 hover:cursor-pointer" onClick={()=>addtofavorites()} onMouseEnter={()=>handlehrthover()} onMouseLeave={()=>handlehrthover()}>
//                 <svg className={ checkiffav() ? "hidden" : false || (hrthover ? "hidden" : "block")} width="40" height="40" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M52.2793 16.0633C51.5201 14.3054 50.4254 12.7124 49.0564 11.3734C47.6865 10.0305 46.0713 8.96334 44.2986 8.22989C42.4605 7.46634 40.489 7.07551 38.4986 7.08009C35.7063 7.08009 32.9818 7.84474 30.6143 9.28907C30.0479 9.63458 29.5098 10.0141 29 10.4275C28.4902 10.0141 27.9521 9.63458 27.3857 9.28907C25.0182 7.84474 22.2937 7.08009 19.5014 7.08009C17.4906 7.08009 15.5422 7.46524 13.7014 8.22989C11.9229 8.96622 10.3199 10.0254 8.94355 11.3734C7.57283 12.7109 6.47786 14.3042 5.7207 16.0633C4.9334 17.8928 4.53125 19.8356 4.53125 21.835C4.53125 23.7211 4.91641 25.6865 5.68105 27.6859C6.32109 29.3568 7.23867 31.09 8.41113 32.8402C10.2689 35.61 12.8234 38.4986 15.9953 41.427C21.2516 46.2811 26.4568 49.6342 26.6777 49.7701L28.0201 50.6311C28.6148 51.0106 29.3795 51.0106 29.9742 50.6311L31.3166 49.7701C31.5375 49.6285 36.7371 46.2811 41.999 41.427C45.1709 38.4986 47.7254 35.61 49.5832 32.8402C50.7557 31.09 51.6789 29.3568 52.3133 27.6859C53.0779 25.6865 53.4631 23.7211 53.4631 21.835C53.4688 19.8356 53.0666 17.8928 52.2793 16.0633ZM29 46.1508C29 46.1508 8.83594 33.2311 8.83594 21.835C8.83594 16.0633 13.6107 11.3848 19.5014 11.3848C23.6418 11.3848 27.2328 13.6957 29 17.0715C30.7672 13.6957 34.3582 11.3848 38.4986 11.3848C44.3893 11.3848 49.1641 16.0633 49.1641 21.835C49.1641 33.2311 29 46.1508 29 46.1508Z" fill="white"/>
//                 </svg>
//                 <svg className={ checkiffav() ? "block" : false || (hrthover ? "block" : "hidden")} width="40" height="40" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M51.3779 15.7863C50.6318 14.0587 49.556 12.4932 48.2106 11.1774C46.8643 9.85759 45.2769 8.8088 43.5349 8.088C41.7284 7.33761 39.7909 6.95351 37.8349 6.95802C35.0906 6.95802 32.4132 7.70948 30.0864 9.12891C29.5298 9.46847 29.001 9.84142 28.5 10.2478C27.999 9.84142 27.4702 9.46847 26.9136 9.12891C24.5868 7.70948 21.9094 6.95802 19.1651 6.95802C17.1891 6.95802 15.2742 7.33653 13.4651 8.088C11.7173 8.81163 10.142 9.85255 8.78936 11.1774C7.44227 12.4917 6.36618 14.0576 5.62207 15.7863C4.84834 17.5843 4.45312 19.4936 4.45312 21.4585C4.45312 23.3121 4.83164 25.2437 5.58311 27.2086C6.21211 28.8507 7.11387 30.554 8.26611 32.274C10.0919 34.996 12.6023 37.8349 15.7195 40.7127C20.8852 45.4831 26.0007 48.7784 26.2178 48.912L27.537 49.7581C28.1215 50.1311 28.8729 50.1311 29.4574 49.7581L30.7767 48.912C30.9938 48.7729 36.1037 45.4831 41.2749 40.7127C44.3921 37.8349 46.9025 34.996 48.7283 32.274C49.8806 30.554 50.7879 28.8507 51.4113 27.2086C52.1628 25.2437 52.5413 23.3121 52.5413 21.4585C52.5469 19.4936 52.1517 17.5843 51.3779 15.7863Z" fill="white"/>
//                 </svg>
//             </div>
//         </div>
//     </>)
// }

const Bookcard = (props) => {
    const [cardhover, setcardhover] = useState(false)
    const [hrthover, sethrthover] = useState(false)
    const [fav, setfav] = useState(false)
    const [defaultcard, setdefaultcard] = useState(false)
    const [data, setdata] = useState({})

    useEffect(()=>{
        setdefaultcard(props.defaultcard)
        setdata(props.data)
    },[props])
    const removeFromFavorites = (e, data) => {
        e.stopPropagation()
        setfav(!fav)
        // console.log('the book deleted from fav : '+data)
        props.removefromfav(data)
    }
    const addtofavorites = (e, data) => {
        e.stopPropagation()
        if(fav){
            removeFromFavorites(data.cover_i)
            setfav(false)
        }else {
            setfav(!fav)
            props.addtofav(data)
        }
    }
    const checkiffav = () => {
            if(fav === true){
                return true
            }else{
                return false
            }
    }
    const handlehrthover = () => {
        sethrthover(!hrthover)
    }
    const handlecardhover = () => {
        setcardhover(!cardhover)
    }
    const DefaultBookCard = () => {
        return(
            <>
            <div className="card relative mb-2 p-[6px] bg-[#99338f] rounded-[10px] w-[90%] mx-auto pb-3 h-[fit] flex flex-col transition duration-200 ease-in-out hover:scale-[1.02] " onClick={()=>props.cardclick(data)}>
                <div className="relative h-[fit] w-[100%] rounded-lg mx-auto my-auto" >
                    <img className="rounded-lg" src={`https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`} alt="cover"/>
                    <div className={"absolute h-[100%] w-[100%] rounded-lg top-0 left-0 "+(cardhover ? "backdrop-blur-[1px]" : "")} onMouseEnter={()=>handlecardhover()} onMouseLeave={()=>handlecardhover()}>
                        <div className={"absolute top-[40%] left-[40%] "+(cardhover ? " hover:cursor-pointer" : "hidden")}>
                            <svg width="58" height="58" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.5127 26.6346L16.0261 37.9413C14.3723 38.8999 12.25 37.7392 12.25 35.8067V13.1932C12.25 11.2639 14.3692 10.1001 16.0261 11.0617L35.5127 22.3685C35.8889 22.5832 36.2016 22.8937 36.4191 23.2683C36.6366 23.6429 36.7512 24.0684 36.7512 24.5015C36.7512 24.9347 36.6366 25.3602 36.4191 25.7348C36.2016 26.1094 35.8889 26.4198 35.5127 26.6346Z" fill="white"/>
                            </svg>
                        </div>
                        <div className={cardhover ? "h-[fit] absolute top-1 right-0 bg-[#99338f] rounded-full p-[2px] w-[fit] mx-auto my-auto mr-2 hover:cursor-pointer z-50": "hidden"} onClick={(e)=>addtofavorites(e, data)} onMouseEnter={()=>handlehrthover()} onMouseLeave={()=>handlehrthover()}>
                            <svg className={ checkiffav() ? "hidden" : false || (hrthover ? "hidden" : "block")} width="34" height="34" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M52.2793 16.0633C51.5201 14.3054 50.4254 12.7124 49.0564 11.3734C47.6865 10.0305 46.0713 8.96334 44.2986 8.22989C42.4605 7.46634 40.489 7.07551 38.4986 7.08009C35.7063 7.08009 32.9818 7.84474 30.6143 9.28907C30.0479 9.63458 29.5098 10.0141 29 10.4275C28.4902 10.0141 27.9521 9.63458 27.3857 9.28907C25.0182 7.84474 22.2937 7.08009 19.5014 7.08009C17.4906 7.08009 15.5422 7.46524 13.7014 8.22989C11.9229 8.96622 10.3199 10.0254 8.94355 11.3734C7.57283 12.7109 6.47786 14.3042 5.7207 16.0633C4.9334 17.8928 4.53125 19.8356 4.53125 21.835C4.53125 23.7211 4.91641 25.6865 5.68105 27.6859C6.32109 29.3568 7.23867 31.09 8.41113 32.8402C10.2689 35.61 12.8234 38.4986 15.9953 41.427C21.2516 46.2811 26.4568 49.6342 26.6777 49.7701L28.0201 50.6311C28.6148 51.0106 29.3795 51.0106 29.9742 50.6311L31.3166 49.7701C31.5375 49.6285 36.7371 46.2811 41.999 41.427C45.1709 38.4986 47.7254 35.61 49.5832 32.8402C50.7557 31.09 51.6789 29.3568 52.3133 27.6859C53.0779 25.6865 53.4631 23.7211 53.4631 21.835C53.4688 19.8356 53.0666 17.8928 52.2793 16.0633ZM29 46.1508C29 46.1508 8.83594 33.2311 8.83594 21.835C8.83594 16.0633 13.6107 11.3848 19.5014 11.3848C23.6418 11.3848 27.2328 13.6957 29 17.0715C30.7672 13.6957 34.3582 11.3848 38.4986 11.3848C44.3893 11.3848 49.1641 16.0633 49.1641 21.835C49.1641 33.2311 29 46.1508 29 46.1508Z" fill="white"/>
                            </svg>
                            <svg className={ checkiffav() ? "block" : false || (hrthover ? "block" : "hidden")} width="34" height="34" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.3779 15.7863C50.6318 14.0587 49.556 12.4932 48.2106 11.1774C46.8643 9.85759 45.2769 8.8088 43.5349 8.088C41.7284 7.33761 39.7909 6.95351 37.8349 6.95802C35.0906 6.95802 32.4132 7.70948 30.0864 9.12891C29.5298 9.46847 29.001 9.84142 28.5 10.2478C27.999 9.84142 27.4702 9.46847 26.9136 9.12891C24.5868 7.70948 21.9094 6.95802 19.1651 6.95802C17.1891 6.95802 15.2742 7.33653 13.4651 8.088C11.7173 8.81163 10.142 9.85255 8.78936 11.1774C7.44227 12.4917 6.36618 14.0576 5.62207 15.7863C4.84834 17.5843 4.45312 19.4936 4.45312 21.4585C4.45312 23.3121 4.83164 25.2437 5.58311 27.2086C6.21211 28.8507 7.11387 30.554 8.26611 32.274C10.0919 34.996 12.6023 37.8349 15.7195 40.7127C20.8852 45.4831 26.0007 48.7784 26.2178 48.912L27.537 49.7581C28.1215 50.1311 28.8729 50.1311 29.4574 49.7581L30.7767 48.912C30.9938 48.7729 36.1037 45.4831 41.2749 40.7127C44.3921 37.8349 46.9025 34.996 48.7283 32.274C49.8806 30.554 50.7879 28.8507 51.4113 27.2086C52.1628 25.2437 52.5413 23.3121 52.5413 21.4585C52.5469 19.4936 52.1517 17.5843 51.3779 15.7863Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div className="min-h-[40%] h-fit mt-2 hover:cursor-pointer">
                    <h1 className="font-semibold text-[18px] text-center h-fit">{data.title}</h1>
                    <h2 className="font-meduim text-[16px] text-center h-fit">{data.author_name}</h2>
                    
                    <span className="mt-3 w-[100%] flex flex-row justify-center font-medium">
                        <svg  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_122_10)">
                            <path d="M13.814 0.925842H8.31396V2.75918H13.814V0.925842ZM10.1473 12.8425H11.9806V7.34251H10.1473V12.8425ZM17.5081 6.77418L18.8098 5.47251C18.4156 5.00501 17.9848 4.56501 17.5173 4.18001L16.2156 5.48168C14.7557 4.30681 12.9379 3.66639 11.064 3.66668C6.50813 3.66668 2.81396 7.36084 2.81396 11.9167C2.81396 16.4725 6.49896 20.1667 11.064 20.1667C15.629 20.1667 19.314 16.4725 19.314 11.9167C19.314 9.98251 18.6356 8.19501 17.5081 6.77418ZM11.064 18.3425C7.51647 18.3425 4.6473 15.4733 4.6473 11.9258C4.6473 8.37834 7.51647 5.50918 11.064 5.50918C14.6115 5.50918 17.4806 8.37834 17.4806 11.9258C17.4806 15.4733 14.6115 18.3425 11.064 18.3425Z" fill="#FFFFFF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_122_10">
                            <rect width="22" height="22" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className="ml-2 font-medium">{data.number_of_pages_median} pages</p>
                    </span>
                </div>
                
            </div>
            </>
        )
    }
    const FavoriteBookCard = () => {
        return(
            <>
            <div className="card relative mb-2 p-[6px] bg-[#99338f] rounded-[10px] w-[90%] mx-auto pb-3 h-[fit] flex flex-col transition duration-200 ease-in-out hover:scale-[1.02] " onClick={()=>props.cardclick(data)}>
                <div className="relative h-[fit] w-[100%] rounded-lg mx-auto my-auto" >
                    <img className="rounded-lg" src={`https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`} alt="cover"/>
                    <div className={"absolute h-[100%] w-[100%] rounded-lg top-0 left-0 "+(cardhover ? "backdrop-blur-[1px]" : "")} onMouseEnter={()=>handlecardhover()} onMouseLeave={()=>handlecardhover()}>
                        <div className={"absolute top-[40%] left-[40%] "+(cardhover ? " hover:cursor-pointer" : "hidden")}>
                            <svg width="58" height="58" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.5127 26.6346L16.0261 37.9413C14.3723 38.8999 12.25 37.7392 12.25 35.8067V13.1932C12.25 11.2639 14.3692 10.1001 16.0261 11.0617L35.5127 22.3685C35.8889 22.5832 36.2016 22.8937 36.4191 23.2683C36.6366 23.6429 36.7512 24.0684 36.7512 24.5015C36.7512 24.9347 36.6366 25.3602 36.4191 25.7348C36.2016 26.1094 35.8889 26.4198 35.5127 26.6346Z" fill="white"/>
                            </svg>
                        </div>
                        <div className={cardhover ? "h-[fit] absolute top-1 right-0 bg-[#99338f] rounded-full p-[2px] w-[fit] mx-auto my-auto mr-2 hover:cursor-pointer": "hidden"} onClick={(e)=>removeFromFavorites(e, data.cover_i)} onMouseEnter={()=>handlehrthover()} onMouseLeave={()=>handlehrthover()}>
                            <svg className={(hrthover ? "block" : "hidden")} width="34" height="34" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M52.2793 16.0633C51.5201 14.3054 50.4254 12.7124 49.0564 11.3734C47.6865 10.0305 46.0713 8.96334 44.2986 8.22989C42.4605 7.46634 40.489 7.07551 38.4986 7.08009C35.7063 7.08009 32.9818 7.84474 30.6143 9.28907C30.0479 9.63458 29.5098 10.0141 29 10.4275C28.4902 10.0141 27.9521 9.63458 27.3857 9.28907C25.0182 7.84474 22.2937 7.08009 19.5014 7.08009C17.4906 7.08009 15.5422 7.46524 13.7014 8.22989C11.9229 8.96622 10.3199 10.0254 8.94355 11.3734C7.57283 12.7109 6.47786 14.3042 5.7207 16.0633C4.9334 17.8928 4.53125 19.8356 4.53125 21.835C4.53125 23.7211 4.91641 25.6865 5.68105 27.6859C6.32109 29.3568 7.23867 31.09 8.41113 32.8402C10.2689 35.61 12.8234 38.4986 15.9953 41.427C21.2516 46.2811 26.4568 49.6342 26.6777 49.7701L28.0201 50.6311C28.6148 51.0106 29.3795 51.0106 29.9742 50.6311L31.3166 49.7701C31.5375 49.6285 36.7371 46.2811 41.999 41.427C45.1709 38.4986 47.7254 35.61 49.5832 32.8402C50.7557 31.09 51.6789 29.3568 52.3133 27.6859C53.0779 25.6865 53.4631 23.7211 53.4631 21.835C53.4688 19.8356 53.0666 17.8928 52.2793 16.0633ZM29 46.1508C29 46.1508 8.83594 33.2311 8.83594 21.835C8.83594 16.0633 13.6107 11.3848 19.5014 11.3848C23.6418 11.3848 27.2328 13.6957 29 17.0715C30.7672 13.6957 34.3582 11.3848 38.4986 11.3848C44.3893 11.3848 49.1641 16.0633 49.1641 21.835C49.1641 33.2311 29 46.1508 29 46.1508Z" fill="white"/>
                            </svg>
                            <svg className={(hrthover ? "hidden" : "block")} width="34" height="34" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.3779 15.7863C50.6318 14.0587 49.556 12.4932 48.2106 11.1774C46.8643 9.85759 45.2769 8.8088 43.5349 8.088C41.7284 7.33761 39.7909 6.95351 37.8349 6.95802C35.0906 6.95802 32.4132 7.70948 30.0864 9.12891C29.5298 9.46847 29.001 9.84142 28.5 10.2478C27.999 9.84142 27.4702 9.46847 26.9136 9.12891C24.5868 7.70948 21.9094 6.95802 19.1651 6.95802C17.1891 6.95802 15.2742 7.33653 13.4651 8.088C11.7173 8.81163 10.142 9.85255 8.78936 11.1774C7.44227 12.4917 6.36618 14.0576 5.62207 15.7863C4.84834 17.5843 4.45312 19.4936 4.45312 21.4585C4.45312 23.3121 4.83164 25.2437 5.58311 27.2086C6.21211 28.8507 7.11387 30.554 8.26611 32.274C10.0919 34.996 12.6023 37.8349 15.7195 40.7127C20.8852 45.4831 26.0007 48.7784 26.2178 48.912L27.537 49.7581C28.1215 50.1311 28.8729 50.1311 29.4574 49.7581L30.7767 48.912C30.9938 48.7729 36.1037 45.4831 41.2749 40.7127C44.3921 37.8349 46.9025 34.996 48.7283 32.274C49.8806 30.554 50.7879 28.8507 51.4113 27.2086C52.1628 25.2437 52.5413 23.3121 52.5413 21.4585C52.5469 19.4936 52.1517 17.5843 51.3779 15.7863Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div className="min-h-[40%] h-fit mt-2 hover:cursor-pointer">
                    <h1 className="font-semibold text-[18px] text-center h-fit">{data.title}</h1>
                    <h2 className="font-meduim text-[16px] text-center h-fit">{data.author_name}</h2>
                    
                    <span className="mt-3 w-[100%] flex flex-row justify-center font-medium">
                        <svg  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_122_10)">
                            <path d="M13.814 0.925842H8.31396V2.75918H13.814V0.925842ZM10.1473 12.8425H11.9806V7.34251H10.1473V12.8425ZM17.5081 6.77418L18.8098 5.47251C18.4156 5.00501 17.9848 4.56501 17.5173 4.18001L16.2156 5.48168C14.7557 4.30681 12.9379 3.66639 11.064 3.66668C6.50813 3.66668 2.81396 7.36084 2.81396 11.9167C2.81396 16.4725 6.49896 20.1667 11.064 20.1667C15.629 20.1667 19.314 16.4725 19.314 11.9167C19.314 9.98251 18.6356 8.19501 17.5081 6.77418ZM11.064 18.3425C7.51647 18.3425 4.6473 15.4733 4.6473 11.9258C4.6473 8.37834 7.51647 5.50918 11.064 5.50918C14.6115 5.50918 17.4806 8.37834 17.4806 11.9258C17.4806 15.4733 14.6115 18.3425 11.064 18.3425Z" fill="#FFFFFF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_122_10">
                            <rect width="22" height="22" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className="ml-2 font-medium">{data.pages} pages</p>
                    </span>
                </div>
                
            </div>
            </>
        )
    }

    return(
        <>
        {defaultcard ? DefaultBookCard() : FavoriteBookCard()}    
        </>
    )
}

export default Bookcard;