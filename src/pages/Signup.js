
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate()

    const Register = () => {
        let email = document.querySelector('input[name="email"]').value
        let password = document.querySelector('input[name="password"]').value
        let fname = document.querySelector('input[name="First name"]').value
        let lname = document.querySelector('input[name="Last name"]').value
        
        const registerData = {
            fname: fname,
            lname: lname,
            email: email,
            password: password
        }
        axios.post('https://audiblehorizons-api.onrender.comregister', registerData)
        .then(res => {
            res = res.data
            if(res.registerOk){
                alert('account created')
                navigate('/login')
            }else{
                alert('problem : ' + res.prob)
            }
        })
    }

    return(<>
        <div className="xsm:w-screen h-screen xsm:p-2 z-[-4] bg-primary text-white overflow-x-hidden sm:overflow-y-scroll md:overflow-y-hidden">
            <div className="w-fit mx-auto relative xsm:-top-5 xsm:h-[130px] lg:max-w-[90%] lg:hidden hover:cursor-pointer" onClick={() => navigate('/')}>
                <img src={require('../Assets/Audible (1).png')} alt="logo" className='xsm:w-[160px] xsm:object-contain'/>
            </div>
            <div className='xsm:hidden lg:block lg:max-w-[1024px] lg:relative lg:-top-9 mx-auto flex flex-row justify-start px-24 hover:cursor-pointer' onClick={() => navigate('/')} >
                <img src={require('../Assets/Audible (1).png')} alt="logo" className='sm:w-[160px]'/>
            </div>
            <div className="relative">
                <p className='font-bold xsm:text-[30px] md:text-[34px] text-center relative z-50 lg:hidden'>The Bookshelf of the Future</p>
                <Link to="/login" className='bg-white w-[150px] mx-auto px-4 py-2 rounded text-black font-semibold text-xl lg:hidden'>Login</Link>
                <svg className='absolute z-[0] xsm:-top-8 xsm:-left-14 md:-left-6 lg:left-[40%] lg:-top-28'
               xmlns="http://www.w3.org/2000/svg"
               width="1020"
               height="720"
               fill="none"
               viewBox="0 0 1020 720"
             >
               <path
                 fill="#D0629F"
                 d="M660.96 178.783c45.9 63.308 84.66 106.134 92.82 152.684 7.65 46.55-15.3 97.29-54.57 121.03-39.27 23.741-94.86 20.482-139.74 29.327-44.88 8.844-79.05 29.326-148.92 46.55-69.87 16.758-174.93 30.257-222.87-6.052-47.43-36.309-37.74-121.495-1.53-184.803 36.21-62.843 98.43-102.876 157.08-163.856 58.14-61.446 112.71-143.375 165.75-142.444 53.55.466 106.59 84.722 151.98 147.564z"
                 opacity="0.4"
               ></path>
             </svg>
            </div>
            <div className='lg:grid grid-cols-2 lg:max-w-[1024px] mx-auto'>  
            <div className='w-full h-fit'>
                <h1 className='xsm:hidden lg:block mb-7 font-bold text-4xl tracking-[4px] mx-auto mt-[20%] text-center'>The Bookshelf <br/> Of <br/>The Future</h1>  
                <Link to="/login" className='bg-[#ff00c7] w-[130px] text-center mx-auto px-3 py-2 rounded text-white font-semibold text-xl xsm:hidden lg:block transition duration-200 ease-in-out hover:bg-[#c343a1]'>Login</Link>
            </div>  

            <div className="relative xsm:pt-10 lg:w-fit lg:-top-28 lg:ml-auto lg:mr-[16%]">
                <div className='mx-auto p-4 backdrop-blur bg-[#ffffff] bg-opacity-[60%] sm:w-[370px] xsm:w-[300px] xsm:min-h-[500px] xsm:h-fit rounded-[20px]'>
                    <h2 className='font-bold text-3xl text-black text-center my-3'>Join the  <br/>  community</h2>
                    <div className='w-[80%] mx-auto text-center'>
                    <p className='text-black block text-lg font-medium sm:my-7 xsm:my-5'>Take your art to the next level. Get it seen by millions of people.</p>
                    </div>
                    <button className='text-white text-center rounded-md p-2 bg-[#1A39DD] font-medium w-[80%] block mx-auto '>Join with Facebook</button>
                    <p className='font-bold text-xl text-gray-700 text-center my-2'>Or</p>
                    <div className='w-[80%] mx-auto flex flex-row justify-around text-black font-medium'>
                        <input type="text" className="w-[48%] rounded-lg py-1 px-2 bg-white focus:outline-none" placeholder='first name' name="First name" />
                        <input type="text" className="w-[48%] rounded-lg py-1 px-2 bg-white focus:outline-none" placeholder='last name' name="Last name" ></input>
                    </div>
                    <div className='flex flex-col text-black font-medium'>
                    <input type="text" className='bg-white w-[78%] mx-auto my-3 rounded-lg py-1 px-2 focus:outline-none' name="email" placeholder='Email'/>
                    <input type="password" className='bg-white w-[78%] mx-auto mb-3 rounded-lg py-1 px-2 focus:outline-none' name="password" placeholder='Password'/>    
                    <button className='text-white text-center rounded-md p-2 bg-[#FF00C7] font-medium w-[80%] mx-auto ' onClick={()=>Register()}>Create New Account</button>
                    </div>
                    <div className='text-gray-700 text-sm w-[80%] mx-auto text-center my-2'>
                        <p>By joining, you agree to our Terms of Service and Privacy Policy</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>)
}

export default Signup;