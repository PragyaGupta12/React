const Navbar = () => {
    const handleClick=()=>{
        alert("logged")
    }
    return (
        <nav className="navbar">
            <h1>Techy Tech!</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <button onClick={handleClick}>Login</button>  {/*here we are not invoking the func on click 
                because it will run the func even before we click on the button, so instead we set a reference 
                to that func */}
            </div>
        </nav>
    );
}

export default Navbar;