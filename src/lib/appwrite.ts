type FilePath = {
	name: string;
	path: string;
};

function nf(name: string, path: string): FilePath {
	return { name, path };
}

const db: FilePath[] = [
	nf('lesincasanciens-jeu', '/Game.zip'),
	nf('lesincasanciens-images', '/Images.zip'),
	nf('lesincasanciens-code', '/Code.zip'),
	nf('test', '/test.txt'),
	nf('wallpapers', '/Wallpapers.zip')
];

export function isFile(id: string) {
	const filePathIndex = db.findIndex((a) => a.name === id);
	if (filePathIndex != -1) {
		return [0, db[filePathIndex].path];
	} else {
		return [1, ''];
	}
}
