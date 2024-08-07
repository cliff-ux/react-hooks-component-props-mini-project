import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const getReadingTimeEmoji = (minutes) => {
    if (minutes < 30) {
      return "☕️".repeat(Math.ceil(minutes / 5));
    } else {
      return "🍱".repeat(Math.ceil(minutes / 10));
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getReadingTimeEmoji(minutesToRead)} {minutesToRead} min read</p>
    </article>
  );
}

export default Article;
