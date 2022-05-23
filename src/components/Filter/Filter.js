import React from 'react'
import {Form} from 'react-bootstrap'
function Filter({filterData}) {
  return (
    <Form.Select className="mt-5" aria-label="Filter" onChange={(e) =>filterData(e.target.value)}>
            <option value="all">All</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="3">women's clothing</option>
            <option value="4">Men's clothing</option>

    </Form.Select>
  )
}

export default Filter