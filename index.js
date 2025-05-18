const carOne = document.getElementById('car1')
const carTwo = document.getElementById('car2')
const wordView = document.getElementById('word-to-type')
const wordInput = document.getElementById('typed-word')
const modal = document.getElementById('modal')


const startButton = document.getElementById('Start-Game')

startButton.addEventListener('click', () => {
      startgame()
      wordInput.focus()
})

setTimeout(()=>{
      carOne.style.left ='5%'
      carTwo.style.left ='5%'
},100)


let carOnePosition = 5
let carTwoPosition =5
let isgameover = false

const words = [
      "apple", "breeze", "candle", "dream", "echo", "flame", "globe", "honey", "island", "jungle",
"kitten", "lemon", "mirror", "notebook", "ocean", "pencil", "quartz", "river", "sunset", "tiger",
"umbrella", "violet", "whisper", "xylophone", "yarn", "zebra", "anchor", "bubble", "cloud", "dust",
"ember", "feather", "garden", "hill", "iceberg", "jewel", "kite", "lantern", "meadow", "nest",
"owl", "pebble", "quilt", "rainbow", "shadow", "trail", "unicorn", "valley", "wind", "yogurt",
"zipper", "ant", "bottle", "circle", "drum", "engine", "fork", "grape", "hat", "ink",
"jar", "key", "ladder", "moon", "net", "orange", "pan", "queen", "rope", "star",
"tree", "urchin", "vase", "worm", "x-ray", "yak", "zeal", "arcade", "blossom", "cactus",
"dolphin", "eagle", "fan", "glove", "hammer", "igloo", "jackal", "kangaroo", "lamp", "magnet",
"needle", "oak", "pumpkin", "quokka", "rose", "shell", "tunnel", "unit", "violin", "wagon",
"acorn", "badge", "cheese", "daisy", "engineer", "fossil", "glacier", "harp", "idea", "jigsaw",
"koala", "lighthouse", "marble", "napkin", "orbit", "paddle", "quiver", "ribbon", "scale", "tent",
"urchin", "vulture", "waffle", "xerox", "yard", "zucchini", "attic", "balcony", "canoe", "dolphin",
"easel", "fountain", "giraffe", "helmet", "iguana", "jungle", "kettle", "ladle", "mantis", "noodle",
"octopus", "puzzle", "quartz", "raccoon", "saddle", "ticket", "unicorn", "vacuum", "window", "yolk",
"zodiac", "alarm", "bucket", "clover", "doodle", "elbow", "fiddle", "grill", "hammer", "idea",
"jacket", "karate", "lizard", "marsh", "nugget", "opal", "parrot", "quote", "rocket", "scooter",
"tractor", "umpire", "vessel", "whistle", "xenon", "yawn", "zenith", "avocado", "bicycle", "castle",
"dragon", "engine", "flag", "goblin", "harvest", "insect", "jewel", "kayak", "lantern", "muffin"
];

const winner = (status) => {
  modal.innerHTML = `
    <h3>Game Over</h3>
    <h4>${status}</h4>
    <button id="home-btn">Home</button>
  `;

  modal.showModal();

  const homeBtn = document.getElementById('home-btn');
  homeBtn.addEventListener('click', () => {
    window.location.reload(); // or redirect to your main screen URL
  });
};

const typeHandler = () =>{
      const randomWord = words[Math.floor(Math.random()*words.length)]

      wordView.innerText = randomWord
      wordInput.addEventListener('input',(e) => {
            if(e.target.value === randomWord){
                  wordInput.value = ''
                  carTwoPosition += 10
                  carTwo.style.left = carOnePosition +'%'
                  if(carTwoPosition >=80){
                        isgameover = true
                        winner('You Win!')
                  }
                  typeHandler()
            }
      }
      )
}

const carOnecostnatMove = () =>{
       const carOneMove =setInterval(()=>{
            if(isgameover){
                  clearInterval(carOneMove)
            }
            if(carOnePosition>=80){ 
                  isgameover = true;
                  winner('You lost!')
            }
            carOnePosition+= 0.5
            carOne.style.left = carOnePosition +'%'
       }, 100)
}

const carTwocostnatMove = () =>{
       const carTwoMove =setInterval(()=>{
            if(isgameover){
                  clearInterval(carTwoMove)
            }
            if(carTwoPosition>=80){ 
                  isgameover = true;
                  winner('You Win!')
            }
            carTwoPosition+= 0.1
            carTwo.style.left = carTwoPosition +'%'
       }, 100)
}

const startgame = () =>{
      carOnecostnatMove()
      carTwocostnatMove()
      typeHandler()

}

