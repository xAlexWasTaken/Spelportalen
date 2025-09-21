import React from 'react';

function Favorites({ favoriter }) {
  return (
    <div>
      <header id="favTitle">
        <h2>Dina Favoriter</h2>
      </header>
      <section className="artiklar">
        {favoriter.length > 0 ? (
          favoriter.map(article => (
            <article key={article.url} className="artikel">
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  className="artikel-image" 
                />
              )}
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more"
              >
                Läs mer
              </a>
            </article>
          ))
        ) : (
          <p>Inga favoritartiklar hittades.</p>
        )}
      </section>
    </div>
  );
}

export default Favorites;
