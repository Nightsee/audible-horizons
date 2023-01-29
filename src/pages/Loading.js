
const Loading = () => {

    return(<>
        <div className="h-screen w-screen bg-primary flex justify-center items-center">
            <div className="block">
                <h1 className="font-bold text-4xl text-white animate-pulse text-center">Loading</h1>
                <div className=" flex items-center justify-center space-x-2 mt-4">
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
                </div> 
            </div>
        </div>
    </>)
}

export default Loading;