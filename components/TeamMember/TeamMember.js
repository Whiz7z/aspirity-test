import Image from 'next/image'
import React from 'react'

const TeamMember = ({photo, full_name, position}) => {
  return (
    <div className='w-full flex items-center gap-[8px]'>
      <div className='w-[48px] h-[48px]'>
        <Image src={photo} alt={full_name} />
      </div>
      <div>
        <p className='label-white'>{full_name}</p>
        <p className='label-position'>{position}</p>
      </div>
    </div>
  )
}

export default TeamMember
