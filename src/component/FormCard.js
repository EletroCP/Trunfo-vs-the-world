import React from 'react';
import '../styles/FormCard.css';
import pointsballoon from '../images/pointBalloon.png';

function FormCard() {
  return (
    <form className="grid-container">
      <div className="grid-1">
        <label className="has-trunfo-label">
          Super Trunfo??
          <h2 className="has-trunfo">
            YES
          </h2>
        </label>
        <span>
          <h3 className="remaining-points">
            Pontos restantes:
          </h3>
          <img className="balloon-points" src={pointsballoon} alt="balloon-ponts"></img>
          <h3 className="points">240</h3>
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
          />
        </label>
      </div>
      <div className="grid-3">
        <label>
          Raridade:
          {' '}
          <select >
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
            placeholder="Atributo 1"
          />
        </label>
        <label className="atributes-label">
          Badass:
          <input
            className="input-attribute"
            id="input-attribute-2"
            type="number"
            placeholder="Atributo 2"
          />
        </label>
        <label className="atributes-label">
          Power:
          <input
            className="input-attribute"
            id="input-attribute-3"
            type="number"
            placeholder="Atributo 3"
          />
        </label>
      </div>
      <div className="grid-5">
        <img src="" alt="card"></img>
      </div>
      <div className="grid-6">
        <p className="description-title">Descrição:</p>  
        <textarea
          id="card-description-input"
        />
      </div>
      <input
        id="add-card"
        type="button"
        value="Adicionar"
      />
    </form>
  );
}

export default FormCard;