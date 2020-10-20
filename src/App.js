import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LineItem from './lineItem'

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({})

  const handleNewItem = (e) => {
    setNewItem({
      name: e.target.value, 
      quantity: 1, 
      completed: false
    })
  }

  const handleAddItem = (e) => {
    const newItems = [...items, newItem]
    setItems(newItems)
    let input = document.querySelector('input.add-item-input')
    input.value = ''
  }

  const renderLineItems = () => {
    return (
      items.map((item, idx) => {
        return <LineItem key={idx} index={idx} item={item} handleCompletion={handleCompletion} decrease={toggleDecrease} increase={toggleIncrease}/>
      })
    )
  }
  
  const handleCompletion = (key) => {
    const newItems = [...items]
    newItems[key] = {...newItems[key], 
      completed: !newItems[key].completed
    }
    setItems(newItems)
  }

  const toggleDecrease = key => {
    const newItems = [...items]
    if (newItems[key].quantity > 1) {
      newItems[key] = {...newItems[key], 
        quantity: newItems[key].quantity - 1
      }
    }
    setItems(newItems)
  }

  const toggleIncrease = key => {
    const newItems = [...items]
    newItems[key] = {...newItems[key], 
      quantity: newItems[key].quantity + 1
    }
    setItems(newItems)
  }

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input className='add-item-input' placeholder='Add an item...' onChange={handleNewItem}/>
					<FontAwesomeIcon icon={faPlus} onClick={handleAddItem}/>
				</div>
				<div className='item-list'>
          {renderLineItems()}
				</div>
				<div className='total'>Total: 6</div>
			</div>
		</div>
	);
};

export default App;