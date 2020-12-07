$.get("/api/user_data").then(function(data) {
    $("#user").text(" " + data.email);
  });

const userTwit = $("#textarea1")

function submitTwit() {
  console.log(userTwit.val())
}