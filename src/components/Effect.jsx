import React, { useState, useEffect } from 'react';

function Effect() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const url = 'https://dragonball-api.com/api/characters/1';
        const response = await fetch(url);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
    fetchApi();
  }, []);

  return (
    <div className='effect'>
      {character ? (
        <>
          <img src={character.image} alt="" />
          <h2>Personaje: {character.name}</h2>
          <p>Descripción: {character.description}</p>
        </>
      ) : (
        <p>Cargando datos del personaje...</p> // Mensaje mientras se cargan los datos
      )}
    </div>
  );
}

export default Effect;
