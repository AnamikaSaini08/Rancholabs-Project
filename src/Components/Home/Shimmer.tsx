import {useEffect,useState} from 'react';

const Shimmer = () => {
  const [flag,setFlag] = useState<boolean>(true);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setFlag(!flag);
    },500);

    return ()=>{
      clearInterval(interval);
    }
  })
  return (
    <div>
      <div className={`h-[80%] w-[80%] ${flag ? "bg-gray-300":"bg-gray-200"} flex justify-center my-auto`}></div>
    </div>
  )
}

export default Shimmer
