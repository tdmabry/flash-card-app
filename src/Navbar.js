const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Flash Cards</h1>
      <div className="links">
        <a href="/">Decks</a>
        <a href="/add">Add Cards</a>
        <a href="/browse">Browse</a> 
      </div>  
    </nav>
  );
}
 
export default Navbar;