import { Client, Databases, Query, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("downloads");

const databases = new Databases(client);
const storage = new Storage(client);

export function isFile(id: string) {
    return databases.listDocuments("files", "files", 
        [Query.equal('id', id)]);
}

export function downloadFile(id: string) {
    return storage.getFileDownload('files', id);
}