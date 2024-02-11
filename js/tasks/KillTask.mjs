import { BaseTask } from "../task.js";
import { SwapTask } from "./SwapTask.mjs";
import { FallTask } from "./FallTask.mjs";
import Cookie from "../cookies/Cookie.mjs";



let score=0
let score_dom=document.querySelector("#score")

let added=0
let score_multiplier=0
let score_added_dom=document.querySelector("#score_added")

export function setScore(new_score){
  score=new_score
  score_dom.innerHTML="Score: "+score
}

export function getScore(){
  return score
}

export function setScoreMultiplier(new_score_multiplier){
  score_multiplier=new_score_multiplier
  addScore(0)
}

export function getScoreMultiplier(){
  return score_multiplier
}

export function addScore(new_score){
  // Add to added score
  added+=new_score
  score_added_dom.innerHTML="X"+score_multiplier+" +"+added

  // Set score style
  let style
  if(added>8000)style=7
  else if(added>3000)style=6
  else if(added>1000)style=5
  else if(added>500)style=4
  else if(added>200)style=3
  else if(added>100)style=2
  else style=1

  score_added_dom.classList.remove(
    "overlay-1", "overlay-2", "overlay-3",
    "overlay-4", "overlay-5", "overlay-6",
    "overlay-7"
  )
  score_added_dom.classList.add("overlay-"+style)
}

export function resolveScore(){
  setScore(getScore()+added)
  added=0
  score_multiplier=0
  score_added_dom.innerHTML=""
}

export class KillTask extends BaseTask {

  constructor(){
    super()
  }

  /** @override */
  start(manager) {
    if(score_multiplier==0)score_multiplier=5
    else score_multiplier*=2

    setTimeout(()=>{
      manager.forEach((cookie,x,y)=>{
        if(cookie.state===Cookie.POWERED){
          if(cookie.type){
            cookie.type.audio.play()
            cookie.type.destruct(manager,x,y)
            addScore(score_multiplier)
          }
          cookie.state=Cookie.IDLE
        }
      })
      manager.task=new FallTask()
    },500)
  }
}
export const KILL_TASK = new KillTask();
