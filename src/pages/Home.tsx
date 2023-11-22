import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import uf_data from './data_uf.json';
import ufr_data from './data_ufr.json';
import { Card, MenuItem, Paper, Select, Stack, TextField, styled } from '@mui/material';
import React from 'react';

interface ufData {
  [key: string]: {
    UF_value: string | null,
    UF_color: string,
  }

}

interface ufrData {
  [key: string]: {
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
const keys_ufr = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'];

const Home: React.FC = () => {

  let uf_moves: ufData = uf_data;
  let ufr_moves: ufrData = ufr_data;

  const [row_uf, setRowUf] = React.useState('A');
  const [col_uf, setColUf] = React.useState('A');
  const [row_ufr, setRowUfr] = React.useState('A');
  const [col_ufr, setColUfr] = React.useState('A');

  let key_move_uf = row_uf + col_uf
  let key_move_ufr = row_ufr + col_ufr;

  console.log('Key ufr: ', key_move_ufr);

  let UF_color = uf_moves[key_move_uf].UF_color;
  let UFR_color = ufr_moves[key_move_ufr].UFR_color;
  let UF_font_color = (UF_color === '#FFFF00' || UF_color == '#FFFFFF') ? 'black' : 'white';
  let UFR_font_color = (UFR_color === '#FFFF00' || UFR_color == '#FFFFFF') ? 'black' : 'white';



  const parseUFMove = () => {
    let m_test = uf_moves[key_move_uf].UF_value;
    if (m_test !== null) return m_test;
    else return 'UF: No move';
  }

  const parseUFRMove = () => {
    let m_test = ufr_moves[key_move_ufr].UFR_value;
    if (m_test !== null) return m_test;
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
            height: '120vw',
            backgroundColor: 'var(--ion-color-light)',
            borderRadius: '5%',

          }}>
            <div className='controls'>
              <Stack direction={'row'} spacing={5}>
                <ColorTextField
                  select
                  value={col_uf}
                  label="First target"
                  sx={{
                    width: '30vw',
                  }}
                  margin='normal'
                  onChange={(e) => setColUf(e.target.value)}
                >
                  {keys.map((letter: string, index: number) => (
                    <MenuItem key={index} value={letter}>{letter}</MenuItem>
                  ))}
                </ColorTextField>
                <ColorTextField
                  select
                  value={row_uf}
                  label="Second target"
                  sx={{
                    width: '30vw',
                  }}
                  margin='normal'
                  onChange={(e) => setRowUf(e.target.value)}
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
                UF<br />
                {parseUFMove()}
              </Paper>
            </div>
            <div className='controls'>
              <Stack direction={'row'} spacing={5}>
                <ColorTextField
                  select
                  value={col_ufr}
                  label="First target"
                  sx={{
                    width: '30vw',
                  }}
                  margin='normal'
                  onChange={(e) => setColUfr(e.target.value)}
                >
                  {keys_ufr.map((letter: string, index: number) => (
                    <MenuItem key={index} value={letter}>{letter}</MenuItem>
                  ))}
                </ColorTextField>
                <ColorTextField
                  select
                  value={row_ufr}
                  label="Second target"
                  sx={{
                    width: '30vw',
                  }}
                  margin='normal'
                  onChange={(e) => setRowUfr(e.target.value)}
                >
                  {keys_ufr.map((letter: string, index: number) => (
                    <MenuItem key={index} value={letter}>{letter}</MenuItem>
                  ))}
                </ColorTextField>
              </Stack>
            </div>
            <div className='result'>
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
                UFR <br />
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
