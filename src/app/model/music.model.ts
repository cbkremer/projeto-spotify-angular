import { PlaylistModel } from './playlist.model';
export interface MusicModel{
  name: string;
  playlistsDTO: PlaylistModel[];
  tag: number | string;
}
