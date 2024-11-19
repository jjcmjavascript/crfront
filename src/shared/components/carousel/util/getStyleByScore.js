export const getStyleByScore = (score) => {
  if (score >= 4.4) {
    return { color:'#2E7D32', name: "bi bi-emoji-heart-eyes" };
  } else if (score >= 4) {
    return { color:'#4CAF50', name: "bi-emoji-grin" };
  } else if (score >= 3) {
    return { color:'#A5D6A7', name: "bi bi-emoji-smile" };
  } else if (score === 3) {
    return { color:'#FFE082', name: "bi bi-emoji-neutral-fill" };
  }

  return { color:'#FF5252', name: "bi bi-emoji-tear" };
}
