export function generarToken() {
  let token = "";
  for (let index = 0; index < 10; index++) {
    token += Math.random().toString(36).substring(2);
  }
  return token;
}

export function generarId() {
  return Math.random().toString(36).substring(2);
}
