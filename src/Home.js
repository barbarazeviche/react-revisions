import { useState } from 'react';

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


    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'loremhgffghjk....', author:'mario', id: 1},
        { title: 'welll welll welll', body: 'loremhgffghjk....', author:'maria', id: 2},
        { title: 'going loca in here', body: 'loremhgffghjk....', author:'mariana', id: 3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
             <div className='blog-preview' key={blog.id}>
                 <h2>{blog.title}</h2>
                 <p> Written by {blog.author}</p>
             </div>   
            ))}
           {/*  <h2>HomePAge</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain("mario", e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home; 