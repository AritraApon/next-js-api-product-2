// import posts from '../../../db.json'

import { AddTask } from "@/Components/AddTask";
import PostCards from "@/Components/PostCards";
import { createATask } from "@/Lib/actions";

const PostsPage = async() => {
    const res = await fetch('http://localhost:5000/posts',{cache :'no-store'
    } )
    const posts = await res.json()
    return (
     <div>
        <div className=" mt-10 w-11/12 mx-auto">
            <AddTask createATask={createATask} />
        </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 w-11/12 mx-auto
        ">
             {
                posts.map((post ,index)=> <PostCards key={index} post={post} />)
             }
        </div>
     </div>
    );
};

export default PostsPage;