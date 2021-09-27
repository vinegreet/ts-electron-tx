import { createContext } from 'react';
import { initialState } from '../models';
import { IDataStateFunctions } from '../models/IData';

const DataContext = createContext<IDataStateFunctions>(initialState);

export default DataContext;
