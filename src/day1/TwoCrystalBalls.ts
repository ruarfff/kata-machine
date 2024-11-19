export default function two_crystal_balls(breaks: boolean[]): number {
	let high = breaks.length;
	let low = 0;

	while (low < high) {
		const mid = Math.floor(low + (high - low) / 2);
		const val = breaks[mid];
		if (val) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}
	if (low < breaks.length && breaks[low]) {
		return low;
	}
	return -1;
}
