import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import move_data from './data.json';
import { Card, MenuItem, Paper, Select, Stack, TextField, styled } from '@mui/material';
import React from 'react';

interface moveData {
  [key: string]: {
    value: string | null,
    color: string,
  }

}

const ColorTextField = styled(TextField)({
  '& label': {
    color: 'var(--ion-color-light-contrast)',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--ion-color-light-contrast)',
  },
  '& .MuiOutlinedInput-root': {
    color: 'var(--ion-color-light-contrast)',
  },
})


const keys = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'];

const Home: React.FC = () => {

  let moves: moveData = move_data;

  const [row, setRow] = React.useState('A');
  const [col, setCol] = React.useState('A');

  let key_move = row + col
  let color = moves[key_move].color;
  console.log('Moves', moves);
  console.log('Color: ', color)


  const parseMove = () => {
    let m_test = moves[key_move].value;
    if (m_test !== null) return m_test;
    else return 'No move';
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cubik's</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='container'>
          <Card sx={{
            margin: 'auto',
            marginTop: '10vh',
            width: '80vw',
            height: '80vw',
            backgroundColor: 'var(--ion-color-light)',
            borderRadius: '5%',

          }}>
            <div className='controls'>
              <Stack direction={'row'} spacing={5}>
                <ColorTextField
                  select
                  value={row}
                  label="Select Row"
                  sx={{
                    width: '30vw',
                  }}
                  margin='normal'
                  onChange={(e) => setRow(e.target.value)}
                >
                  {keys.map((letter: string, index: number) => (
                    <MenuItem key={index} value={letter}>{letter}</MenuItem>
                  ))}
                </ColorTextField>
                <ColorTextField
                  select
                  value={col}
                  label="Select Column"
                  sx={{
                    width: '30vw',
                  }}
                  margin='normal'
                  onChange={(e) => setCol(e.target.value)}
                >
                  {keys.map((letter: string, index: number) => (
                    <MenuItem key={index} value={letter}>{letter}</MenuItem>
                  ))}
                </ColorTextField>
              </Stack>
            </div>
            <div className='result'>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: color,
                  width: '50vw',
                  height: '20vw',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5em',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  textAlign: 'center',
                  margin: 'auto',
                  marginTop: '5vh',
                  borderRadius: '5%',
                }}>
                {parseMove()}
              </Paper>
            </div>
          </Card>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
