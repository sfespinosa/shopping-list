import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const LineItem = ({index, item, handleCompletion, increase, decrease}) => {
    return (
        <div className='item-container'>
            <div className='item-name'>
            {item.completed ? (
                <div onClick={() => handleCompletion(index)}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className='completed'>{item.name}</span>
                </div >
            ) : (
                <div onClick={() => handleCompletion(index)}>
                    <FontAwesomeIcon icon={faCircle} onClick={() => handleCompletion(index)}/>
                    <span>{item.name}</span>
                </div>
            )}
            </div>
            <div className='quantity'>
            <button>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => decrease(index)}/>
            </button>
            <span> {item.quantity} </span>
            <button>
                <FontAwesomeIcon icon={faChevronRight} onClick={() => increase(index)}/>
            </button>
            </div>
        </div>
    )
}

export default LineItem