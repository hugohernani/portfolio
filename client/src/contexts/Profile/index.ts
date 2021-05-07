import { createContext } from 'react';
import { IProfileContext } from 'src/interfaces';

export const ProfileContext = createContext<IProfileContext | undefined>(undefined);
