import { PlaylistModel } from './playlist.model';
export interface UserInfoModel {
    name: string;
    email: string;
    password?: string;
    playlists: PlaylistModel[];
}
