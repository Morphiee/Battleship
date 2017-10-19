var board = [[], [], [], [], [], [], [], [], [], []]

$(document).ready(function() {
    var torpedoes = 0;
    var torpedoesleft = 25;
    var ships;
    const ship = 1;
    for (var index = 0; index <10; index++) {
        $("#table1").append("<tr>")
        for (var i = 0; i <10; i++) {
            $("#table1").append("<td id="+index+i+">")
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

        var joined = "#" + rowNum.toString() + cellNum.toString();

        $(joined).addClass("joined");

        console.log(board);
    }

    // create ship function
    // takes in length of ship and random row and cell number
    // changes board array at row and cell location to hold a ship
    $("td").on("click", function() {
        var hitCounter = 0;
        var index = $(this).attr("id").split("");
        torpedoes += 1;
        torpedoesleft -= 1;
        $(".TorUsed").text("Torpedoes Used: " + torpedoes);
        $(".torLeft").text("Torpedoes Left: " + torpedoesleft);

        if (ship == board[index[0]][index[1]]) {
            $(".hitOrMiss").text("Hit!");
            hitCounter ++;
            $(this).addClass("hit")
        } else {
            $(".hitOrMiss").text("Miss!");
            $(this).addClass("miss");
        }
        $(this).off("click");
        if (torpedoes > 24) {
            $(this).addClass("lost");
            $(".joined").addClass("hit");
            $("td").off("click");
            // alert("You have no more torpedoes! You lose :(");
            // location.reload();
        }

        if (hitCounter == 5) {
            alert("You win!");
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
