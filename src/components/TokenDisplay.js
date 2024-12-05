import React from 'react';

const TokenDisplay = ({ blueTokens, redTokens }) => {
  const renderTokens = (tokens, tokensPerRow, tokenColorClass) => {
    let rows = [];
    for (let i = 0; i < tokens.length; i += tokensPerRow) {
      rows.push(tokens.slice(i, i + tokensPerRow));
    }
    return rows.map((row, index) => (
      <div key={index} className="token-row">
        {row.map((token, tokenIndex) => (
          <span key={tokenIndex} className={`token ${tokenColorClass}`}>
            {token}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <div className="token-display">
      <h2>Blue Tokens:</h2>
      <div>{renderTokens(blueTokens, 5, 'token')}</div>
      <h2>Red Tokens:</h2>
      <div>{renderTokens(redTokens, 5, 'red-token')}</div>
    </div>
  );
};

export default TokenDisplay;
