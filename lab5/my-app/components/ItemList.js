import React, { useState, useCallback } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl, TextInput 
} from 'react-native';

const initialItems = [
  { id: '1', name: 'Item 1', price: 10 },
  { id: '2', name: 'Item 2', price: 20 },
  { id: '3', name: 'Item 3', price: 30 },
  { id: '4', name: 'Item 4', price: 40 },
  { id: '5', name: 'Item 5', price: 50 },
  { id: '6', name: 'Item 6', price: 60 },
  { id: '7', name: 'Item 7', price: 70 },
  { id: '8', name: 'Item 8', price: 80 },
  { id: '9', name: 'Item 9', price: 90 },
  { id: '10', name: 'Item 10', price: 100 },
];

const ItemList = () => {
  const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPrice, setFilterPrice] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // 📌 Функция удаления элемента
  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // 📌 Функция сортировки
  const sortByName = () => {
    setItems((prevItems) => [...prevItems].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortByPrice = () => {
    setItems((prevItems) => [...prevItems].sort((a, b) => a.price - b.price));
  };

  // 📌 Фильтр по цене > 50 (теперь включается/выключается)
  const togglePriceFilter = () => {
    setFilterPrice(!filterPrice);
  };

  // 📌 Фильтрация данных перед выводом (поиск + фильтр цены)
  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) // Поиск по названию
    .filter(item => (filterPrice ? item.price > 50 : true)); // Фильтр по цене

  // 📌 Pull to Refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(initialItems); // Обновляем список (например, загружаем заново)
      setRefreshing(false);
    }, 1500);
  }, []);

  // 📌 Lazy Loading (подгрузка новых элементов)
  const loadMoreItems = () => {
    const newItems = [
      { id: Math.random().toString(), name: `Item ${items.length + 1}`, price: Math.floor(Math.random() * 100) }
    ];
    setItems([...items, ...newItems]);
  };

  // 📌 Отображение элементов списка
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      
      {/* 📌 Поле ввода для поиска */}
      <TextInput
        style={styles.searchInput}
        placeholder="Поиск..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* 📌 Кнопки сортировки и фильтрации */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={sortByName} style={styles.button}><Text>Сортировать A-Z</Text></TouchableOpacity>
        <TouchableOpacity onPress={sortByPrice} style={styles.button}><Text>По цене ↑</Text></TouchableOpacity>
        <TouchableOpacity onPress={togglePriceFilter} style={[styles.button, filterPrice && styles.activeButton]}>
          <Text>Цена > 50</Text>
        </TouchableOpacity>
      </View>

      {/* 📌 FlatList с pull-to-refresh и ленивой загрузкой */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        onEndReached={loadMoreItems} 
        onEndReachedThreshold={0.3} // Загружает новые элементы при достижении 30% от конца списка
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#90ee90', // Зеленый цвет активного фильтра
  },
});

export default ItemList;
