import { IGameConfig } from "./IGameConfig";
export interface ThreeDProps
{
    levelConfig: IGameConfig;
    showHint: boolean;
    setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
    isReset: boolean;
    setIsReset: React.Dispatch<React.SetStateAction<boolean>>;
    nextLevelUpdated: boolean;
    setNextLevelUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}