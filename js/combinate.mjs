import Cookie from "./cookies/Cookie.mjs";

/**
   * Find a line of cookies starting at (x,y) and going in the direction (vx,vy)
   * Return his length - 1
   */
export function findLineAt(manager, x, y, vx, vy) {
  let count = 0;
  let type = manager.safe_get(x, y).type;

  let xx = x + vx;
  let yy = y + vy;
  while (manager.safe_get(xx, yy)?.type == type) {
    count++;
    xx += vx;
    yy += vy;
  }

  return count;
}

/**
 * Find of cookies centered at (x,y) and going in the direction (vx,vy) and (vx,vy) then
 * tag the cookies if the line is at least length long
 */
export function tagLine(manager, length, x, y, vx, vy) {
  let c1 = findLineAt(manager, x, y, vx, vy);
  let c2 = findLineAt(manager, x, y, -vx, -vy);
  console.log(`line of length ${c1 + c2 + 1}`);
  if (c1 + c2 + 1 >= length) {
    for (let i = 1; i <= c1; i++) {
      let cookie = manager.safe_get(x + i * vx, y + i * vy);
      if (cookie) cookie.state = Cookie.POWERED;
    }
    for (let i = 1; i <= c2; i++) {
      let cookie = manager.safe_get(x - i * vx, y - i * vy);
      if (cookie) cookie.state = Cookie.POWERED;
    }
    manager.get(x, y).state = Cookie.POWERED;
    return true
  }
  return false
}

export function tagAll(manager, length, x, y) {
  let a= tagLine(manager, length, x, y, 1, 0)
  let b= tagLine(manager, length, x, y, 0, 1)
  //let c= this.#tagLine(manager, length, x, y, 1, 1)
  //let d= this.#tagLine(manager, length, x, y, 1, -1)
  return a || b
}