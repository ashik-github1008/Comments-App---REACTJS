import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import Comment from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here//
class Comments extends Component {
  state = {name: '', comment: '', commentList: [], commentCount: 0}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const filteredCommentsList = commentList.filter(each => each.id !== id)
    this.setState({
      commentList: filteredCommentsList,
    })

    this.setState(prevState => ({
      commentCount: prevState.commentCount - 1
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName = `initial ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
      date: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  render() {
    const {name, comment, commentList, commentCount} = this.state

    console.log(commentList)

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Comments</h1>
          <div className="cmnt-container">
            <form className="cmnt-form-container" onSubmit={this.onAddComment}>
              <p className="label">
                Say something about 4.0 Technologies
              </p>
              <input
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                rows="7"
                placeholder="Your Comment"
                className="name-input"
                value={comment}
                onChange={this.onChangeComment}
              />
              <div>
                <button className="add-cmnt-btn" type="submit">
                  Add Comment
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="cmnt-img"
            />
          </div>
          <hr className="hr-line" />
          <div className="cmnt-count-container">
            <p className="cmnt-count">{commentCount}</p>
            <p className="comments-text">Comments</p>
          </div>
          <ul className="cmnt-list-container">
            {commentList.map(eachComment => (
              <Comment
                key={eachComment.id}
                commentDetails={eachComment}
                toggleIsLiked={this.toggleIsLiked}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
