$.get("/api/user_data").then(function(data) {
    $("#user").text(data.email);
  });