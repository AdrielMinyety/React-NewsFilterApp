import React from 'react';
import Noticias from './Noticias';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const ListaNoticias = ({noticias}) => (
    <div className="card-columns">
        {noticias.map(noticia =>
            <Noticias
                key={uuid()}
                noticia={noticia}
            />
        )}
    </div>
);
// descripbir tipo de Props
// describe props types
ListaNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}
export default ListaNoticias;