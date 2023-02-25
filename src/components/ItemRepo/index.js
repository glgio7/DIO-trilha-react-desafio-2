import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({title, description, repo, onClick}) {


  return (
    <ItemContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <button onClick={onClick}>Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
