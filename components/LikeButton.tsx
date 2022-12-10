import React, {useState, useEffect} from 'react'
import {MdFavorite} from 'react-icons/md';
import useAuthStore from '../store/authStore';

interface IProps {
    handleLike: () => void;
    handleDislike: () => void;
    likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDislike } : IProps) => {

    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const {userProfile} : any = useAuthStore();
    // check if the likes array contains the like from the current user
    let filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

    useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes])

  return (
    <div className={`flex gap-6`}>
        <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
        {alreadyLiked ? (
            <div className='bg-primary rounded-full p-2 md:p-4 text-[#F51997]' onClick={handleDislike} >
                <MdFavorite className='text-sm' />
            </div>
        ) : (
            <div className='bg-primary rounded-full p-2 md:p-4 ' onClick={handleLike} >
                <MdFavorite className='text-sm' />
            </div>
        )}
        <p className='text-md font-semibold '>{likes?.length || 0}</p>
        </div>
  </div>
  )
}

export default LikeButton