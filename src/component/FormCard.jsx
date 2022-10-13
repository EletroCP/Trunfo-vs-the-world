import React, { useContext, useEffect, useState } from 'react';
import '../styles/FormCard.css';
import pointsballoon from '../images/pointBalloon.png';
import { Context } from '../context/context';

function FormCard() {
  const [newDeck, setNewDeck] = useState([]);

  const {
    hasTrunfo, setHasTrunfo,
    points, setPoints,
    name, setName,
    rarity, setRarity,
    music, setMusic,
    badass, setBadass,
    power, setPower,
    description, setDescription,
    cardImage, setCardImage, 
  } = useContext(Context);

  useEffect(() => {
    const changePoints = () => {
      setPoints(240 - music - badass - power);
    };
    changePoints();
  }, [music, badass, power]);

  const submitCard = () => {
    const newCard = {
      name,
      rarity,
      hasTrunfo,
      attribures: {
        music,
        badass,
        power
      },
      description,
      cardImage,
    };
    setNewDeck((prevState) => [...prevState, newCard]);
  };

  return (
    <form className="grid-container">
      <div className="grid-1">
        <label
          className="has-trunfo-label"
          onClick={ () => setHasTrunfo((prevState) => !prevState)}  
        >
          Super Trunfo??
          <h2 className="has-trunfo">
            { hasTrunfo ? 'NO' : 'YES' }
          </h2>
        </label>
        <span>
          <h3 className="remaining-points">
            Pontos restantes:
          </h3>
          <img className="balloon-points" src={pointsballoon} alt="balloon-ponts"></img>
          <h3 className="points">{ points }</h3>
        </span>
      </div>
      <div className="grid-2">
        <label className="card-name-label">
          Nome:
          {' '}
          <input
            type="text"
            id="card-name-input"
            placeholder="Scoot Pilgrim"
            onChange={ ({ target }) => setName(target.value)}
          />
        </label>
      </div>
      <div className="grid-3">
        <label>
          Raridade:
          {' '}
          <select
            onChange={ ({ target }) => setRarity(target.value)}
          >
            <option>Comum</option>
            <option>Incomum</option>
            <option>Raro</option>
          </select>
        </label>
      </div>
      <div className="grid-4">
        <label className="atributes-label">
          Music:
          <input
            className="input-attribute"
            id="input-attribute-1"
            type="number"
            placeholder="0"
            min="0"
            onChange={ ({ target }) => {
              setMusic(Number(target.value));
            }}
          />
        </label>
        <label className="atributes-label">
          Badass:
          <input
            className="input-attribute"
            id="input-attribute-2"
            type="number"
            placeholder="0"
            min="0"
            onChange={ ({ target }) => {
              setBadass(Number(target.value));
            }}
          />
        </label>
        <label className="atributes-label">
          Power:
          <input
            className="input-attribute"
            id="input-attribute-3"
            type="number"
            placeholder="0"
            min="0"
            onChange={ ({ target }) => setPower(Number(target.value)) }
          />
        </label>
      </div>
      <div
        className="grid-5"
        style={ { backgroundImage: `url(${ cardImage })` } }
      >
      </div>
      <div className="grid-6">
        <p className="description-title">Descrição:</p>  
        <input
          type="text"
          id="card-description-input"
          placeholder="Eu te arvores"
          onChange={ ({ target }) => setDescription(target.value)}
        />
      </div>
      <div className="grid-7">
        <p className="image-url">Link da imagem:</p>  
        <input
          type="text"
          id="card-image-input"
          placeholder="link"
          onChange={ ({ target }) => setCardImage(target.value)}
        />
      </div>
      <input
        id="add-card"
        type="button"
        value="Adicionar"
        onClick={ () => submitCard() }
      />
    </form>
  );
}

export default FormCard;