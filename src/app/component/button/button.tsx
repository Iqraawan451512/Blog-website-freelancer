"use client";
 interface Iprops{

    
        text:string
    }
    
 
  
  
  
  const Button =(props:Iprops)=>{
    const handleClick=()=>{
        alert("Messaged send")

    }
     return(
<button 
onClick={handleClick}

className="button shadow-lg shadow-cyan-950 text-cyan-950 font- p-1 rounded-lg hover:bg-slate-400 hover:text-slate-100">{props.text} 
</button>
    );
};
export default Button