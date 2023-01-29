import Apinavbar from "./reusable componenrs/Apinavbar";
import {HiSearch} from "react-icons/hi";
import videoo from "../Assets/videoo.mp4";
import { useEffect, useState } from "react";
import Bookcard from "./reusable componenrs/Bookcard";
import Loading from "./Loading";
import {connect} from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import BookDetailsCard from "./reusable componenrs/BookDetailsCard";
import Loadingsearch from "./Loadingsearch";
import {storage} from '../firebase';
import {ref, listAll, getDownloadURL} from 'firebase/storage';

const Appdashboard = (props) => {
    const [showfav, setshowfav] = useState(false)
    const [book, setbook] = useState(false)
    const [audio, setaudio] = useState(false)
    const [cardclicked, setcardclicked] = useState(false)
    const [cardclickedData, setcardclickedData] = useState({})
    const [loading, setloading] = useState(false)
    const [SearchTerm, setSearchTerm] = useState('')
    const [resultLoading, setresultLoading] = useState(false)
    const [searchResult, setSeatchResult] = useState([{}])
    const [favlist, setfavlist] = useState([{}])
    const [favchanged, setfavchanged] = useState(true)
    const [profilImgUrl, setProfilImgUrl] = useState(null)

    const imagesListRef = ref(storage, 'profilImages/')
    const navigate = useNavigate()
   
    useEffect(()=>{
        setfavlist(props.favorites)
    },[props.favorites])

    // useEffect(()=>{
    //     axios.get('http://localhost:4000/api/getdata',{
    //         params:{
    //             token: localStorage.getItem('token')
    //         }
    //     })
    //     .then(response => {
    //         response = response.data
    //         listAll(imagesListRef).then(res => {
    //             res.items.forEach((item) => {
    //                 let tmpname = item._location.path
    //                 tmpname = tmpname.split('/')
    //                 tmpname = tmpname[1]
    //                 if(tmpname === response.id){
    //                     getDownloadURL(item).then((url)=>{
    //                         console.log('url : ' + typeof(url))
    //                         // setImagesList((prev) => [...prev, url])
    //                         setProfilImgUrl(url)
    //                     })
    //                 }
    //             })
    //         })

    //         if(profilImgUrl !== null){
    //             response.profilUrl = profilImgUrl
    //         }else{
    //             response.profilImgUrl = ""
    //         }
    //         props.setstate(response)
    //         setfavlist(response.favorites)
    //     })
    //     setloading(false)
    // },[])

    useEffect(()=>{
        setSeatchResult(props.SearchResult)
    },[SearchTerm])

    const addtofav = (data) => {  
        let tmp = {
            title: data.title,
            cover_i: data.cover_i,
            author_name: data.author_name,
            pages: data.number_of_pages_median,
            token: localStorage.getItem('token')
        }
        axios.post('https://audible-horizons-backend.onrender.com/api/addtofav', tmp)
        props.addtofavorites(tmp)
        setfavlist(props.favorites)
    }
    const removefromfav = (data) => {
        axios.post('https://audible-horizons-backend.onrender.com/api/removefromfav', {cover_i: data , token: localStorage.getItem('token')})
        setfavchanged(!favchanged)
        props.removefromfavorites(data)
        setfavlist(props.favorites)
    }
    const closecarddetails = () => {
        if(cardclicked){
            setcardclicked(false)
        }
    }
    const settofalse = () => {
        setaudio(false)
        setbook(true)
        setshowfav(false)
    }
    const favclick = () => {
        if(audio){setaudio(false)}
        if(book){setbook(false)}
        setshowfav(!showfav)
    }
    const audioclick = () => {
        if(showfav){setshowfav(false)}
        if(book){setbook(false)}
        setaudio(!audio)
    }
    const bookclick = () => {
        if(showfav){setshowfav(false)}
        if(audio){setaudio(false)}
        // setbook(true)
    }
    const cardclick = (data) => {
        setcardclickedData(data)
        setcardclicked(!cardclicked)
    }
    const Logout = () => {
        axios.get('https://audible-horizons-backend.onrender.com/api/logout', {
            params:{
                token: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            res = res.data
            if(res.logedout === true){
                localStorage.removeItem('token')
                navigate('/home')
            }
        })
    }
    const handlesubmit = (e, data) => {
        setresultLoading(true)
        e.preventDefault()
        data = data.replace(/\s/g, "+")
        
        axios.get(`${props.url}`+ data)
        .then(res => {
            let tmp = []
            res.data.docs.forEach(element => {
              if(element.cover_i !== undefined){
                tmp.push(element)
              }
            })
            props.setsearchresult(tmp)
            setresultLoading(false)
            setSearchTerm(data)
            document.querySelector('input[name="searchbar"]').value = ""
        })
    }
    const handlekeypress = (e) => {
        if (e.keyCode === 13) {
            handlesubmit(e, e.target.value)
            let searchresultsection = document.querySelector('#searchResult')
            searchresultsection.scrollIntoView()
          }
        
    }
    const handlesearchclick = ()=>{
        setresultLoading(true)
        let searchresultsection = document.querySelector('#searchResult')
        searchresultsection.scrollIntoView()
        let inputsearch = document.querySelector('input[name="searchbar"]').value
        let data = inputsearch.replace(/\s/g, "+")
        axios.get(`${props.url}`+ data)
        .then(res => {
            let tmp = []
            res.data.docs.forEach(element => {
                if(element.cover_i !== undefined){
                tmp.push(element)
              }
            })
            props.setsearchresult(tmp)
            setSearchTerm(data)
            setresultLoading(false)
            document.querySelector('input[name="searchbar"]').value = ""
        })
    }
    
    const pagecontent = () => {
        return(<>
        <div className="relative" onClick={()=>closecarddetails()}>
            <div className="scroll-smooth bg-primary lg:snap-y xlg:snap-mandatory h-screen w-screen overflow-x-hidden overflow-y-scroll relative text-white font-primary font-light">
                <div>
                    <Apinavbar Logout={Logout} showfav={showfav} settofalse={settofalse} bookclick={bookclick} audioclick={audioclick} favclick={favclick} />
                </div>
                <section id="searchbar" className={(audio || showfav ) ? "animate-hidesection" : "animate-showsection"}>
                    <div className="bg-[#7e2775] relative rounded-lg mt-4 h-[500px] xlg:max-w-6xl mx-auto  lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]">
                        <video src={videoo} autoPlay loop muted className="object-cover absolute top-0 z-0 w-full h-full rounded-lg"/>
                        <div className="bg-gradient-to-r from-primary via-[#ab2991c4]  to-primary absolute w-full h-full opacity-75 top-0">
                        </div>
                        <div className="relative opacity-100 w-fit mx-auto h-full flex flex-row items-center">
                            <form onSubmit={(e)=>handlesubmit(e)}>
                                <input type="text" name="searchbar" placeholder="Search for any title" onKeyDown={(e)=>handlekeypress(e)}  
                                className="bg-white w-[299px] rounded-lg py-[5px] px-2 pr-7 focus:outline-none text-black text-[16px] font-normal"
                                /> 
                                <HiSearch className="text-black w-[23px] h-[23px] absolute top-[47.5%] right-1 hover:cursor-pointer" onClick={() => handlesearchclick()}/>
                            </form>
                        </div>
                    </div>
                </section>
                <section id="searchResult" className={(audio ||showfav ) ? "animate-hidesearchresults" : "animate-showsearchresults"}>
                    <div className="bg-[rgb(118,36,109)] p-4 relative rounded-lg mt-4 h-fit xlg:max-w-6xl mx-auto  lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]">                    
                        <h1 className="font-semibold text-2xl text-center">Results</h1>
                        <div className="w-[30px] h-1 border-b border-white mx-auto animate-borderanim"></div>
                        <div className={(audio || book || showfav) ?  "hidden" : " mt-5 grid grid-cols-4 gap-[2px]"}>
                            { resultLoading && <Loadingsearch />}
                            { favchanged && !resultLoading && (searchResult.length !== 1 && searchResult.map(item => item !== undefined && <Bookcard defaultcard={true} key={item.cover_i} data={item} addtofav={addtofav} removefromfav={removefromfav} cardclick={cardclick}/>))}
                            { !favchanged && !resultLoading && (searchResult.length !== 1 && searchResult.map(item => item !== undefined && <Bookcard defaultcard={true} key={item.cover_i} data={item} addtofav={addtofav} removefromfav={removefromfav} cardclick={cardclick}/>))}
                        </div>
                    </div>
                </section>
                <section id="favorites" className={showfav ? "animate-showfav" : "animate-hidefav"}>
                    <div className="bg-[rgb(118,36,109)] p-4 relative rounded-lg mt-4 h-fit xlg:max-w-6xl mx-auto  lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]">
                        <h1 className="font-semibold text-2xl text-center">Favorites</h1>
                        <div className="w-[30px] h-1 border-b border-white mx-auto animate-borderanim"></div>
                        { favlist.length === 0 && <p className="font-meduim text-lg text-center my-28">Your favorites list is empty ...</p>}
                        <div className=" mt-5 grid grid-cols-4 gap-[2px]">
                            {  favlist.map(item => item !== undefined && <Bookcard defaultcard={false} key={item.cover_i} data={item} addtofav={addtofav} removefromfav={removefromfav} cardclick={cardclick}/>)}
                        </div>
                    </div>
                </section>
                <section id="audiobooks" className={audio ? "animate-showfav" : "animate-hidefav"}>
                    <div className="bg-[rgb(118,36,109)] p-4 relative rounded-lg mt-4 h-fit xlg:max-w-6xl mx-auto  lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]">
                        <h1 className="font-semibold text-2xl text-center">Audiobooks</h1>
                        <div className="w-[30px] h-1 border-b border-white mx-auto animate-borderanim"></div>
                        <p className="font-meduim text-lg text-center my-28">Service not available ...</p>
                    </div>
                </section>
            </div>
        </div>
        {cardclicked && <BookDetailsCard data={cardclickedData} cardclicked={cardclicked} closecarddetails={closecarddetails}/>}
        
        </>)
    }

    return(<>
    {loading ? <Loading /> : pagecontent()}
    </>)
}

const mapStateToProps = (state) => {
    return {
        url: state.url,
        email: state.email,
        favorites: state.favorites,
        SearchResult: state.SearchResult
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      setstate: (data) => dispatch({type: 'set_state',  data}),
      setsearchresult: (data) => dispatch({type: 'set_search_result', data}),
      addtofavorites: (data) => dispatch({ type: 'add_to_fav' , data}),
      removefromfavorites: (data) => dispatch({ type: 'remove_fav', data})
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Appdashboard);
