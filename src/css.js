const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  
  .skin {
    position: relative;
    height: 50vh;
    background-color: #ffe600;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent yellow transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 5;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
  }
  .eye {
    border: 1px solid #000;
    width: 63px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    display: block;
    border: black 3px solid;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    right: -7px;
    top: 4px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .up {
    position: relative;
    z-index: 1;
  }
  .mouth .up .lip.left {
    background-color: #ffe600;
  
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    transform: rotate(-13deg) translateX(-52px);
    top: -22px;
  }
  /* 遮挡左边上嘴唇的痕迹 */
  .mouth .up .lip.left::after {
    content: "";
    display: block;
    width: 100px;
    height: 3px;
    position: absolute;
    top: -5px;
    bottom: 0;
    background-color: #ffe600;
    z-index: 6;
  }
  .mouth .up .lip.left::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    right: -6px;
    bottom: 0;
    background-color: #ffe600;
  }
  .mouth .up .lip.right {
    background-color: #ffe600;
  
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 50px 0px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    transform: rotate(13deg) translateX(52px);
    top: -22px;
  }
  .mouth .up .lip.right::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    left: -6px;
    bottom: 0;
    background-color: #ffe600;
  }
  .down {
    overflow: hidden;
  
    height: 180px;
    position: absolute;
    top: 0px;
    width: 100%;
    top: 5px;
  }
  .yuan1 {
    border: 3px black solid;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #9b000a;
    overflow: hidden;
  }
  .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background-color: #ff485f;
    border-radius: 100px;
  }
  .face {
    z-index: 3;
    border: 3px solid black;
    position: absolute;
    width: 88px;
    height: 88px;
    left: 50%;
    margin-left: -44px;
    top: 200px;
  }
  .face.left {
    transform: translateX(-180px);
    background-color: #ff0000;
    border-radius: 50%;
  }
  .face.right {
    transform: translateX(180px);
    background-color: #ff0000;
    border-radius: 50%;
  }
  
`
export default string;