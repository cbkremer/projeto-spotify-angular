import { MusicModel } from './music.model';
export interface PlaylistModel{
  name: string;
  quantity: number;
  user_name: string;
  tag: number | string;
  musics: MusicModel[];
}
