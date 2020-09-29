import React, { useState, useEffect } from 'react'

export default function ItemsList ({ getItems }) {

  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('render')
    const newItems = getItems()
    setItems(newItems)
  }, [getItems])

  return (
    <ul>
      {items.map((_, i) => <li>Элемент: {i + 1}</li>)}
    </ul>
  )
}
