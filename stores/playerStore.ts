import {type Track, type Playlist} from './../types/index';
export const usePlayerStore = defineStore('player', {
	state: () => ({
		currentTrack: undefined as Track | undefined,
		currentMoment: 0,
		isPlaying: false,
		playlist: undefined as Playlist | undefined,
	}),
	actions: {
		initPlayer(track: Track, playlist: Playlist) {
			this.currentTrack = track;
			this.playlist = playlist;
		},
		forward() {
			console.log('TODO forward'); // TODO Forward
		},
		backward() {
			console.log('TODO backward'); // TODO Backward
		},
	},
});
