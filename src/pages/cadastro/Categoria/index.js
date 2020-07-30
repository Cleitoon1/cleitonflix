import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
function CadastroVideo(props) {
    return (
        <PageDefault>
            <h1>Cadastro de Caterogira</h1>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;