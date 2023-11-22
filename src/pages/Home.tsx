import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import move_data from './data.json';
import { Card, MenuItem, Paper, Select, Stack, TextField, styled } from '@mui/material';
import React from 'react';

interface moveData {
  [key: string]: {
    UF_value: string | null,
    UF_color: string,
    UFR_value: string | null,
    UFR_color: string,
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
  let UF_color = moves[key_move].UF_color;
  let UFR_color = moves[key_move].UFR_color;
  let UF_font_color = (UF_color === '#FFFF00' || UF_color == '#FFFFFF') ? 'black':'white';
  let UFR_font_color = (UFR_color === '#FFFF00' || UFR_color == '#FFFFFF') ? 'black':'white';



  const parseUFMove = () => {
    let m_test = moves[key_move].UF_value;
    if (m_test !== null) return 'UF: '+m_test;
    else return 'UF: No move';
  }

  const parseUFRMove = () => {
    let m_test = moves[key_move].UFR_value;
    if (m_test !== null) return 'UFR: '+m_test;
    else return 'UFR: No move';
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
            height: '100vw',
            backgroundColor: 'var(--ion-color-light)',
            borderRadius: '5%',

          }}>
            <div className='controls'>
              <Stack direction={'row'} spacing={5}>
                <ColorTextField
                  select
                  value={row}
                  label="First target"
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
                  label="Second target"
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
                  backgroundColor: UF_color,
                  width: '50vw',
                  height: '20vw',
                  color: UF_font_color,
                  fontWeight: 'bold',
                  fontSize: '1em',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  textAlign: 'center',
                  margin: 'auto',
                  marginTop: '5vh',
                  borderRadius: '5%',
                }}>
                {parseUFMove()}
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: UFR_color,
                  width: '50vw',
                  height: '20vw',
                  color: UFR_font_color,
                  fontWeight: 'bold',
                  fontSize: '1em',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  textAlign: 'center',
                  margin: 'auto',
                  marginTop: '5vh',
                  borderRadius: '5%',
                }}>
                {parseUFRMove()}
              </Paper>
            </div>
          </Card>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
