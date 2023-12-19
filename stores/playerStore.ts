import {defineStore} from 'pinia';
import playlist from '~/assets/playlist';

type Track = {
	title?: string;
	artist?: string;
	album?: string;
	image?: string;
	src: string;
};

type PlayerState = {
	track: Track;
	isPlaying: boolean;
	player: HTMLAudioElement | undefined;
	repeat: boolean;
	shuffle: boolean;
	progressInterval: NodeJS.Timeout | undefined;
	progress: number;
};

export const usePlayerStore = defineStore({
	id: 'player',
	state: (): PlayerState => ({
		track: playlist[0],
		isPlaying: false,
		player: undefined,
		repeat: false,
		shuffle: false,
		progressInterval: undefined,
		progress: 0,
	}),

	actions: {
		async togglePlayer(): Promise<void> {
			if (this.isPlaying) {
				this.player?.pause();
				clearInterval(this.progressInterval);
			} else {
				await this.player?.play();
				this.progressInterval = setInterval(() => {
					this.updateProgress();
				}, 1000); // Update progress every second
			}

			this.isPlaying = !this.isPlaying;
		},

		async changeTrack(index: number): Promise<void> {
			if (playlist[index] && this.player) {
				this.track = playlist[index];
				this.player.src = this.track.src;
				if (this.isPlaying) {
					await this.player.play();
				}
			}
		},

		async forward(): Promise<void> {
			const currentIndex = this.getCurrentIndex();
			await this.changeTrack(currentIndex + 1);
		},

		async backward(): Promise<void> {
			const currentIndex = this.getCurrentIndex();
			await this.changeTrack(currentIndex - 1);
		},

		getCurrentIndex(): number {
			const currentTrack = playlist.find(el => el.src === this.track.src);
			return currentTrack ? playlist.indexOf(currentTrack) : -1;
		},

		updateProgress(): void {
			this.progress = this.player?.duration
				? (this.player.currentTime / this.player.duration) * 100
				: 0;
		},
	},
});
