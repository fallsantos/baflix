import React from 'react'

import './styles.css'

export default function ButtonLink ({ _style, _label, _link , children}){
  return(
    <a href={_link} className={_style}>
      {children}
    </a>
  )
}