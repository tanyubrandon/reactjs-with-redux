import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Pockeball from "./Pockeball.png"

class Home extends React.Component {
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                console.log(res)
                this.setState({
                    posts:res.data.slice(0,30)
                })
            }) 
    }
    ;
    render() { 
        console.log(this.state.posts)
        const {posts}=this.state;
        const postList=posts.length?(posts.map(post=>{
            return(
                <div className="post card" key={post.id}>
                    <img src={Pockeball} alt="not found" />
                    <div className="card-content">
                       <Link to={'/'+post.id}>
                            <span className="card-title pink-text">{post.title}</span>
                       </Link>
                       <div className="post-body">{post.body}</div>
                    </div>
                </div>
            )
        })):(
            <div className="container">Loading.....</div>
        )
        
        // ):(
        //     <div className="center">No post Yet</div>
        // )
        return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
        );
    }
}
 
export default Home;