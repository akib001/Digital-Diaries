// import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';


const PostWidget = ({ recentPosts }) => {
  // const [relatedPosts, setRelatedPosts] = useState([]);

  // useEffect(() => {
  //   if (slug) {
  //     getSimilarPosts(categories, slug).then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   } else {
  //     getRecentPosts().then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   }
  // }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Recent Posts'}</h3>
      {recentPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.featuredImageUrl}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link to={`/post/${post.id}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
