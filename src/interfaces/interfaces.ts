import { GameType } from "./enums"

export interface IGameConnect {
    index: number,
    game: IGameCreate
}

export interface IGameCreate {
    name: string,
    type: GameType,
    link?: string
}

export interface IGameAdmin extends IGameCreate {
    editable: boolean
}

export interface IStreamer {
    name: string,
    displayName: string,
    enableGames: Array<IGameCreate>
}