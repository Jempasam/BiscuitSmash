import Cookie from "./Cookie.mjs"

export default class CookieType{


  static KILL = (world,x,y) => { world.get(x,y).type=undefined }

  static NONE = (world,x,y) => { }

  static LINE_EXPLODE = (world,x,y) => {
    for(let i=0;i<world.width;i++){
      let cookie=world.get(i,y)
      if(cookie.state===Cookie.IDLE){
        cookie.type=undefined
      }
    }
    world.get(x,y).type=undefined
      world.get(x,y).state=Cookie.IDLE
  }

  static EXPLODE(sizex,sizey){
    return (world,x,y) => {
      let minx=Math.max(0,x-sizex)
      let maxx=Math.min(world.width-1, x+sizex)
      let miny=Math.max(0,y-sizey)
      let maxy=Math.min(world.height-1, y+sizey)
      for(let i=minx;i<=maxx;i++){
        for(let j=miny;j<=maxy;j++){
          let cookie=world.get(i,j)
          if(cookie.state===Cookie.IDLE){
            cookie.type=undefined
            cookie.state=Cookie.IDLE
          }
        }
      }
      world.get(x,y).type=undefined
      world.get(x,y).state=Cookie.IDLE
    }
  }

  /**
   * 
   * @param {string} imgNormal 
   * @param {string} imgOutline 
   * @param {string} audio
   * @param {function(Grille,number,number):void} onDestruction 
   */
  constructor(imgNormal,imgOutline,audio,onDestruction){
    this.imgNormal=imgNormal
    this.audio=new Audio(audio)
    this.audio.play()
    this.imgOutline=imgOutline
    this.onDestruction=onDestruction
  }

  
  destruct(world,x,y){
    this.onDestruction(world,x,y)
  }

  static CROISSANT=new CookieType(
    "./assets/images/Croissant@2x.png",
    "./assets/images/Croissant-Highlighted@2x.png",
    "./sounds/cranch.wav",
    this.KILL
  )
  static CUPCAKE=new CookieType(
    "./assets/images/Cupcake@2x.png",
    "./assets/images/Cupcake-Highlighted@2x.png",
    "./sounds/cranch2.wav",
    this.KILL
  )
  static DANISH= new CookieType(
    "./assets/images/Danish@2x.png",
    "./assets/images/Danish-Highlighted@2x.png",
    "./sounds/crock.wav",
    this.KILL
  )
  static DONUT=new CookieType(
    "./assets/images/Donut@2x.png",
    "./assets/images/Donut-Highlighted@2x.png",
    "./sounds/crounch.wav",
    this.KILL
  )
  static MACAROON=new CookieType(
    "./assets/images/Macaroon@2x.png",
    "./assets/images/Macaroon-Highlighted@2x.png",
    "./sounds/frinch.wav",
    this.KILL
  )
  static SUGAR_COOKIE=new CookieType(
    "./assets/images/SugarCookie@2x.png",
    "./assets/images/SugarCookie-Highlighted@2x.png",
    "./sounds/cranch.wav",
    this.KILL
  )
  static BOMB=new CookieType(
    "./assets/images/Bomb@2x.png",
    "./assets/images/Bomb-Highlighted@2x.png",
    "./sounds/bomb.wav",
    this.EXPLODE(1,1)
  )
  static MINE=new CookieType(
    "./assets/images/Mine@2x.png",
    "./assets/images/Mine-Highlighted@2x.png",
    "./sounds/bomb.wav",
    this.LINE_EXPLODE
  )
  static CAKE=new CookieType(
    "./assets/images/Cake@2x.png",
    "./assets/images/Cake-Highlighted@2x.png",
    "./sounds/crounch.wav",
    this.KILL
  )
  static CANDY=new CookieType(
    "./assets/images/Candy@2x.png",
    "./assets/images/Candy-Highlighted@2x.png",
    "./sounds/crock.wav",
    this.KILL
  )
  static CHOCOLATINE=new CookieType(
    "./assets/images/Chocolatine@2x.png",
    "./assets/images/Chocolatine-Highlighted@2x.png",
    "./sounds/frinch.wav",
    this.KILL
  )
    
  
  static list = [
    this.BOMB, this.MINE,
    this.CROISSANT, this.CROISSANT, this.CROISSANT, this.CROISSANT,
    this.DONUT, this.DONUT,
    this.CUPCAKE, this.CUPCAKE,
    this.DANISH, this.DANISH,
    this.MACAROON, this.MACAROON,
    this.SUGAR_COOKIE, this.SUGAR_COOKIE
  ];

  static random(){
    return this.list[Math.floor(Math.random()*this.list.length)]
  }
}