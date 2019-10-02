import React from 'react';
import PropTypes from 'prop-types';

const Noticias = ({noticia}) => {
    const {urlToImage, url, title, description} = noticia;

    const imagen = (urlToImage) ? 
        <img src={ urlToImage } alt="Imagen" className="card-img-top" style={{maxHeight: 200 + "px"}}/>
    : null;
    return (
        <div className="card m-2 shadow">
            { imagen }
            <div className="card-body">
                <h4 className="font-weight-bold">{ title }</h4>
                <p>{ description }</p>
            </div>
            <div className="card-footer">
                <a className="btn btn-info btn-block" href={ url } target="_blank" rel="noopener noreferrer">Ver más</a>
            </div>
        </div>
    );
};
// descripbir tipo de Props
// describe props types
Noticias.propTypes = {
    noticia : PropTypes.object.isRequired
}
export default Noticias;