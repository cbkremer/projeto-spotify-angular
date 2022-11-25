import { MusicModel } from './music.model';
export interface PlaylistModel{
  musics: MusicModel[];
  name: string;
  quantity: number;
  user_name: string;
  tag: number | string;
}
