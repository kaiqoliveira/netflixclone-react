import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {

    let firstDate = new Date (item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 200){
        description = description.substring(0,200)+'...'
    }

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
          <div className="featured__vertical">
              <div className="featured__horizontal">
                  <div className="featured__name">{item.original_name}</div>
                  <div className="featured__info">
                      <div className="featured__points">{item.vote_average} pontos</div>
                      <div className="featured__year">{firstDate.getFullYear()}</div>
                      <div className="featured__seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>
                  </div>
                  <div className="featured__description">{description}</div>
                  <div className="featured__buttons">
                    <a className="featured__watchbutton" href={`/watch/${item.id}`}>▶Assistir</a>
                    <a className="featured__mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                  </div>
                  <div className="featured__genres"><storng>Gêneros: </storng>{genres.join(', ')}</div>
              </div>
          </div>
        </section>
    );
}