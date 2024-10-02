import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo leve
  },
  input: {
    marginLeft: 500,
    marginRight: 500,
    marginBottom: 25,
    backgroundColor: '#fff', // Fundo branco para campos de entrada
  },
  button: {
    marginLeft: 600,
    marginRight: 600,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5, // Canto arredondado para botões
  },
  header: {
    backgroundColor: '#6200ae', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: '#ddd', // Cor de fundo para área de foto
  },
});

