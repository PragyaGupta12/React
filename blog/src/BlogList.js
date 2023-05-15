const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((x) => (  //x will iterate through blogs list created above and apply the logic to each value 
                <div className="blog-preview" key={x.id}>
                    <h2>{x.title}</h2>
                    <p>Written by {x.author}</p>
                    {/* <button id="del-btn" onClick={() => handleDelete(x.id)}>Delete</button> */}
                </div>//key property is used by react to keep a track of each item in the DOM as it outputs it
                //so if there is a change in the array/list, react can keep track of those items
                // and the id should be unique inside key property
            ))}
        </div>
    );
}

export default BlogList;