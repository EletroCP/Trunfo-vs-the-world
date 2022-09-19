import React from 'react';

function FormCard() {
  return (
    <form>
      <div id="form-header-container">
        <input
          type="checkbox"
        >
        </input>
        <span>
          <h3>
            Pontos restantes: 210
          </h3>
        </span>
      </div>
      <div id="form-name-container">
        <input 
          type="text"
          id="card-name-input"
          placeholder="Scoot Pilgrim"
        />
      </div>
      <div id="form-atributtes-container">
        <label>Atributos
          <input 
            id="input-attribute-1"
            type="number"
            placeholder="Atributo 1"
          />
          <input 
            id="input-attribute-2"
            type="number"
            placeholder="Atributo 2"
          />
          <input 
            id="input-attribute-3"
            type="number"
            placeholder="Atributo 3"
          />
        </label>
      </div>
      <div id="form-description-container">
        <label>
          Descrição:
          <textarea
            id="card-description-input"
          />
        </label>
        <select>
          <option>Comum</option>
          <option>Incomum</option>
          <option>Raro</option>
        </select>
      </div>
      <input
        type="button"
        value="Adicionar"
      />
    </form>
  );
}

export default FormCard;