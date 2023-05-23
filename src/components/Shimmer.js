export const Shimmer=function(){
    return(
        <>
        <div className="shimmer-effect"></div>
        <div className="container">
            {Array(10).fill('').map((e,index)=>(
                <div key={index} className="shimmer-cards"></div>
            ))}
           

        </div>
        </>
    )
}