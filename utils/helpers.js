export const formTokensInRows = (tokens, tokensPerRow) => {
    const rows = [];
    for (let i = 0; i < tokens.length; i += tokensPerRow){
        rows.push(tokens.slice(i, i + tokensPerRow));
    }
    return rows;
}