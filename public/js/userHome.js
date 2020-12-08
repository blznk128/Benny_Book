$.get("/api/user_data").then(function(data) {
    $("#user").text(" " + data.id);
  });

const userTwit = $("#textarea1")

function addTwit(currentTwit) {
  $.post("/api/saveTwit", currentTwit, () => {

  })
}

function submitTwit() {
  event.preventDefault()
  let newTwit = {
    twit: userTwit.val()
  }
  addTwit(newTwit)
}