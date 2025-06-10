import profilepic from './assets/photo.jpg'

function Card() {
  return (
    <div className="card">
      <img className="photo" src={profilepic} alt="profile picture" />
      <h2 className="card-title">Chaitanya Wankhede</h2>
      <p className="card-text">I am a fullstack developer.</p>
    </div>
  )
}

export default Card
