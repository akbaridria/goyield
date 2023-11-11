export const randomColor = () => "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
export const randomNumber = () => Math.floor(Math.random() * (500 - 0 + 1)) + 0;