// Write your code here
import './index.css'

const Comment = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {name, comment, isLiked, initialClassName, date, id} = commentDetails
  const initial = name[0]

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClassName = isLiked ? 'liked-img' : ''

  const onClickLikeIcon = () => {
    toggleIsLiked(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item-container">
      <div className="name-logo-container">
        <div className="initial-container">
          <p className={initialClassName}>{initial}</p>
        </div>
        <p className="name">{name}</p>
        <div className="date-container">
          <p>{date}</p>
          <p>  ago</p>
        </div>
      </div>
      <p className="comment-desc">{comment}</p>
      <div className="icon-container">
        <div className="like-container">
          <button onClick={onClickLikeIcon} className="icon-btn">
            <img src={likeImgUrl} alt="like" />
          </button>
          <p className={likeTextClassName}>Like</p>
        </div>
        <button data-testid="delete" className="icon-btn" onClick={onDelete}>
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default Comment
