import { useAddPostMutation } from "./postApis";
import '../../App.css'

const CreatePost = () => {
  const [addPost,{error,isLoading}]=useAddPostMutation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Please fill in both fields");
    } else {
      try {
        const newPost = await addPost({
          title: e.target[0].value,
          body: e.target[1].value,
          author_id: 1,
        });
  
        console.log(newPost);
        e.target.reset();
      } catch (error) {
        console.error('Error adding post:', error);
      }
    }
  };
  
  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="Title">
          Title:
          <input
            type="text"
            id="Title"
            name="Title"
          
          />
        </label>
        <label className="form-input" htmlFor="Body">
          Body:
          <textarea id="Body" name="Body" />
        </label>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
