import {BiArrowBack} from "react-icons/bi";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBinLine} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import {storage} from '../firebase';
import {ref, uploadBytes, listAll, getDownloadURL, deleteObject} from 'firebase/storage';

const Profil = (props) => {
    const [editform, seteditform] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [profileImg, setprofileImg] = useState(null)
    const [profilImgUrl, setProfilImgUrl] = useState(null)

    const imagesListRef = ref(storage, 'profilImages/')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('https://audible-horizons-backend.onrender.com/api/getdata', {
            params:{
            token: localStorage.getItem('token')
        }}).then(response => {
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

    const deleteAccount = ()=> {
        const profilRef = ref(storage, `profilImages/${props.id}`)
        deleteObject(profilRef)
        axios.get('https://audible-horizons-backend.onrender.com/api/deleteaccount',  {
            params:{
                token: localStorage.getItem('token')
            }
        }).then(res => {
            res = res.data
            if(res.deleted === true){
                alert('account deleted succesfuly.')
                localStorage.removeItem('token')
                navigate('/home')
            }
        })
    }
    const editprofil = () => {
        seteditform(!editform)
    }
    const noeditForm = () => {
        return(<>
            <div className=" w-fit grid grid-cols-2 gap-x-3 mx-auto">
                        <p className="w-[120px] text-end font-medium text-lg">First name :</p>
                        <p className="text-lg pl-2 ">{props.fname}</p>
                        <p className="w-[120px] text-end font-medium text-lg">Last name :</p>
                        <p className="text-lg pl-2 ">{props.lname}</p>
                        <p className="w-[120px] text-end font-medium text-lg">Email :</p>
                        <p className="text-lg pl-2 ">{props.email}</p>
                    </div>
                    <div className="w-fit mx-auto mt-3">
                    <button onClick={()=>editprofil()} className="bg-[#FF00C7] rounded-lg px-5 py-2">
                        <span className="flex flex-row items-center">
                            <p className="font-semibold mr-1 text-[21px]">Edit</p>
                            <div className="w-fit h-fit hover:cursor-pointer">
                                <FiEdit className="w-[19px] h-[19px]" />
                            </div>
                        </span>
                    </button>
                    <button onClick={()=>deleteAccount()} className="bg-[#FF00C7] ml-2 rounded-lg px-5 py-2">
                        <span className="flex flex-row items-center">
                            <p className="font-semibold mr-1 text-[21px]">Delete</p>
                            <div className="w-fit h-fit hover:cursor-pointer">
                                <RiDeleteBinLine className="w-[19px] h-[19px]" />
                            </div>
                        </span>
                    </button>
                    </div>
        </>)
    }
    const handleImageUpload = () => {
        if(profileImg === null) return;
        listAll(imagesListRef).then(res => {
            res.items.forEach((item) => {
                let tmpname = item._location.path
                tmpname = tmpname.split('/')
                tmpname = tmpname[1]
                if(tmpname === props.id){
                    let tmp = ref(storage, `profilImages/${props.id}`)
                    deleteObject(tmp)
                }
            })
        })
        const imageRef = ref(storage, `profilImages/${props.id}`)
        uploadBytes(imageRef, profileImg).then(()=>window.location.reload(false))
    }
    const saveEdit = ()=> {
        // handle image edit
        handleImageUpload()
        // handle data edit
        setLoading(true)
        let inputfields = ['fnameEdit', 'lnameEdit', 'emailEdit']
        let newData = []
        for (let i = 0; i < inputfields.length; i++) {
            let string = 'input[name="'+inputfields[i]+'"]';
            let newvalue = document.querySelector(string).value
            if(newvalue !== ''){
                let tmp = { field : inputfields[i] , newvalue : document.querySelector(string).value}
                newData.push(tmp)
            }
        }
        axios.post('https://audible-horizons-backend.onrender.com/api/editprofil', {newData : newData, token : localStorage.getItem('token')})
        .then(res => {
            res = res.data
            if(res.edited){
                props.setstate(res.userdata)
                for (let i = 0; i < inputfields.length; i++) {
                    let string = 'input[name="'+inputfields[i]+'"]';
                    document.querySelector(string).value = ''
                    seteditform(!editform)
                }
            }
        })
        setLoading(false)
    }
    const cancelEdit = () => {
        let inputfields = ['fnameEdit', 'lnameEdit', 'emailEdit']
        for (let i = 0; i < inputfields.length; i++) {
            let string = 'input[name="'+inputfields[i]+'"]';
            document.querySelector(string).value = ''
            seteditform(!editform)
        }
    }
    const editForm = () => {
        return(<>
            <div className=" w-fit grid grid-cols-2 gap-x-0 gap-y-1 mx-auto">
                        <p className="w-[130px] text-end font-medium text-lg">First name :</p>
                        <input type="text" name="fnameEdit" className="px-3 focus:outline-none rounded-md text-black font-medium" placeholder={props.fname}/>
                        <p className="w-[130px] text-end font-medium text-lg">Last name :</p>
                        <input type="text" name="lnameEdit" className="px-3 focus:outline-none rounded-md text-black font-medium" placeholder={props.lname}/>
                        <p className="w-[130px] text-end font-medium text-lg">Email :</p>
                        <input type="text" name="emailEdit" className="px-3 focus:outline-none rounded-md text-black font-medium" placeholder={props.email}/>
                        <p className="w-[130px] text-end font-medium text-lg">profile image :</p>
                        {/* <form id="imageUploadForm" onSubmit={(e)=> {HandleImageUpload(e)}} encType="multipart/form-data" className="font-meduim">
                        <input type="file" name="image" onChange={(e)=>setprofileImg(e.target.files[0])}/>
                            <input type="submit" id="submitbtn" className="hidden"/>
                        </form> */}
                        <input type="file" name="image" onChange={(e)=>setprofileImg(e.target.files[0])}/>
                    </div>
                    <div className="w-fit mx-auto mt-3">
                    <button onClick={()=>saveEdit()} className="bg-[#FF00C7] rounded-lg px-5 py-2">
                        <span className="flex flex-row items-center">
                            <p className="font-semibold mr-1 text-[21px]">Save</p>
                        </span>
                    </button>
                    <button onClick={()=>cancelEdit()} className="bg-[#FF00C7] ml-2 rounded-lg px-5 py-2">
                        <span className="flex flex-row items-center">
                            <p className="font-semibold mr-1 text-[21px]">Cancel</p>
                        </span>
                    </button>
                    </div>
        </>)
    }
    return(<>
        {!Loading && <div className="scroll-smooth bg-primary lg:snap-y xlg:snap-mandatory h-screen w-screen  absolute top-0 left-0 text-white font-primary font-light">
            <section>
                <div className="relative h-[60px] w-full flex flex-row justify-start items-center xlg:max-w-6xl mx-auto  lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]">
                    <div className="absolute left-0 top-4 h-fit hover:cursor-pointer" onClick={()=>navigate('/api')}>
                        <BiArrowBack className="w-[28px] h-[28px]"/>
                    </div>
                    <p className="w-full font-semibold text-xl text-center">Profil</p>
                </div>
            </section>
            <div className="bg-[#7e2775] relative rounded-lg mt-0 h-fit pb-3 xlg:max-w-6xl mx-auto  lg:max-w-[1024px] md:max-w-[820px] xsm:max-w-[w-screen]">
                <div className="text-white p-2">
                    <div className="relative mb-16 w-full h-[200px] rounded-md bg-white bg-bannerCover bg-cover bg-center">
                        
                        <div className=" absolute top-[82%] left-[46%] w-[90px] h-[90px] rounded-full bg-white bg-opacity-100">
                            <img src={profilImgUrl} alt="Profil" className="w-[90px] h-[90px] rounded-full"/>
                        </div>
                    </div>
                    <h1 className="font-semibold text-xl text-center my-6">Personal informations</h1>
                    {editform ? editForm() :  noeditForm()}
                </div>
            </div>
            
        </div>}
        {Loading && <Loading />}  
    </>)
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        email: state.email,
        fname: state.fname,
        lname: state.lname
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      setstate: (data) => dispatch({type: 'set_state',  data}),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Profil);

