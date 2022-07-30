import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { selectPostById } from '../store/postsSlice';
import { useSelector } from 'react-redux';
import avatar from '../images/avatar.jpg';

const PostCard = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  const upvoteHandler = () => {
    console.log('upvote');
  };

  const downvoteHandler = () => {
    console.log('downvote');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 mt-5">
      {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.title}
            className="shadow-lg rounded-t-lg lg:rounded-lg"
            layout="fill"
            src={post.featuredImage.url}
          />
        </div> */}
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImageUrl}
          alt=""
          className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
        <Link to={`/post/${postId}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          {/* <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.profilePhotoUrl}
          /> */}
          <img
            className="w-10 h-10 rounded-full"
            src={
              post.author.profilePhotoUrl ? post.author.profilePhotoUrl : avatar
            }
            alt="Rounded avatar"
          ></img>
          <p className="inline align-middle font-bold text-gray-700 ml-2 text-lg">
            <Link to={`/post/${post.author.id}`}>{post.author.name}</Link>
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="flex flex-row justify-between mx-2">
        <div className="flex mt-2">
          <button type="button" className="flex " onClick={upvoteHandler}>
            {/* <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" />
            </svg> */}
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#2563eb"
                d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"
              />
            </svg>
            {/* <BiUpvote style={{ fontSize: '35px' }} type="solid" color="#2563eb" /> */}
            <span className="text-lg mx-2 text-center mt-1 text-blue-600 font-bold">
              20
            </span>
          </button>
          <button type="button" className="flex ml-2" onClick={downvoteHandler}>
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="red"
                d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z"
              />
            </svg>
            {/* <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z" />
            </svg> */}
            {/* <BiDownvote style={{ fontSize: '35px' }} /> */}
            <span className="text-lg mx-2 text-center mt-1">20</span>
          </button>
        </div>
        <Link to={`/post/${postId}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
