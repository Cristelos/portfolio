import React, { useState } from 'react';

export const ArticleList = ({ articles }) => {
    
    const [expShown, setExpShown] = useState(6);

    const addMore = () => {
        setExpShown(expShown + 3)
    }
    const visibleArticles = articles.slice(0, expShown);
  return (
    <>
        <div className='article-list'>
            {visibleArticles.map(article => (
                <div className='article-conteiner' key={article.id}>
                    <div className='img-container'>
                        <a href={article.url} target="_blank" rel="noopener noreferrer"><img src={article.image} alt={article.title}/></a>
                    </div>
                    <div className='article-body'>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <div className='article-footer'>
                            <span>{article.date} · </span>
                            <span>{article.ReadingTime}</span>
                        </div>
                    </div>
                </div>
            ))}
            {expShown < articles.length && (
                    <button className='btn-seeMore' onClick={addMore}> Mostrar más </button>
                    )}
        </div>
        
    </>
  )
}
