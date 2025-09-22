export const CardComponent= (props:Readonly<{data:string}>)=>{
    return(
        <>
        <div className="flex w-full bg-slate-800 text-white p-2">
            {props.data}
        </div>
        </>
    )
}