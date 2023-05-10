import { useState } from 'react';
//useState helps in changing the state of anything.
const Home = () => {
    const [blogs, setBlogs] = useState(
        [
        {title: 'My new website', body: 'lorem ipsum...', author: 'Alex', id: 1 },
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
        ]
        )
    return (
        <div className="home">
           {blogs.map( (x)=> (  //x will iterate through blogs list created above and apply the logic to each value 
            <div className="blog-preview" key={x.id}> 
                <h2>{ x.title }</h2>
                <p>Written by { x.author }</p>
            </div>//key property is used by react to keep a track of each item in the DOM as it outputs it
            //so if there is a change in the array/list, react can keep track of those items
            // and the id should be unique inside key property
           )
           )}
        </div>
    );
}

export default Home;