import React from 'react';
import Tour from './Tour';
const Tours = ({tour, deletItem}) => {
  return <div>{tour.map(item => <Tour key={item.id} {...item} deletItem={deletItem}/>)}</div>;
};

export default Tours;
