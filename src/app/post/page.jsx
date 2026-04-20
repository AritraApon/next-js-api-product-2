// import posts from '../../../db.json'

const PostsPage = async() => {
    const res = await fetch('http://localhost:5000/products')
    const posts = await res.json()
    return (
        <div>
             {
                posts.map((post ,index)=> <div key={post.id}> {post.name} </div>)
             }
        </div>
    );
};

export default PostsPage;