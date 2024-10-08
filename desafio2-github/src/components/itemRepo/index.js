import React from 'react';
import { ItemContainer } from './style';

function ItemRepo({repo, hadleRemoveRepo}) {

  const hadleRemove = () => {
    hadleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={hadleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver repositório</a> <br />
      <a href='#' rel='noreferrer' className='remover'>Remover</a>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;