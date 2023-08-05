import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {videoCategories} from '../../../../utils/videoCategories';

interface SelectProps {
  category: string;
  onSelectCategory: (category: string) => void;
  disabled: boolean;
}

const SelectForm = ({category, onSelectCategory, disabled}: SelectProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const renderCategoryOption = ({item}: any) => (
    <TouchableOpacity
      style={styles.optionItem}
      disabled={disabled}
      onPress={() => {
        onSelectCategory(item.value); // Atualiza a categoria selecionada no componente pai
        setModalVisible(false);
      }}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.select}>
          {category || 'Selecione uma categoria'}
        </Text>
        <Image source={require('../../../../assets/img/Arrow.png')} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              style={{width: '100%'}}
              data={videoCategories}
              renderItem={renderCategoryOption}
              keyExtractor={item => item.value}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SelectForm;

const styles = StyleSheet.create({
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
    top: 35,
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
});
