import React from 'react'

type Props<T>={
    items:T[],
    renderItem:(item :T)=>React.ReactNode
}

const GenericList = <T,>({items,renderItem}:Props<T>) => {
  return (
    <div>

      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
      
    </div>
  )
}

export default GenericList
