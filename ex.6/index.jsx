import React from 'react'
import ReactDOM from 'react-dom'
import Member from './member'
import Family from './family'

ReactDOM.render(
    <Family lastName='Ribeiro'>
        <Member name='Leonado'/>
    </Family>
, document.getElementById('app'))