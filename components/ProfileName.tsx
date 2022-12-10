import React from 'react'
import Image from 'next/image'
import { GoVerified } from 'react-icons/go'
import Link from 'next/link'
import {IUser} from '../types'

const ProfileName = ({user} : {user : IUser}) => {
  return (
    <div>
         <Link href={`/profile/${user._id}`}>
            <div className='flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded items-center'>
                <div className='w-10 h-10'>
                    <Image
                        src={user.image}
                        width={40}
                        height={40}
                        className='rounded-4'
                        alt='user profile'
                    />
                </div>
                <div className='hidden xl:block'>
                    <p className='flex gap-1 items-center text-md font-bold text-primary lowercase'>
                        {user.userName.replaceAll(' ','')}
                        <GoVerified className='text-blue-400' />
                    </p>
                    <p className='capitalize text-gray-400 text-xs'>
                        {user.userName}
                    </p>
                </div>
            </div>                                    
        </Link>
    </div>
  )
}

export default ProfileName