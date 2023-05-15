import React from 'react'
import {Row} from 'react-bootstrap'
import data from '../../data/data.json'
import Col from 'react-bootstrap/Col';
import { StoreItem } from './../StoreItem/StoreItem';


export const Store = () => {
  return<>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
        {data.map((item, index)=>(
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
      
        ))}
    </Row>
    </>
}
