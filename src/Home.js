const Home = () => {

    const handleClick = (e) => {
        console.log('hello, picly pickus'+e)
    }

    const handleClickAgain = (name) => {
        console.log('hello' + ' ' + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Poke me</button>
            <button onClick={() => handleClickAgain('mario')}>Click me again</button>
        </div>
     );
}
 
export default Home;