import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {storage} from '../../firebase';
import {ref, listAll, getDownloadURL} from 'firebase/storage';

const Apinavbar = (props) => {
    const [dropprofil , setdropprofil] = useState(false)
    let [count, setcount] = useState(0)
    const [Books, setBooks] = useState(true)
    const [Audiobooks, setAudiobooks] = useState(false)
    const [Favorites, setFavorites] = useState(false)
    const [profilImgUrl, setProfilImgUrl] = useState(null)

    const imagesListRef = ref(storage, 'profilImages/')

    useEffect(()=>{
        axios.get('http://localhost:4000/api/getdata',{
            params:{
                token: localStorage.getItem('token')
            }
        })
        .then(response => {
            response = response.data
            listAll(imagesListRef).then(res => {
                res.items.forEach((item) => {
                    let tmpname = item._location.path
                    tmpname = tmpname.split('/')
                    tmpname = tmpname[1]
                    if(tmpname === response.id){
                        getDownloadURL(item).then((url)=>{
                            // setImagesList((prev) => [...prev, url])
                            setProfilImgUrl(url)
                        })
                    }
                })
            })

            if(profilImgUrl !== null){
                response.profilUrl = profilImgUrl
            }else{
                response.profilImgUrl = ""
            }
            props.setstate(response)
        })
    },[])

    const navigate = useNavigate()

    const classnameformenu = 'absolute z-30 p-3 bg-white w-[200px] h-[200px] top-3 right-0 rounded-lg';
    const showmenu = classnameformenu + ' animate-showmenu';
    const hidemenu = classnameformenu + ' animate-hidemenu';

    useEffect(()=>{
        if(!Audiobooks && !Favorites){setBooks(true)}
    },[Audiobooks, Favorites])
    useEffect(() => {
        let profile = document.querySelector('.profilicon')
        if(count === 0 && dropprofil === false){
            return
        }else if(dropprofil){
            if(profile.classList.contains('animate-closeprofil')){
                profile.classList.remove('animate-closeprofil')
            }
            profile.classList.add('animate-openprofil')
        }else{
            if(profile.classList.contains('animate-openprofil')){
                profile.classList.remove('animate-openprofil')
            }
            profile.classList.add('animate-closeprofil')
        }
    }, [dropprofil])

    const dropmenu = () => {
        // let tmp = {status: !dropprofil.status, count:dropprofil.count + 1}
        setcount(count+ 1)
        setdropprofil(!dropprofil)
    }
    
    const listItemClick = (x) => {
        switch (x){
            case 1:
                setBooks(true)
                setAudiobooks(false)
                setFavorites(false)
                props.bookclick()
                break;
            case 2:
                setBooks(false)
                setAudiobooks(!Audiobooks)
                setFavorites(false)
                props.audioclick()
                break;
            case 3:
                setBooks(false)
                setAudiobooks(false)
                setFavorites(!Favorites)
                props.favclick()
                break;
                default:
                    break;
        }
    }
    return(<>
    <nav className="h-20 ">
            <div className='flex flex-row justify-between relative xlg:max-w-6xl mx-auto h-20 lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]'>
                <div className='h-[100%] overflow-hidden' onClick={()=> props.settofalse()}>
                <img src={require('../../Assets/Audible (1).png')} alt="logo" className='object-contain w-[128px] -mt-6'/>
                </div>
                <ul className="list-none flex flex-row items-center w-96 z-50 font-medium text-lg">                    
                    <li className={'mr-9 hover:cursor-pointer '+(Books ? 'text-[#d0d0d0]' : '')} onClick={() => listItemClick(1)}>Books</li>
                    <li className={'mr-9 hover:cursor-pointer '+(Audiobooks ? 'text-[#d0d0d0]' : '')} onClick={() => listItemClick(2)}>Audiobooks</li>
                    <li className={'hover:cursor-pointer '+(Favorites ? 'text-[#d0d0d0]' : '')} onClick={() => listItemClick(3)}>Favorites</li>
                </ul>
                <div className=' profilicon bg-gray-800 rounded-full w-12 h-12 self-center z-50 hover:cursor-pointer ' onClick={()=>dropmenu()}>       
                    {profilImgUrl !== '' && profilImgUrl !== null && profilImgUrl !== undefined &&<img src={profilImgUrl} className="rounded-full w-12 h-12"/>}
                </div>
                {console.log(props.email + ' ' + props.imageurl)}
                <div className={dropprofil ? showmenu : hidemenu}>
                    <div className='grid grid-cols-1 grid-rows-3'>
                        <div className='h-12 mb-2'></div>
                        <div className='row-span-2'>        
                            <div className={dropprofil ? 'block': 'hidden'}>
                            <ul className='text-black font-medium text-[17px] flex flex-col content-center items-center'>
                                <button className='mb-[5px]' onClick={()=>navigate('/api/profil')}>Profil</button>
                                <button className='mb-[5px]' onClick={()=>props.displaycontent('settings')}>Settings</button>
                                <button className='' onClick={()=>props.Logout()}>Log out</button>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
    </nav>
    </>)
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        email: state.email,
        fname: state.fname,
        lname: state.lname,
        imageurl: state.profilImgUrl
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

export default connect(mapStateToProps, mapDispatchToProps)(Apinavbar);