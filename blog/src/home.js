import { useState } from 'react';
import BlogList from './BlogList';

//useState helps in changing the state of anything.
const Home = () => {
    const [blogs, setBlogs] = useState(
        [
        {title: 'My new website', body: 'lorem ipsum...', author: 'Alex', id: 1 },
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
        {title: 'React tricks', body: 'lorem ipsum...', author: 'Mario', id: 4 }
        ]
        )
    return (
        <div className="home">
           <BlogList blogs = { blogs } title="All Blogs!"/>
           {/* <BlogList blogs = { blogs.filter((blogval)=> blogval.author === 'Mario') } title="Mario's Blogs!"/> */}
        </div>
    );
}

export default Home;