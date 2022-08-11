import {
    createContext,
    useContext,
    useState,
    Dispatch,
    ReactElement,
    ReactNode,
    SetStateAction,
} from 'react';




type ContextProps = {
    prerequisites: string[];
    setPrerequisites: Dispatch<SetStateAction<string[]>>;
    stacks: string[];
    setStacks: Dispatch<SetStateAction<string[]>>;
    taggings: string[];
    setTaggings: Dispatch<SetStateAction<string[]>>;
};

type Props = {
    children: ReactNode;
};

const MdxComponentsContext = createContext({} as ContextProps);

export function MdxComponentsProvider({ children }: Props): JSX.Element {
    const [prerequisites, setPrerequisites] = useState < string[] > ([]);
    const [stacks, setStacks] = useState < string[] > ([]);
    const [taggings, setTaggings] = useState < string[] > ([]);

    return (
        <MdxComponentsContext.Provider
            value={{
                prerequisites,
                setPrerequisites,
                stacks,
                setStacks,
                taggings,
                setTaggings
            }}
        >
            {children}
        </MdxComponentsContext.Provider>
    );
}

export function useMdxComponentsContext(): ContextProps {
    return useContext(MdxComponentsContext);
} 