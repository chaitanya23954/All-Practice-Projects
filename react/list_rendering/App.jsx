import List from './List'

function App() {
  const fruits = [
    { id: 1, name: 'Apple', calories: 52 },
    { id: 2, name: 'Banana', calories: 89 },
    { id: 3, name: 'Mango', calories: 60 },
    { id: 4, name: 'Orange', calories: 47 },
    { id: 5, name: 'Grapes', calories: 69 },
    { id: 6, name: 'Pineapple', calories: 50 },
    { id: 7, name: 'Strawberry', calories: 32 },
    { id: 8, name: 'Watermelon', calories: 30 },
    { id: 9, name: 'Papaya', calories: 43 },
    { id: 10, name: 'Cherry', calories: 50 },
  ]

  const vegetables = [
    { id: 11, name: 'Carrot', calories: '41' },
    { id: 12, name: 'Broccoli', calories: 34 },
    { id: 13, name: 'Spinach', calories: 23 },
    { id: 14, name: 'Potato', calories: 77 },
    { id: 15, name: 'Tomato', calories: 18 },
    { id: 16, name: 'Onion', calories: 40 },
    { id: 17, name: 'Peas', calories: 81 },
    { id: 18, name: 'Cabbage', calories: 25 },
    { id: 19, name: 'Cauliflower', calories: 25 },
    { id: 20, name: 'Beetroot', calories: 43 },
  ]

  return (
    <>
      <List items={fruits} catagory="Fruits" />
      <List items={vegetables} catagory="Vegetables" />
    </>
  )
}
export default App
