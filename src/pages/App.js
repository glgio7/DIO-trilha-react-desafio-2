
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles';
import Header from '../components/Header';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser) {
      const { avatar_url, name, bio, login, message } = newUser;
      setCurrentUser({ avatar_url, name, bio, login, message });
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if (newRepos) {
      setRepos(newRepos);
    }

  }

  const handleRemoveRepo = (id) => {
    const newList = repos.filter(repo => repo.id !== id)
    setRepos(newList);
  }

  return (
    <>

      <Container>
        <Header />
        <div className='search-box'>
          <Input
            name='usuario'
            value={user}
            onChange={event => setUser(event.target.value)}
            placeholder="@username"
          />
          <Button onClick={handleGetData}>Buscar</Button>
        </div>
        {currentUser?.name && currentUser.message !== "Not Found" ? (
          <div className='profile-box'>
            <div className='profile-box__logo'>
              <img src={currentUser.avatar_url} className="logo" alt="nome de perfil" />
            </div>
            <h3 className='profile-box__name'>{currentUser.name} @
              <span className='profile-box__login'>{currentUser.login}</span>
              <p>{currentUser.bio}</p>
            </h3>
            <hr />
          </div>
        ) : currentUser?.message === "Not Found" ? (<p>Usuário não encontrado</p>) : <p>Informe um nome de usuário</p>}
        {repos?.length && currentUser.message !== "Not Found" ? (
          <div className='repositorios-box'>
            <h4>Repositórios</h4>
            {repos.map((repo, index) => (
              <ItemRepo key={index} title={repo.name} description={repo.description} repo={repo} onClick={() => handleRemoveRepo(repo.id)} />
            ))}
          </div>
        ) : <div></div>}
      </Container>
    </>
  );
}


export default App;