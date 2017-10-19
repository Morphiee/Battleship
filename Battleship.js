var board = [[], [], [], [], [], [], [], [], [], []]
var hitCounter = 0;

$(document).ready(function() {
    var torpedoes = 0;
    var torpedoesleft = 25;
    var ships;
    var count;
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
// changes board array at row and cell location to hold a ship
    for (var count = 0; count < 5; count++) {
        // save random number for row to a var
        randomNum();
        var rowNum = randomCounterRow;
        // save a random number for cell to a var
        randomNum();
        var cellNum = randomCounterRow;
        // board[varRow[varCell]]

        board[rowNum][cellNum] = ship;

        console.log(test);

        var joined = "#" + rowNum.toString() + cellNum.toString();
        $(joined).addClass("joined");

        var test = "#" + rowNum + cellNum;

        $(test).removeAttr("id");

        console.log(board);
    }

    $("td").on("click", function() {
        var index = $(this).attr("class");
        torpedoes += 1;
        torpedoesleft -= 1;
        $(".TorUsed").text("Torpedoes Used: " + torpedoes);
        $(".torLeft").text("Torpedoes Left: " + torpedoesleft);

        // if (ship == board[index[0]][index[1]])

        if ($(this).hasClass("joined")) {
            $(".hitOrMiss").text("Hit!");
            $(this).addClass("hit");
            hitCounter += 1;
        } else {
            $(".hitOrMiss").text("Miss!");
            $(this).addClass("miss");
        }
        $(this).off("click");
        if (torpedoes > 24) {
            $(this).addClass("lost");
            $(".joined").addClass("hit");
            $("td").off("click");
            $(".hitOrMiss").text("You have no more torpedoes! You lose :(")
            // location.reload();
        }
        if (hitCounter === 5) {
            alert("You won!")
            location.reload();
        }
    })
});
