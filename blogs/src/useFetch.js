import { useState,useEffect } from "react";
const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);
    useEffect(() => {
        setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
            throw Error('error in Fetchingthe Requested Data');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            seterror(null);
            setloading(false);
        })
        .catch(err=>{
            setloading(false);
            seterror(err.message);
        })
        },1000);
  }, [])
  return{data,loading,error};
}
export default useFetch;