import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TokenForm = ({ setBlueTokens, setRedTokens }) => {
  const [blueTokenCount, setBlueTokenCount] = useState(0);
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(5);
  const [redTokenCount, setRedTokenCount] = useState(0);
  const [redTokenPrefix, setRedTokenPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState(5);

  const generateTokens = () => {
    const blueTokens = Array.from({ length: blueTokenCount }, (_, index) => (
      `${blueTokenPrefix}${index + 1}`
    ));
    const redTokens = Array.from({ length: redTokenCount }, (_, index) => (
      `${redTokenPrefix}${index + 1}`
    ));
    setBlueTokens(blueTokens);
    setRedTokens(redTokens);
  };

  const handleClear = () => {
    setBlueTokens([]);
    setRedTokens([]);
  };

  return (
    <form noValidate autoComplete="off" style={{ marginTop: '20px' }}>
      <Grid container spacing={2} justifyContent="center">

        <Grid item xs={12}>
          <TextField
            label="Number of Blue Tokens"
            type="number"
            value={blueTokenCount}
            onChange={(e) => setBlueTokenCount(Number(e.target.value))}
            variant="outlined"
            size="small"
            style={{ width: '200px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Blue Token Prefix"
            value={blueTokenPrefix}
            onChange={(e) => setBlueTokenPrefix(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: '200px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Blue Tokens per Row"
            type="number"
            value={blueTokensPerRow}
            onChange={(e) => setBlueTokensPerRow(Number(e.target.value))}
            variant="outlined"
            size="small"
            style={{ width: '200px' }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Number of Red Tokens"
            type="number"
            value={redTokenCount}
            onChange={(e) => setRedTokenCount(Number(e.target.value))}
            variant="outlined"
            size="small"
            style={{ width: '200px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Red Token Prefix"
            value={redTokenPrefix}
            onChange={(e) => setRedTokenPrefix(e.target.value)}
            variant="outlined"
            size="small"
            style={{ width: '200px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Red Tokens per Row"
            type="number"
            value={redTokensPerRow}
            onChange={(e) => setRedTokensPerRow(Number(e.target.value))}
            variant="outlined"
            size="small"
            style={{ width: '200px' }}
          />
        </Grid>

        {/* Buttons Row */}
        <Grid item xs={12}>
          <Button
            onClick={generateTokens}
            variant="contained"
            color="primary"
            style={{ marginRight: '10px' }}
          >
            Generate Tokens
          </Button>
          <Button
            onClick={handleClear}
            variant="outlined"
            color="secondary"
          >
            Clear Tokens
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TokenForm;
