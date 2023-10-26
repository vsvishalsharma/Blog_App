
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs,loading,error}=useFetch('http://localhost:8000/blogs');
  //data:blogs call data as blogs in this home.js context
  return (
    <div className="home">
      {error &&<div>Could not fetch the Data</div>}
      {loading && <div>Loading Mugiwara Blogs....</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;