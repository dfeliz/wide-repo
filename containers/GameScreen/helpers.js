
export const getRandomPositionOfArea = (rect) => {
console.log("🚀 | getRandomPositionOfArea | rect", rect)
  return {
    x: Math.floor(Math.random() * (rect.right - 50)),
    y: Math.floor(Math.random() * (rect.bottom - 50))
  };
}
