import { useState } from 'react';
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


    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'loremhgffghjk....', author:'mario', id: 1},
        { title: 'welll welll welll', body: 'loremhgffghjk....', author:'maria', id: 2},
        { title: 'going loca in here', body: 'loremhgffghjk....', author:'mariana', id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={"love is all"}/> {/* the blogs list above has been converted into props, called blogs, which can now be used in component BlogList(we need to call it inside parenthesis as props) */}

            <BlogList blogs={blogs.filter((blog) =>blog.author === "mario")} title={"Mario's blogs"}/>

           {/*  <h2>HomePAge</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain("mario", e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home; 