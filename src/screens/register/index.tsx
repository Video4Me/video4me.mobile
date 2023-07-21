import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';

const Register = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {};

  const videoCategories = [
    {label: 'Arte', value: 'arte'},
    {label: 'Decoração', value: 'decoracao'},
    {label: 'Entretenimento', value: 'entretenimento'},
    {label: 'Filmes', value: 'filmes'},
    {label: 'Moda', value: 'moda'},
    {label: 'Receitas', value: 'receitas'},
    {label: 'Viagens', value: 'viagens'},
    {label: 'Estudos', value: 'estudos'},
    {label: 'Esportes', value: 'esportes'},
    {label: 'Comédia', value: 'comedia'},
    {label: 'Tecnologia', value: 'tecnologia'},
  ];

  const renderCategoryOption = ({item}: any) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => {
        setSelectedCategory(item.value);
        setModalVisible(false);
      }}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>ADICIONAR CANAL</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Insira a URL do Youtube"
          />
          <TouchableOpacity
            style={styles.input}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.select}>
              {selectedCategory || 'Selecione uma categoria'}
            </Text>
            <Image source={require('../../assets/img/Arrow.png')} />
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <TouchableOpacity
              style={styles.modalContainer}
              activeOpacity={1} // Evitar toque acidental fora do Modal
              onPress={() => setModalVisible(false)}>
              <View style={styles.modalContent}>
                <FlatList
                  style={{width: '100%'}} // Ajuste da largura
                  data={videoCategories}
                  renderItem={renderCategoryOption}
                  keyExtractor={item => item.value}
                />
              </View>
            </TouchableOpacity>
          </Modal>
          <Image
            style={styles.plus}
            source={require('../../assets/img/plus.png')}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
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
  },
  form: {
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 4,
    padding: 4,
    gap: 10,
    position: 'relative',
    marginBottom: 120,
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
  },
  textButton: {
    fontSize: 14,
    color: '#fff',
  },
  input: {
    backgroundColor: '#66BAF20D',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#66BAF2',
    color: '#333333',
    fontSize: 14,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  select: {
    fontSize: 16,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#C2DCEC',
    borderRadius: 4,
    width: '85%',
    height: '45%',
    overflow: 'hidden',
    color: '#000',
  },
  optionItem: {
    padding: 20,
    backgroundColor: '#C2DCEC',
  },
  plus: {
    alignSelf: 'flex-end',
    marginVertical: 8,
  },
});
