// import '../../App.css'
import ClipLoader from "react-spinners/ClipLoader";
import '../../App.css'
import Comment from "../../components/Comment";
import { useGetCommentsQuery } from "./commentApis";

const CommentLists = (postId) => {
 
  const { data: comments, error, isLoading, isError, isFetching } = useGetCommentsQuery({ postId });
  

  return (
    <div>
      {isError && <div>Error: {error.data}</div>}
      {isLoading || isFetching && <ClipLoader color="#000" loading={true} size={150} />}
      <h2>Comments</h2>
      <section className='container'>
        {
          comments && comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        }
      </section>
    </div>
  )
}

export default CommentLists

