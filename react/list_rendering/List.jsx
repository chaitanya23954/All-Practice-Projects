import PropType from 'prop-types' // proptype not working

function List(props) {
  const item_list = props.items
  const cat = props.catagory

  item_list.sort((a, b) => b.calories - a.calories) // Revers-Numerical Order

  const list_item = item_list.map((items) => (
    <li key={items.id}>
      {items.name}: &nbsp;
      <b>{items.calories}</b>
    </li>
  ))

  return (
    <>
      <h2 className="list-catagory">{cat}</h2>
      <ol className="list-items">{list_item}</ol>
    </>
  )
}

List.PropType = {
  catagory: PropType.string,
  items: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      name: PropType.string,
      calories: PropType.number,
    })
  ),
}

export default List

// function List() {
//   const fruits = [
//     { id: 1, name: 'Apple', calories: 52 },
//     { id: 2, name: 'Banana', calories: 89 },
//     { id: 3, name: 'Mango', calories: 60 },
//     { id: 4, name: 'Orange', calories: 47 },
//     { id: 5, name: 'Grapes', calories: 69 },
//     { id: 6, name: 'Pineapple', calories: 50 },
//     { id: 7, name: 'Strawberry', calories: 32 },
//     { id: 8, name: 'Watermelon', calories: 30 },
//     { id: 9, name: 'Papaya', calories: 43 },
//     { id: 10, name: 'Cherry', calories: 50 },
//   ]

//   // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical Order
//   // fruits.sort((a, b) => b.name.localeCompare(a.name)) // Revers-Alphabetical Order
//   // fruits.sort((a, b) => a.calories - b.calories) // Numericla Orderr
//   fruits.sort((a, b) => b.calories - a.calories) // Revers-Numerical Order

//   // const LowCalFruits = fruits.filter((f) => f.calories < 50) // Filter low calory fruits
//   const highCalFruits = fruits.filter((f) => f.calories > 50)

//   const list_highCalFruits = highCalFruits.map((f) => (
//     <li key={f.id}>
//       {f.name}: &nbsp;
//       <b>{f.calories}</b>
//     </li>
//   ))

//   return <ol>{list_highCalFruits}</ol>
// }

// export default List
