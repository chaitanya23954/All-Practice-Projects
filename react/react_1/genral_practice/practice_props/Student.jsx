function Students(props) {
  return (
    <div className="std">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Isstudent: {props.isstudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Students
