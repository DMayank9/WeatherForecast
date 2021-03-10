import React, { useState } from 'react';

// Todo : Create an option for the user to select the interval at which the forecast needs to be done.
// Simple: once for a day for 5 days
// Detailed: Data for every 3 hours for 5 days
const SelectViewType = ({ viewRef }) => {
  const [viewType, setViewType] = useState('');
  return (
    <select ref={viewRef} value={viewType} onChange={(event)=>{setViewType(event.target.value)}}>
      <option value="simple">Simple</option>
      <option value="detailed">Detailed</option>
    </select>
  )
}

export default SelectViewType;
