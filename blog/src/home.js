import { useState, useEffect } from 'react';
import BlogList from './BlogList';

//useState helps in changing the state of anything.
const Home = () => {
    // const [blogs, setBlogs] = useState(
    //     [
    //         { title: 'My new website', body: 'lorem ipsum...', author: 'Alex', id: 1 },
    //         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    //         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
    //         { title: 'React tricks', body: 'lorem ipsum...', author: 'Mario', id: 4 }
    //     ]
    // )
    const [blogs, setBlogs] = useState(null);//now we are going to fetch the data from the JSON file.
    const handleDelete = (id) => {
        const newBlog = blogs.filter(x => x.id !== id);//if the id we are on is not equal to the id the blog is pointing at then this logic will send true
        setBlogs(newBlog);
    };

    useEffect(()=>{
        fetch("http://localhost:8000/blogs")//this link here has the resource i.e the blogs in the json file
        .then(res =>{
            return res.json()
        })
        .then(data => {setBlogs(data)
        })
    },[]);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
            {/* we have written && because when the fetch() takes time to get the data the web app throws error
            so we have used a logical AND, this makes sure that the bloglist part runs only if blogs is true and 
            that will be true only when the fetch() gets the data. This way the error is handled */}
            {/* inside  BlogList we have created the props so that we can use them in different components as well*/}
            {/* <BlogList blogs = { blogs.filter((blogval)=> blogval.author === 'Mario') } title="Mario's Blogs!"/> */}
        </div>
    );
}

export default Home;