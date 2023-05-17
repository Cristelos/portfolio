

export const ArticleList = ({ articles }) => {
   

    
  return (
    <>
        <div className='article-list'>
            {articles.map(article => (
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
        </div>
        
    </>
  )
}
