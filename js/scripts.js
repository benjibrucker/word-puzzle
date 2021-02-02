const icecreams = ["a", "b", "c"]
icecreams.forEach(function(flavor) {
  $("#a").append(flavor.+ ", ")
})


const value = ['2','3','4','5','6','7','8','9','10', 'Jack', 'Queen', 'King', 'Ace']

let deck = []

 
value.forEach(function(element) {
    deck.push("spade"+element+" ")
  deck.push("club"+element+" ")
  deck.push("heart"+element+" ")
  deck.push("diamond"+element+" ")
  spadeCards = $("#spadeList").append("spade"+element+" ")
  heartCards = $("#spadeList").append("heart"+element+" ")
  diamondCards = $("#spadeList").append("diamond"+element+" ")
  clubCards = $("#spadeList").append("club"+element+" ")/
});


function questionFlavor(placeHolder) {

  if (condition) {
    // folowing code will trigger
  } else if (condition) {

  } else
    alert("someting went wrong")

  return sentence
};

••••••••••••••••••••••••••••••••••••••••••••••••••

function questionFlavor(placeHolder) {

  if (flavor === "vanilla") {
    return "cool, vanilla is your favorite"
  } else if (flavor === "chocolate") {
    return "me too! I love" + flavor
  } else if (flavor === "cookiesNcream")
    return "noice"
  } else {
    return "thats a good one"
  }
    alert("someting went wrong")

  return sentence
};

••••••••••••••••••••••••••••••••••••••••••••••••••

// business logic
function likeFlavor(flavor) {
    let result = "I like" + flavor;
    return result
}

function questionFlavor(flavor) {
  if (flavor === "vanilla") {
    let result = likeFlavor(flavor);
    return "cool, vanilla is your favorite"
  } else if (flavor === "chocolate") {
    return "me too! I love" + flavor
  } else if (flavor === "cookiesNcream")
    return "noice"
  } else {
    return "thats a good one"
  }
    alert("someting went wrong")

  return sentence
};

// front end logic

$(document).read(function()
  const flavor = $("input:radio(name=flavor"):checked").val();

    questionFlavor(flavor);
    questionFlavor("mint");
    $("#output").text(result2);

    event.preventDefault();
  });
});


// in html can use nubers for value so when you do if/else
// you can can be like "if > 5 return this"