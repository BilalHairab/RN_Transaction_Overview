import {Text, View, SectionList, Pressable, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {currentOrderedTransactionsSelector} from '../state/actions/transactionsActions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, any>;
function TransactionsListScreen(props: Props) {
  const transactionsData = useSelector(currentOrderedTransactionsSelector);
  const [data, setData] = useState([]);

  const onPress = tx => {
    if (tx.status === 'DECLINED' || tx.status === 'CANCELLED') {
      props.navigation.navigate('ErrorScreen', {transaction: tx});
    } else if (tx.origin === 'IN_PERSON' || tx.origin === 'ATM_MACHINE') {
      props.navigation.navigate('TransactionDetail1', {transaction: tx});
    } else {
      props.navigation.navigate('TransactionDetail2', {transaction: tx});
    }
  };
  useEffect(() => {
    const tempData = [];
    transactionsData?.forEach((value, key) => {
      tempData.push({
        title: key,
        data: value,
      });
    });
    tempData.sort((a, b) => {
      if (new Date(a.title).getTime() < new Date(b.title).getTime()) {
        return 1;
      }
      if (new Date(a.title).getTime() > new Date(b.title).getTime()) {
        return -1;
      }
      return 0;
    });
    setData(tempData);
  }, [transactionsData]);

  const renderSectionHeader = ({section}) => (
    <View
      style={{
        paddingTop: 20,
        paddingBottom: 0,
        paddingStart: 0,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 15,
        }}>
        {section.title}
      </Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => onPress(item)}
      style={({pressed}) => [
        {
          backgroundColor: 'rgba(38,128,235,.33)',
        },
        styles.container,
      ]}>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.mainText}>Transaction {item.status}</Text>
            <Text style={{color: '#949494', fontSize: 10}}>
              {`The transaction ${item.objectId} has been ${item.status} from ${item.details.origin}.`}
            </Text>
            <Text style={{textAlign: 'right'}}>
              {item.timestamp.split('T')[1]}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  return data.length > 0 ? (
    <SectionList
      style={{margin: 10}}
      sections={data}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  ) : (
    <Text>{'Loading'}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#1A80C0',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 9,
    marginVertical: 5,
  },
  mainText: {
    fontSize: 22,
  },
});

export default TransactionsListScreen;
