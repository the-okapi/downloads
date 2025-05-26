import PocketBase from 'pocketbase';

const pb = new PocketBase('https://theokapi-downloads.pockethost.io/');

export async function isFile(id: string) {
	try {
		const records = await pb.collection('files').getFullList({ filter: `name="${id}"` });
		if (records.length > 0) {
			return [0, records[0].path];
		} else {
			return [1, ''];
		}
	} catch (err) {
		return [2, err];
	}
}
