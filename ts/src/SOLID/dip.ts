//dip
interface MusicApi {
    getTracts: () => void;
}

class MusicClient implements MusicApi {
    client: MusicApi;

    constructor(client: MusicApi) {
        this.client = client;
    }
    getTracts() {
        this.client.getTracts();
    };
}


class YouTubeMusicApi implements MusicApi {
    getTracts(): void { };
}

class SpotifyApi implements MusicApi {
    getTracts(): void { };
}



const MusicApp = () => {
    const API = new MusicClient(new YouTubeMusicApi());

    API.getTracts();
}