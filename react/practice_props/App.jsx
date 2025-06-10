import Students from './Student'

function App() {
  return (
    <>
      <Students name="Naruto" age={25} isstudent={true}></Students>
      <Students name="Kakashi" age={40} isstudent={false}></Students>
      <Students name="Sasuke" age={27} isstudent={true}></Students>
      <Students name="Itachi" age={35} isstudent={false}></Students>
    </>
  )
}

export default App
