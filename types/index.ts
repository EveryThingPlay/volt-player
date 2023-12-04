export type Track = {
	title: string;
	author: string;
	album: Playlist;
	duration: number;
};

export type Playlist = {
	title: string;
	author: string;
	cover: string;
	tracks: Track[];
};
