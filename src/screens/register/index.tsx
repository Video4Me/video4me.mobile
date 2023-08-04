import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';

import Form from './components/Form/Form';
import InputForm from './components/Form/Input';
import SelectForm from './components/Form/Select';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Register = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const [showSecondForm, setShowSecondForm] = useState(false);
  const [firstFormDisabled, setFirstFormDisabled] = useState(false);
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const areFieldsFilled = () => {
    return videoUrl.trim() !== '' && selectedCategory !== '';
  };

  const handlePlusButtonPress = () => {
    if (areFieldsFilled()) {
      setShowSecondForm(true);
      setFirstFormDisabled(true);
      setIsSaveButtonEnabled(true);
    } else {
      Alert.alert('Preencha todos os campos!');
    }
  };

  const handleTrashButtonPress = () => {
    setVideoUrl('');
    setSelectedCategory('');
    setShowSecondForm(false);
    setFirstFormDisabled(false);
    setIsSaveButtonEnabled(false);
  };

  const handleSave = () => {
    if (areFieldsFilled()) {
      setVideoUrl('');
      setSelectedCategory('');
      setShowSecondForm(false);
      setFirstFormDisabled(false);
      setIsSaveButtonEnabled(false);

      navigation.navigate('Home');
    } else {
      Alert.alert('Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>ADICIONAR CANAL</Text>

        <View>
          <Form>
            <InputForm
              placeholder="Insira a URL do Youtube"
              onChange={text => setVideoUrl(text)}
              value={videoUrl}
              disabled={firstFormDisabled}
            />
            <SelectForm
              category={selectedCategory}
              onSelectCategory={category => setSelectedCategory(category)}
              disabled={firstFormDisabled}
            />
            <TouchableOpacity onPress={handlePlusButtonPress}>
              <Image
                style={styles.plus}
                source={require('../../assets/img/plus.png')}
              />
            </TouchableOpacity>
          </Form>
          {showSecondForm && (
            <Form>
              <InputForm
                placeholder="URL do Vídeo"
                value={videoUrl}
                disabled={false}
              />
              <InputForm
                placeholder="Categoria do Vídeo"
                value={selectedCategory}
                disabled={false}
              />
              <TouchableOpacity onPress={handleTrashButtonPress}>
                <Image
                  style={styles.trash}
                  source={require('../../assets/img/trash.png')}
                />
              </TouchableOpacity>
            </Form>
          )}
          <TouchableOpacity
            style={[
              styles.button,
              !isSaveButtonEnabled && styles.disabledButton,
            ]}
            onPress={handleSave}
            disabled={!isSaveButtonEnabled}>
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
  disabledButton: {
    opacity: 0.5,
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
