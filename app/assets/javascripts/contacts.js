$(function(){
  $('.load_events').on('click', function(e){
    debugger
    $.ajax({
      method: "GET",
      url: this.href
    }).done(function(data){
      $("div.events_list").html(data)
    })
    e.preventDefault()
  })
})
