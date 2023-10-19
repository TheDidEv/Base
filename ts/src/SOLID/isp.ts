//isp - program entities should not depend on methods they do not use.

//In this example we emitate redux

enum RouterEnum {
    ABOUT = 'about_page',
    HOME = 'home_page'
}

// interface IRouter {
//     parseUrl: (url) => void;
//     navigate: (router: RouterEnum) => void;//cor client
//     attachEventListeners: () => void;//for client
//     addQueryParams: (params: Record<string, string>) => void;
// }
// class Router implements IRouter {
//     parseUrl(url: any): void { }
//     navigate(router: RouterEnum): void { }
//     attachEventListeners(): void { }
//     addQueryParams(params: Record<string, string>): void { };
// }

interface Router {
    parseUrl: (url: any) => void;
    addQueryParams: (params: Record<string, string>) => void;
}


interface IClientRouter extends Router {
    navigate: (router: RouterEnum) => void;//cor client
    attachEventListeners: () => void;//for client
}

interface IServerRouter extends Router {
    prepareUrlForClient: (url: string) => void;
}

class ServerRouter {
    parseUrl(url: any): void { }
    addQueryParams(params: Record<string, string>): void { };
    prepareUrlForClient(url: string): void { };
}

class ClientRouter {
    parseUrl(url: any): void { }
    addQueryParams(params: Record<string, string>): void { };
    navigate(router: RouterEnum): void { };
    attachEventListeners(): void { };
}




const renderHtmlPage = (store: any, url: any) => {
    const router = new ServerRouter();
}

const client = () => {
    const store = createStore(initialData);
    const router = new ClientRouter();
}

const server = () => {
    const store = createStore(initialData)

    const html = renderHtmlPage(store, req.url);
}