$(function(){
  $('.load_contacts').on('click', function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).done(function(data){
      $("div.local_contacts_list").html(data)
    })

    // $(function () {
    //   $(".js-next").on("click", function() {
    //     var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    //     $.getJSON("/lists/" + nextId + "/list_data", function(data) {
    //       $(".listName").text(data["name"]);
    //       $(".listDate").text(data["date"]);
    //       $(".listCity").text(data["city"]);
    //       $(".listState").text(data["state"]);
    //       $(".contactName").text(data["contacts"]);
    //       // re-set the id to current on the link
    //       $(".js-next").attr("data-id", data["id"]);
    //     });
    //   });
    // });
    e.preventDefault()
  })
})
