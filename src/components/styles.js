import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  questionaireContainer: {
    flex: 1,
    flexGrow: 1
  },

  questionContainer: {
    padding: 10,
    justifyContent: "space-between" 
  },
  
  titleText: {
    fontWeight: 'bold',
  },

  ratingContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  
  rating: {
    alignContent: 'center',
    marginTop: 5,
    marginBottom: 5 
  },

  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  checkBoxText: {
    fontFamily: "Courier New",
  },
  
  baseText: {
    fontFamily: 'Cochin',
    alignContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5 
  },
  
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});

export default styles;