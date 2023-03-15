import React from 'react'
import "./SideBarHOC.css";

function SideBarHOC({child}) {
  return (
    <div className='side_bar_container'> 
    this is side  bar!
    {child}
    </div>
  )
}

export default SideBarHOC