import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const LineItem = ({item}) => {
    return (
        <div className='item-container'>
            <div className='item-name'>
            {/* HINT: replace false with a boolean indicating the item has been completed or not */}
            {item.completed ? (
                <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className='completed'>{item.name}</span>
                </>
            ) : (
                <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.name}</span>
                </>
            )}
            </div>
            <div className='quantity'>
            <button>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span> {item.quantity} </span>
            <button>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            </div>
        </div>
    )
}

export default LineItem