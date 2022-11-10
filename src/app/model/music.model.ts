import { PlaylistModel } from './playlist.model';
export interface MusicModel{
  name: string;
  playlists: PlaylistModel[];
  tag: number | string;
}
