export interface ICardComponent{
    data:string,
    className?: string
}


export const CardComponent= (props:Readonly<ICardComponent>)=>{
    return(
        <>
        <div className={` ${props.className}`}>
            {props.data}
        </div>
        <div>
            <p>Additional content can go here. {props.data}</p>
        </div>
        </>
    )
}