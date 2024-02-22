import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { getBooks } from '../services/BookService';
import Book from '../components/Book';
import { StatusBar } from 'expo-status-bar';

const BookList = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  function renderBooks({ item: book }) {
    return (
      <Book
        {...book}
        onPress={() => {
          navigation.navigate('BookDetails', { bookId: book.id });
        }}
      />
    );
  }

  function handleSearch(query) {
    setSearchQuery(query);
  }

  const filteredBooks = books.filter((user) => {
    return searchQuery != ' ' ? user && user.name && user.name.toLowerCase().includes(searchQuery) :books ;
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search books"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        style={styles.bookList}
        contentContainerStyle={styles.bookListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={filteredBooks}
        renderItem={renderBooks}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
  bookList: {
    backgroundColor: '#eeeeee',
  },
  bookListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default BookList;
