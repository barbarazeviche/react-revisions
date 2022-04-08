import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    /* const handleClick=(e) => {
        console.log("hello ninjas", e);
    } */

   /*  const [name, setName] = useState('mario')
    const [age, setAge] = useState('1')

    const handleClick = () => {
        setName('luigi');
        setAge('33');
    }
 */
  /*   const handleClickAgain = (name, e) => {
        console.log("hello " + name, e.target);
    } */

    /* The function that handle the state data should stay in the same component as state data */
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); /* remember data remains unchanged */
        setBlogs(newBlogs)
    };

    const [name,setName] = useState('mario');

    

   /*  This function runs for every render, use effect does not need to be stored in constant */
    useEffect(() => {
        /* this is a callback to fetch data */ 
        
        fetch('http://localhost:8000/blogs')
        /*once this promise has been resolved, we get a response object, which is not the data yet*/
        .then(res => {
            return res.json();/*transforms it into a json object, and it's also asynchronous*/
        }) /*transforms it into a json object, and it's also asynchronous*/
        .then(data => {
            setBlogs(data);/*gets data*/

        })
    }, []); /* i's the effect to cleanup after a change */


    /* This here below is the state data: */
    const [blogs, setBlogs] = useState(null);
    
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={"love is all"} handleDelete={handleDelete}/>} {/* to avoid an error because initial state is null(and to avoid react from reading it straight away) we use conditional  templating : until "blogs" has a value(or false), than it won't even bother with the next part of the code after &&*/}
            
            
            
            
             {/* the blogs list above has been converted into props, called blogs, which can now be used in component BlogList(we need to call it inside parenthesis as props) */}
            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
            <BlogList blogs={blogs.filter((blog) =>blog.author === "mario")} title={"Mario's blogs"}/> */} 

           {/*  <h2>HomePAge</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain("mario", e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home; 