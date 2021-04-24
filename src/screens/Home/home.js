import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Header from 'components/Header/header';

import { makeStyles } from '@material-ui/core/styles';
import { classify } from 'Api/nlp';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginBottom: '1rem',
    justifyContent: 'space-between',
  },
  half: {
    width: '48%',
  },
  wrapper: {
    padding: '2rem',
  },
  btn: {
    margin: '0 4px',
  },
}));

export default function Home(props) {
  let fileReader;
  const classes = useStyles();
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleFileRead = () => {
    const content = fileReader.result;
    setText(content);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const classifyHandler = async () => {
    try {
      const res = await classify(text);
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.half}>
            <TextField
              label='Text'
              fullWidth
              multiline
              rows={24}
              variant='outlined'
              value={text}
              onChange={(ev) => setText(ev.target.value)}
            />
          </div>
          <div className={classes.half}>
            <TextField
              label='Result'
              fullWidth
              multiline
              rows={24}
              variant='outlined'
              value={result}
              onChange={(ev) => setResult(ev.target.value)}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
        </div>
        <Button
          className={classes.btn}
          color='primary'
          variant='outlined'
          component='label'
        >
          Upload File
          <input
            type='file'
            hidden
            onChange={(e) => handleFileChosen(e.target.files[0])}
          />
        </Button>
        <Button
          className={classes.btn}
          color='secondary'
          variant='outlined'
          onClick={classifyHandler}
        >
          Classify
        </Button>
      </div>
    </div>
  );
}
