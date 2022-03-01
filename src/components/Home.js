import React from 'react';
import axios from 'axios'

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
        const postList=posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <div className="post-body">{post.body}</div>
                        </div>
                    </div>
                )
            })
        // ):(
        //     <div className="center">No post Yet</div>
        // )
        return (
        <div className="container">
            <h4 className="center">Home</h4>
            {this.state.posts && postList}
        </div>
        );
    }
}
 
export default Home;