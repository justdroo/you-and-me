import React, {Component} from 'react'
// import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Posts extends Component {

  render() {

    let postList = this.props.posts.map((post)=> {
      return <p><em>{post.user_name}</em>: {post.post.content}</p>
    })

    return (

    <div>
      {postList}
    </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({boardRequest: boardRequest}, dispatch)
// }

function mapStateToProps(state) {
  return {posts: state.reducer.current_board.board.posts}
}

export default connect(mapStateToProps)(Posts)
