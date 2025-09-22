import { CardComponent } from "../../components/ui/card"
import { useEffect, useState } from "react"


const HomePage2 = () => {
    const [pageCount, setpageCount] = useState<string>( "My name is Nishan") 
    const [loading , setLoading ] = useState<boolean>(true)
    useEffect(() => {
        console.log("loading anytime ")
    })

useEffect(()=>{
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);

},[])
    return (
        <>
            <div className="flex flex-row gap-1">
                <CardComponent data="1st block"></CardComponent>
                <CardComponent data="2st block"></CardComponent>
    
            </div>
           <div className="flex items-center justify-center h-screen">
      {loading ? (
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-blue-500 rounded-full transform scale-100 animate-bounce"></div>
        </div>
      ) : (
        <p className="text-xl font-semibold">✅ Loaded successfully! {pageCount}</p>
      )}
    </div>
        </>
    )
}
export default HomePage2