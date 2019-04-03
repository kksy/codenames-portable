const generateEmptyBoard = () => {
  let emptyBoard = []
  for(let x=0; x < 5; x++) {
    for(let y=0; y < 5; y++) {
      emptyBoard.push({
        position: [x,y],
        selected: false,
        agent: '',
        codeName: ''
      })
    }
  }
  return emptyBoard;
}

const validateInputs = ({ agents, words }) => {
  if(words.length !== 25) {
    throw new Error('words should have 25 items')
  }

  if(agents.length !== 25) {
    throw new Error('agents should have 25 items')
  }

  return {agents, words};
}

export const generateBoard = ({ agents, words }) => {
  const isEmptyInput = agents.length === 0 && words.length === 0;
  const emptyBoard = generateEmptyBoard();
  if (isEmptyInput) {
    return emptyBoard
  }

  const validInputs = validateInputs({ agents, words })

  return emptyBoard.map((cell, index) => {
    return {
      position: cell.position,
      selected: false,
      agent: validInputs.agents[index],
      codeName: validInputs.words[index]
    }
  })
  
}