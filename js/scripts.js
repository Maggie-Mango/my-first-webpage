$(document).ready(function() {
  $("button#wheat").click(function() {
    $("body").removeClass();
    $("body").addClass("wheat-background");
  });

  $("button#magenta").click(function() {
    $("body").removeClass();
    $("body").addClass("magenta-background");
  });

    $("button#darkcyan").click(function() {
      $("body").removeClass();
      $("body").addClass("darkcyan-background");
    });
});