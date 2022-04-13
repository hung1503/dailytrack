import React from 'react'
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Students</span>
        <div className='featuredContainer'>
          <span className='featuredFigure'>100 students</span>
        </div>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Teachers</span>
        <div className='featuredContainer'>
          <span className='featuredFigure'>15 teachers</span>
        </div>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Classes</span>
        <div className='featuredContainer'>
          <span className='featuredFigure'>5 classes</span>
        </div>
      </div>
    </div>
  )
}
