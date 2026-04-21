// import posts from '../../../db.json'

import { AddTask } from "@/Components/AddTask";
import PostCards from "@/Components/PostCards";
import { createATask } from "@/Lib/actions";
import { getTasks } from "@/Lib/tasks";

const PostsPage = async() => {
    const posts = await getTasks()

   //  fetch('http://localhost:5000/posts',{cache :'no-store'
   //  } )
   //  const posts = await res.json()
    return (
     <div>
        <div className=" mt-10 w-11/12 mx-auto">
            <AddTask createATask={createATask} />

        </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 w-11/12 mx-auto
        ">
             {
                posts?.map((post ,index)=> <PostCards key={index} post={post} />)
             }
             {/* <PostCards  posts={posts} /> */}
        </div>
     </div>
    );
};

export default PostsPage;