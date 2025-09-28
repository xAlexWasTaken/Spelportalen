import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ addFavorite, removeFavorite, favoriter }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');



    useEffect(() => {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        fetch(`https://newsapi.org/v2/everything?q=gaming&apiKey=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksfel: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Laddar artiklar...</div>;
    if (error) return <div>Något gick fel: {error.message}</div>;

    // Filtrera artiklar baserat på vad som söks
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="HomePage">
            <header id="title">
                <h2>Spelnyheter</h2>
            </header>

            <div className="sok-container">
                <input
                    type="text"
                    placeholder="Sök artiklar..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <section className="artiklar">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map(article => {
                        const isFavorited = favoriter.some(fav => fav.url === article.url);
                        return (
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
                                {isFavorited ? (
                                    <button
                                        onClick={() => removeFavorite(article.url)}
                                        className="favorite-button"
                                    >
                                        Ta bort från favorit
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => addFavorite(article)}
                                        className="favorite-button"
                                    >
                                        Favorit ❤️
                                    </button>
                                )}
                            </article>
                        );
                    })
                ) : (
                    <p>Inga artiklar hittades.</p>
                )}
            </section>
        </div>
    );
}

export default HomePage;
