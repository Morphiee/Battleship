var board = [[], [], [], [], [], [], [], [], [], []]
var hitCounter = 0;
var shipCoordinates = [];
function generateCellNumbers() {
    var rowNum = randomNum();
    var cellNum = randomNum();
    return "" + rowNum + cellNum;
};
    // create a function that generates a new random number every time it is called
function randomNum() {
    var randomCounterRow = Math.floor(Math.random() * 9);
    return randomCounterRow;
}

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


// changes board array at row and cell location to hold a ship
    for (var count = 0; count < 5; count++) {
        // save random number for row to a var
        var rowNum = randomNum();
        // save a random number for cell to a var
        var cellNum = randomNum();
        // board[varRow[varCell]]

        board[rowNum][cellNum] = ship;

        generateCellNumbers(5);
        console.log(test);
        // if it has class joined, remove 1 from counter
        if ($(this).hasClass("joined" || "ship")) {
            count -=1;
        };
        var joined = "#" + rowNum.toString() + cellNum.toString();
        $(joined).addClass("ship");
        var aboveShip = "#" + (rowNum - 1).toString()+ cellNum.toString();
        $(aboveShip).addClass("joined");
        var belowShip = "#" + (rowNum + 1).toString() + cellNum.toString();
        $(belowShip).addClass("joined");
        var leftOfShip = "#" + rowNum.toString() + (cellNum - 1).toString();
        $(leftOfShip).addClass("joined");
        var rightOfShip = "#" + rowNum.toString() + (cellNum + 1).toString();
        $(rightOfShip).addClass("joined");

        var test = "#" + rowNum + cellNum;

        $(test).removeAttr("id");

        console.log(board);
    }

    // function to get starting point of ship. 1 parameter takes the length of the ship. In function, take the coordinates, iterate through the length of the ship, and check to see if all the next blocks have a ship. if so, start over.


    function createHorizontalShip(length) {
        var newCoordinates = generateCellNumbers();
        // var shipCoordinates = [];
        var rowNum = newCoordinates[0]
        var cellNum = newCoordinates[1]
        for (var l = 0; l < length; l++) {
            var checkedSpot = "#" + rowNum.toString() + cellNum.toString();
            if ($(checkedSpot).hasClass("ship")) {
                newCoordinates = generateCellNumbers();
            } else {
                $(shipCoordinates).prepend(newCoordinates);
                rowNum += 1;
            }
        }
}

    $("td").on("click", function() {
        var index = $(this).attr("class");
        torpedoes += 1;
        torpedoesleft -= 1;
        $(".TorUsed").text("Torpedoes Used: " + torpedoes);
        $(".torLeft").text("Torpedoes Left: " + torpedoesleft);

        // if (ship == board[index[0]][index[1]])

        if ($(this).hasClass("ship")) {
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
            $(".ship").addClass("hit");
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
