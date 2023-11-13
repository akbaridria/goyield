import { RequestInfo } from "undici-types";

export const randomColor = () => "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
export const randomNumber = () => Math.floor(Math.random() * (500 - 0 + 1)) + 0;
export const trimWallet = (wallet: string) => wallet.slice(0,5) + '...' + wallet.slice(-5);
export const getNameTokenId = (id: number) => '0'.repeat(4 - id.toString().length) + id;
export const svgToImg = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
export const fetcher = (url: RequestInfo) => fetch(url).then(r => r.json())