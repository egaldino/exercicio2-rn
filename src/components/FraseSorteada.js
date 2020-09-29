import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import {gerarNumeroAleatorio} from '../utils/numerosUtils';

const frases = [
  'No pain, no gain',
  'Tive um sonho lindo: sonhei que acordava, acordei, tava dormindo',
  'Tentei fugir de mim, mas onde eu ia, eu estava',
  'Em terra de cego quem tem um olho é caolho',
  'em terra de saci todo chute é voadora',
];

const FraseSorteada = () => {
  const [fraseSorteada, setFraseSorteada] = useState('');

  const escolheFraseAleatoria = () => {
    setFraseSorteada(frases[gerarNumeroAleatorio(frases.length)]);
  };

  return (
    <>
      <Text>{fraseSorteada}</Text>
      <Button title="Sortear" onPress={() => escolheFraseAleatoria()} />
    </>
  );
};

export default FraseSorteada;
