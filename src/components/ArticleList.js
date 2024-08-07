import React from 'react';
import Article from './Article';
import blogData from '../data/blog';

function ArticleList({ posts }) { 

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
         // minutesToRead={article.minutesToRead}
        />
      ))}
    </main>
  );
}

export default ArticleList;
