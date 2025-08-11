
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count,setCount] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<string>(''); 
  const [message, setMessage] = useState<string>(''); 
  const [gameOver, setGameOver] = useState<boolean>(false); 

  
  const handleGuess = () => {
    const userGuess = parseInt(guess);
    

    setCount(count + 1); 

    if (userGuess === randomNumber) {
      setMessage(`Correct! You have guessed ${userGuess}.`);
      {resetGame}; 
    } else if (userGuess < randomNumber) {
      setMessage(`Too low!`);
    } else if (userGuess > randomNumber) {
      setMessage(`Too high!`);
    }
  };

  
  const resetGame = () => {
    setCount(0);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess The Number</Text>
      <Text style={styles.Info}>Guess a number between 1 and 100:</Text>

      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={setGuess}
      />

      <Button title="Guess" onPress={handleGuess} />

       <Text style={styles.message}>{message}</Text>
      
        <View>
          <Text style={styles.Guess}>Your Guesses: {count}</Text>
          <Button title="Play Again" onPress={resetGame} />
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  Info: {
    fontSize: 18,
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    width: '80%',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },

  Guess: {
    marginBottom: 20,
  },

  message: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
  },
});
