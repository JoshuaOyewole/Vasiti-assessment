import React from 'react';
import underline from '../Assets/line.png'


export default function ExperienceBtn(props) {
    const {children, color} = props
  return (
    <div>
        <a href={children} className={color ? `experienceBtn ${color}`: 'experienceBtn'}>{children}</a>
            <img src={underline} alt="Underline style attach to Experience button"  className='underline_img'/>
    </div>
  )
}
