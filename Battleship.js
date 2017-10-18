var board = [[], [], [], [], [], [], [], [], [], []]

$(document).ready(function() {
    var torpedoes = 0;
    const ship = 1;
    for (var index = 0; index <10; index++) {
        $("#table1").append("<tr>")
        for (var i = 0; i <10; i++) {
            $("#table1").append("<td id="+index+i+"</td>")
        }
    }

    // create a function that generates a new random number every time it is called
    var randomCounterRow;

    function randomNum() {
        randomCounterRow = Math.floor(Math.random() * 9);
        return randomCounterRow;
    }

    for (var count = 0; count < 6; count++) {
        // save random number for row to a var
        randomNum();
        var rowNum = randomCounterRow;
        // save a random number for cell to a var
        randomNum();
        var cellNum = randomCounterRow;
        // board[varRow[varCell]]
        board[rowNum][cellNum] = ship;
        console.log(board);
    }

    // create ship function
    // takes in length of ship and random row and cell number
    // changes board array at row and cell location to hold a ship

    $("td").on("click", function() {
        index = $(this).attr("id");
        $(this).addClass("clicked");
        torpedoes += 1;
        $(".TorUsed").text("Torpedoes Used: " + torpedoes);
        if (index == 1) {
            console.log("Hit!");
        } else {
            console.log("Miss!");
        }
        $(this).off("click");
        if (torpedoes > 24) {
            $(this).addClass("lost");
            alert("You have no more torpedoes! You lose :(");
            location.reload();
        }
    });
});


  // for (var index = 0; index <=10; index++) {
  //   for (var index = 0; index <=10; index++) {
  //     $("#table1").append("<tbody><tr>" + index + "</tr></tbody>")
  //     }; {
  //   $("#table1").append("<tr><td>" + index + "</td></tr>")
  // }};
