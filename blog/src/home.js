import { useState } from 'react';
import BlogList from './BlogList';

//useState helps in changing the state of anything.
const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            { title: 'My new website', body: 'lorem ipsum...', author: 'Alex', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
            { title: 'React tricks', body: 'lorem ipsum...', author: 'Mario', id: 4 }
        ]
    )
    const handleDelete = (id) => {
        const newBlog = blogs.filter(x => x.id !== id);//if the id we are on is not equal to the id the blog is pointing at then this logic will send true
        setBlogs(newBlog);
    }
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* inside  BlogList we have created the props so that we can use them in different components as well*/}
            {/* <BlogList blogs = { blogs.filter((blogval)=> blogval.author === 'Mario') } title="Mario's Blogs!"/> */}
        </div>
    );
}

export default Home;