import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';

import Form from './components/Form/Form';
import InputForm from './components/Form/Input';
import SelectForm from './components/Form/Select';

const Register = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videoUrl, setVIideoUrl] = useState('');

  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleSave = () => {};

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>ADICIONAR CANAL</Text>

        <View>
          <Form>
            <InputForm
              placeholder="Insira a URL do Youtube"
              onChange={text => setVIideoUrl(text)}
            />
            <SelectForm
              category={selectedCategory}
              onSelectCategory={category => setSelectedCategory(category)}
            />
            <TouchableOpacity
              onPress={() => setShowSecondForm(!showSecondForm)}>
              <Image
                style={styles.plus}
                source={require('../../assets/img/plus.png')}
              />
            </TouchableOpacity>
          </Form>
          {showSecondForm && (
            <Form>
              <InputForm placeholder="URL do Vídeo" value={videoUrl} />
              <InputForm
                placeholder="Categoria do Vídeo"
                value={selectedCategory}
              />
              <TouchableOpacity>
                <Image
                  style={styles.trash}
                  source={require('../../assets/img/trash.png')}
                />
              </TouchableOpacity>
            </Form>
          )}
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    paddingVertical: 10,
  },

  button: {
    backgroundColor: '#1D9BF0',
    width: 155,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: 100,
  },
  textButton: {
    fontSize: 14,
    color: '#fff',
  },

  plus: {
    alignSelf: 'flex-end',
    marginVertical: 8,
  },
  trash: {
    alignSelf: 'flex-end',
    marginVertical: 8,
    width: 40,
    height: 40,
  },
});
