import string from './css.js';
const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')




const player= {
  id : undefined,
  time:100,
  n: 1,
   init: () =>{
    demo.innerText = string.substr(0, player.n);
    demo2.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();  
    
   },
   events:{
    '#btnPlay'  : 'play',
 
    '#btnPause' :  'pause',
   '#btnSlow': 'slow',
   
   '#btnNormal' :'normal',
   
   '#btnFast' :'fast'
    
   },

   bindEvents:() =>{     
     for (let key in player.events)
       if(player.events.hasOwnProperty(key)){
        const value = player.events[key] 
        document.querySelector(key).onclick =player[value]         
     }   

   },


  run :() => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    demo.innerText = string.substr(0, player.n);
    demo2.innerHTML = string.substr(0, player.n);
    demo.scrollTop = demo.scrollHeight;
  },
  
  play : () => {
   player.id= setInterval(player.run, player.time);
    
    
  },
  pause : () => {
    window.clearInterval(player.id);
    console.log('pause被调用')
  },
  
  slow : () =>{
    player.pause();
    player.time = 800;
    player.play();
    },
  normal:() =>{
      player.pause();
      player.time = 100;
      player.play();
    
    },

     fast : () =>{
      player.pause();
      player.time = 0;
       player.play();
    },
}

player.init()


