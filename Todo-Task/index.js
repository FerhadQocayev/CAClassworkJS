$(".addbtn").on("click", function () {
  if ($(".input").val() !== "") {
    let spanElem = document.createElement("span");

    spanElem.className = "span";

    $(".span").text($(".input").val());

    $(".texts").append(spanElem);

    // $(".input").val("");
  } else {
    alert("input can't be empty");
  }
});
