var box = document.getElementsByClassName("box");
var empties = document.getElementsByClassName("empty");
var holding = { piece: null };
var fromRow = null;
var fromCoulm = null;
for (const boxe of box) {
   
  boxe.addEventListener("dragstart", dragStart);
  boxe.addEventListener("dragend", dragEnd);
}
var emptyFuncs = {
  
  dragOver: (e) => e.preventDefault()
   , 
  dragEnter: function () {
   
    this.className += " hovered";
  },
  dragLeave: function () {  // FROM 
    fromRow = this.getAttribute('row');
    fromCoulm = this.getAttribute('coulm');
    console.log(fromRow);
    console.log(fromCoulm);
    chackFrom(this); // FROM!
    this.className = "empty";
  },
  dragDrop: function () {  // TO
    this.className = " empty";
    toRow = this.getAttribute('row');
    toCoulm = this.getAttribute('coulm');
    console.log(toRow);
    console.log(toCoulm);
    chackTo(this); // TO!
    if (this.innerHTML == "" && chackTo() == true && chackFrom() == true) {
      this.appendChild(holding.piece);
    }
  },
};

for (let empty of empties) {
  empty.addEventListener("dragover", emptyFuncs.dragOver);
  empty.addEventListener("dragenter", emptyFuncs.dragEnter);
  empty.addEventListener("dragleave", emptyFuncs.dragLeave);
  empty.addEventListener("drop", emptyFuncs.dragDrop);
}

function dragStart() {
  
  holding.piece = this;
  // the "this" is the player that your holding.
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 10);
 
}
function dragEnd() {
  this.className = "box";
}

function chackFrom(x) {
  
  return true;
}

function chackTo(x) {
      
  return true;
}