// import '../../App.css'
import ClipLoader from "react-spinners/ClipLoader";
import Post from '../../components/Post'
import { useGetPostsQuery } from "./postApis";
import '../../App.css'

const PostLists = () => {
 
  const { data: posts, error, isLoading, isError, isFetching } = useGetPostsQuery({refetchOnReconnect:true});

  return (
    <div>
      {isError && <div>Error: {error.data}</div>}
      {isLoading || isFetching && <ClipLoader color="#000" loading={true} size={150} />}
      <h2>Posts</h2>
      <section className='container'>
        {
          posts && posts.map((post, index) => (
            <Post key={index} post={post} />
          ))
        }
      </section>
    </div>
  )
}

export default PostLists