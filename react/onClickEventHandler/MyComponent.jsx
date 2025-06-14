import { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [comment, setComment] = useState('')
  const [paymentType, setPaymentType] = useState('')
  const [shipping, setShipping] = useState('')

  const handelNameOnChange = (event) => {
    setName(event.target.value)
  }

  const handleQuantityOnChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleCommentOnChange = (event) => {
    setComment(event.target.value)
  }

  const handlePaymentTypeOnChange = (event) => {
    setPaymentType(event.target.value)
  }

  const handleShippingOnChange = (event) => {
    setShipping(event.target.value)
  }

  return (
    <div>
      <input
        value={name}
        onChange={handelNameOnChange}
        placeholder="Enter Name"
      ></input>
      <p>Name: {name}</p>
      <input
        value={quantity}
        onChange={handleQuantityOnChange}
        type="number"
      ></input>
      <p>{quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentOnChange}
        placeholder="give instructions"
      ></textarea>
      <p>Comment: {comment}</p>
      <select value={paymentType} onChange={handlePaymentTypeOnChange}>
        <option value="">Select On Optionn</option>
        <option value="VISA">VISA</option>
        <option value="Master Card">Master Card</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment Type: {paymentType}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          onChange={handleShippingOnChange}
          checked={shipping === 'Pick Up'}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === 'Delivery'}
          onChange={handleShippingOnChange}
        />
        Delivery
      </label>
      <p>Delivery Type: {shipping}</p>
    </div>
  )
}
export default MyComponent
