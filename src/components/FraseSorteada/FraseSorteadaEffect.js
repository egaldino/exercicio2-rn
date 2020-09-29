import React, {useState, useEffect} from 'react';
import {Text, Button, View} from 'react-native';
import {gerarNumeroAleatorio} from '../../utils/numerosUtils';
import styles1 from './style';

const frases = [
  'No pain, no gain',
  'Tive um sonho lindo: sonhei que acordava, acordei, tava dormindo',
  'Tentei fugir de mim, mas onde eu ia, eu estava',
  'Em terra de cego quem tem um olho é caolho',
  'em terra de saci todo chute é voadora',
];

const FraseSorteada = () => {
  const [fraseExibida, setFraseExibida] = useState();
  const [indiceSorteado, setIndiceSorteado] = useState();

  const escolheFraseAleatoria = () => {
    setIndiceSorteado(gerarNumeroAleatorio(frases.length));
  };

  useEffect(() => {
    setFraseExibida(frases[indiceSorteado]);
  }, [indiceSorteado]);

  return (
    <View style={styles1.container}>
      <Text
        style={{
          fontFamily: 'Bangers-Regular',
        }}>
        {fraseExibida ? fraseExibida : 'Clique no botão'}
      </Text>
      <Button title="Sortear" onPress={() => escolheFraseAleatoria()} />
    </View>
  );
};

export default FraseSorteada;
