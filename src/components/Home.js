import React from 'react';
// import FeaturedPosts from './FeaturedPosts';
import { useGetPostsQuery } from '../store/postsSlice';
import { useSelector } from "react-redux";
import { selectPostIds, selectAllPosts } from "../store/postsSlice";
import PostCard from './PostCard';
import PostWidget from './PostWidget';
import Categories from './Categories';

const Home = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery();

  const postIds = useSelector(selectPostIds);
  const allPosts = useSelector(selectAllPosts);

  let postCardContent;
  let postWidgetContent;
  let categoriesContent;

  if(isLoading) {
    postCardContent = <p>Loading...</p>
    postWidgetContent = <p>Loading...</p>
  }
  if(isError) {
    console.log(error);
  }
  if(isSuccess) {
    postCardContent = postIds.map((postId, index) => (
      <PostCard key={index} postId={postId} />
    ))
    
    const recentPosts = allPosts.slice(0, 4);
    postWidgetContent = <PostWidget recentPosts={recentPosts} />
    
    // Category
    let categories = [];

    allPosts.forEach((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });

    categoriesContent = <Categories categories={categories} /> 
  }


  return (
    <div className="container mx-auto px-10 mb-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {postCardContent}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-24">
            {postWidgetContent}
            {categoriesContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
