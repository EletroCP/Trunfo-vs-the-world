import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [points, setPoints] = useState(210);
  const [name, setName] = useState('');
  const [rarity, setRarity] = useState('Comum');
  const [music, setMusic] = useState(0);
  const [badass, setBadass] = useState(0);
  const [power, setPower] = useState(0);
  const [cardImage, setCardImage] = useState('');
  const [description, setDescription] = useState('');

  const value = useMemo(() =>({
    hasTrunfo, setHasTrunfo,
    points, setPoints,
    name, setName,
    rarity, setRarity,
    music, setMusic,
    badass, setBadass,
    power, setPower,
    description, setDescription,
    cardImage, setCardImage,
  }), [ name, hasTrunfo, rarity, points, music, badass, power, description, cardImage ]);

  return (
    <Context.Provider
      value={ value }
    >
      { children }
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};