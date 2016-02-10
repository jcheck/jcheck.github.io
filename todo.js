// This section of code is how we prepare our code
// so this it is prepared to react to user events.

$(document).ready(function() {
  $(".btn").on("click", addItem);
  // Used jQuery, interested in this click event and if anyone click this run addItem, this line is a prep step to;
  // $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

//Line 4 says when you fully load all of the html, line 4 tells the browser what to do, the sequence of events is critically important

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addItem() {
  text = window.prompt("New To-Do Item");
  console.log("Yup!");
  delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  //
  numItems = $("li").length;
  $(".total").html(numItems + " items");
  // .html function takes whatever .html is in there and then replace with whatever I dictate,

  // Challenge: Differentiate between 1 item vs. more items

}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.

function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().remove();

}
