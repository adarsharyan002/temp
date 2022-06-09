import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import User from './User'
import { useNavigate } from 'react-router-dom';

const InfiniteScrollComp = ({isAuthenticated,setIsAuthenticated}) => {
  let navigate=useNavigate();
    const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

 if(!isAuthenticated){
     navigate('/')
 }

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://randomuser.me/api/?page=1&results=10&seed=abc`
       
      );
      const data = await res.json();
      console.log(data)
      setItems(data.results);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?page=${page}&results=20&seed=abc`
    
    );
    const data = await res.json();
    console.log(data.results)
    return data.results;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  const handleClick=()=>{
      setIsAuthenticated(false)

    navigate('/')

  }

    return ( 
    
            <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
 
>
    <div className='flex gap-8 m-3'>
    <h1 className='m-3 font-bold text-xxl'>InfiniteScroll List</h1>
<button onClick={handleClick} type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Logout</button>
    </div>

<div className="container ">
  {items.map((item,i) => {
            return <User key={i} data={item} />;
          })}
          </div>
</InfiniteScroll>

        
     );
}
 
export default InfiniteScrollComp;