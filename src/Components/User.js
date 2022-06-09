

const User = (data) => {
 
    const {name,picture}=data.data;
   
    
    return ( 

       <div className="User card flex justify-between m-4 shadow-lg w-60 rounded-br-sm p-3">

         
          <h1 className="mt-4">{name.first +"  "+ name.last}</h1>
          <img src={picture.medium} alt=""></img>
         
       </div>
   
     );
}
 
export default User;