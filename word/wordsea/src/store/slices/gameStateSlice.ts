 import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Row} from "../../types/types";
import { SORTED_LEVELS} from "../../data/constants";

interface GameState {
    level: number,
    gameLevel: number,
    guessedWords: string[],
    gameProcess: Row[]
}

const initialState: GameState = {
    level: 1,
    gameLevel: 1,
    guessedWords: [],
    gameProcess: SORTED_LEVELS.SORTED_LEVEL_1.map(word => ({
        word: word,
        isGuessed: false
    }))
};

export const gameStateSlice = createSlice({
    name: 'gameProcess',
    initialState,
    reducers: {
        setProcess: (state, action) => {
            state.gameProcess = state.gameProcess.map(el => {
                return el.word === action.payload ? (
                        {
                            ...el,
                            isGuessed: true
                        }
                    )
                    : el
            });
        },
        setGuessedWords: (state, action) => {
            state.guessedWords = [...state.guessedWords, action.payload];
        },
        setGameLevel: (state) => {
            state.gameLevel = state.gameLevel + 1;
        },
        setLevel: (state) => {
            state.level = state.level === 3 ? 1 : state.level + 1;
            state.gameProcess = SORTED_LEVELS[`SORTED_LEVEL_${state.level}`].map(word => ({
                word: word,
                isGuessed: false
            }))
        },
    },
});

export const {
    setProcess,
    setGuessedWords,
    setGameLevel,
    setLevel,
} = gameStateSlice.actions;

export const gameState = (state: RootState) => state.gameProcess;

export default gameStateSlice.reducer;