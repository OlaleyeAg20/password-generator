const numberIndex = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","-","+","&","?","!","*",";",":","@","#","_","(",")","%"]
const darkBtn = document.getElementById("dark")
const lightBtn = document.getElementById("light")
let output = document.getElementById("password")
let button = document.getElementById("btn")
let output2 = document.getElementById("passwords")
let refreshs = document.getElementById("refresh")
let input = document.getElementById("input") 
function generate(){
  let password =   Math.floor(Math.random()*numberIndex.length)
  output.textContent += numberIndex[password]
  } 
  function darkMode(){
       document.getElementById('body').style.background = '#202938'
       document.getElementById('container').style.color = '#F5F7FA'
  }
  function lightMode(){
       document.getElementById('body').style.background = '#FFF'
       document.getElementById('container').style.color = '#333'
  }
  darkBtn.addEventListener("click", function(){
       darkMode()
       lightBtn.style.display = 'block'
       darkBtn.style.display = 'none'
  })
  lightBtn.addEventListener("click", function(){
       lightMode()
       lightBtn.style.display = 'none'
       darkBtn.style.display = 'block'
  })
  function generate2(){
  let password1 =   Math.floor(Math.random()*numberIndex.length)
  
  output2.textContent += numberIndex[password1]
  } 
  
  function generatePassword(){
       
              for ( i = 0; i < input.value; i++) {
        generate()
        generate2()
        button.style.display = "none"
        refreshs.style.display = "inline"
       }
              
  
}
function refresh() {
     output.innerText = ""
     output2.innerText = ""
     refreshs.style.display = "none"
     button.style.display = "inline"
}
          const copyContent = async () => {
    try {
    await navigator.clipboard.writeText(output.textContent);
      alert(`${output.textContent} copied`);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
