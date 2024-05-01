import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    marginTop: 10,
  },
  box: {
    alignItems: 'center',
  },
  label: {
    color: 'black',
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  resultText: {
    color: 'black',
    fontSize: 18,
  },
  modalContainer: {
    backgroundColor: '#F6F6F6',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalCloseText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default styles;
