import { generateBoard } from './GameBoard';

describe('GameBoard', () => {
  const validAgents = ['B', '', '', 'B', '','B', 'R', 'R', 'B', 'B','B', 'R', '', 'B', 'R','B', 'R', '', 'X', 'R', 'R', '', 'R', 'B', '']
  const validWords = [
    "eyes", "tin", "icicle", "cemetery", "punishment", "fact", "root", "doctor", "baby", "field", "respect", "hall", "pancake", "pencil", "pie", "stem", "step", "holiday", "silver", "market", "tomatoes", "leather", "scissors", "week", "kitty",
  ]
  it('should generate empty board', () => {
    const board = generateBoard({ agents: [], words: []});

    expect(board).toEqual([
      {
        position: [0,0],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [0,1],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [0,2],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [0,3],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [0,4],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [1,0],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [1,1],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [1,2],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [1,3],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [1,4],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [2,0],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [2,1],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [2,2],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [2,3],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [2,4],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [3,0],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [3,1],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [3,2],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [3,3],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [3,4],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [4,0],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [4,1],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [4,2],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [4,3],
        selected: false,
        agent: '',
        codeName: ''
      },
      {
        position: [4,4],
        selected: false,
        agent: '',
        codeName: ''
      }
    ])
  })

  it('should populate agents and words', () => {
    const board = generateBoard({ agents: validAgents, words: validWords });

    expect(board).toEqual([
      {
        position: [0,0],
        selected: false,
        agent: 'B',
        codeName: "eyes"
      },
      {
        position: [0,1],
        selected: false,
        agent: '',
        codeName: "tin"
      },
      {
        position: [0,2],
        selected: false,
        agent: '',
        codeName: "icicle"
      },
      {
        position: [0,3],
        selected: false,
        agent: 'B',
        codeName: "cemetery"
      },
      {
        position: [0,4],
        selected: false,
        agent: '',
        codeName: "punishment"
      },
      {
        position: [1,0],
        selected: false,
        agent: 'B',
        codeName: "fact"
      },
      {
        position: [1,1],
        selected: false,
        agent: 'R',
        codeName: "root"
      },
      {
        position: [1,2],
        selected: false,
        agent: 'R',
        codeName: "doctor"
      },
      {
        position: [1,3],
        selected: false,
        agent: 'B',
        codeName: "baby"
      },
      {
        position: [1,4],
        selected: false,
        agent: 'B',
        codeName: "field"
      },
      {
        position: [2,0],
        selected: false,
        agent: 'B',
        codeName: "respect"
      },
      {
        position: [2,1],
        selected: false,
        agent: 'R',
        codeName: "hall"
      },
      {
        position: [2,2],
        selected: false,
        agent: '',
        codeName: "pancake"
      },
      {
        position: [2,3],
        selected: false,
        agent: 'B',
        codeName: "pencil"
      },
      {
        position: [2,4],
        selected: false,
        agent: 'R',
        codeName: "pie"
      },
      {
        position: [3,0],
        selected: false,
        agent: 'B',
        codeName: "stem"
      },
      {
        position: [3,1],
        selected: false,
        agent: 'R',
        codeName: "step"
      },
      {
        position: [3,2],
        selected: false,
        agent: '',
        codeName: "holiday"
      },
      {
        position: [3,3],
        selected: false,
        agent: 'X',
        codeName: "silver"
      },
      {
        position: [3,4],
        selected: false,
        agent: 'R',
        codeName: "market"
      },
      {
        position: [4,0],
        selected: false,
        agent: 'R',
        codeName: "tomatoes"
      },
      {
        position: [4,1],
        selected: false,
        agent: '',
        codeName: "leather"
      },
      {
        position: [4,2],
        selected: false,
        agent: 'R',
        codeName: "scissors"
      },
      {
        position: [4,3],
        selected: false,
        agent: 'B',
        codeName: "week"
      },
      {
        position: [4,4],
        selected: false,
        agent: '',
        codeName: "kitty"
      }
    ])
  })

  it('should throw error when words do not contain 25 items', () => {
    const incompleteWords = ['eyes']

    expect(() => generateBoard({ agents: validAgents, words: incompleteWords })).toThrow('words should have 25 items')
  })

  it('should throw error when agents do not contain 25 items', () => {
    const incompleteAgents = ['B']

    expect(() => generateBoard({ agents: incompleteAgents, words: validWords })).toThrow('agents should have 25 items')
  })
})
