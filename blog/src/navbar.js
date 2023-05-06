const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Techy Tech!</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;