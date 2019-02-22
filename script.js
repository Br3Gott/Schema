/* global $*/
/* global moment*/
/* global navigator*/
/* global btoa*/

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}

var getday = moment().day();
var getweek = moment().isoWeeks();

if (getday == 3) {
    getday = 4;
}
else if (getday == 4) {
    getday = 8;
}
else if (getday >= 5) {
    getday = 16;
}
else if (getday == 0) {
    getweek++;
}


$("#3").val(getweek);

var width = $(document).width() - 4;
var height = $(document).height() - 4;
var week = $('#3').val();
var id = $('#1').val();
var strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height;
strLink = "img.php?url="+btoa(strLink);

function nextWeek() {
    id = $('#1').val();
    week++;
    $('#3').val(week);
    week = $('#3').val();
    strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height;
    strLink = "img.php?url="+btoa(strLink);
    $("#img").attr("src", strLink);
}
function prevWeek() {
    id = $('#1').val();
    $('#3').val(week - 1);
    week = $('#3').val();
    strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height;
    strLink = "img.php?url="+btoa(strLink);
    $("#img").attr("src", strLink);
}
function nextDay() {
	getday = getday * 2;
    if (getday > 16) {
        getday = 1;
        nextWeek();
        sbmt();
    }
	if (getday == 0){
		getday = 1;
	}
    id = $('#1').val();
    week = $('#3').val();
    strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height + "&day=" + getday;
    strLink = "img.php?url="+btoa(strLink);
    $("#img").attr("src", strLink);
}
function prevDay() {
    getday = getday / 2;
    if (getday < 1) {
        getday = 16;
        prevWeek();
        sbmt();
    }
    id = $('#1').val();
    week = $('#3').val();
    strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height + "&day=" + getday;
    strLink = "img.php?url="+btoa(strLink);
    $("#img").attr("src", strLink);
}
function sbmt() {
    id = $('#1').val();
    week = $('#3').val();
    if (width <= 650) {
        strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height + "&day=" + getday;
        strLink = "img.php?url="+btoa(strLink);
    }else {
        strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height;
        strLink = "img.php?url="+btoa(strLink);
    }
    $("#img").attr("src", strLink);
}
function getDay() {
    var day = moment().day();
    
    if (day == 3) {
        day = 4;
    }
    else if (day == 4) {
        day = 8;
    }
    else if (day >= 5) {
        day = 16;
    }
    
    return day;
}

$(".menu").click(function() {
    $(".nav").toggleClass("navoff");
    $(".navbg").toggleClass("navoff");
});

if (width <= 650) {
    $("#sbmt").click(function() {
        sbmt();
    });

    $("#3").click(function() {
        id = $('#1').val();
        week = $('#3').val();
        strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height + "&day=" + getday;
        strLink = "img.php?url="+btoa(strLink);
        $("#img").attr("src", strLink);
    });

    id = $('#1').val();
    week = $('#3').val();
    strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height + "&day=" + getday;
    strLink = "img.php?url="+btoa(strLink);
    $("#img").attr("src", strLink);
}
else {
    $("#sbmt").click(function() {
        id = $('#1').val();
        week = $('#3').val();
        strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height;strLink = "img.php?url="+btoa(strLink);
        
        $("#img").attr("src", strLink);
    });

    $("#3").click(function() {
        id = $('#1').val();
        week = $('#3').val();
        strLink = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?format=png&schoolid=89920/sv-se&type=-1&period=&head=2" + "&v=" + Math.floor(Math.random() * Math.floor(999)) + "&id=" + id + "&week=" + week + "&width=" + width + "&height=" + height;
        strLink = "img.php?url="+btoa(strLink);
        $("#img").attr("src", strLink);
    });

    $(document).keydown(function(event) {
        var keycode = event.keyCode || event.which;
        if (keycode == 13) {
            sbmt();
        }
        if (keycode == 39) {
            nextWeek();
        }
        if (keycode == 37) {
            prevWeek();
        }
        if (keycode == 77) {
            $(".maten").toggleClass("matoff");
            $(".frame").attr("height", height);
        }
        if (keycode == 73) {
            $(".nav").toggleClass("navoff");
            $(".navbg").toggleClass("navoff");
        }
        if (keycode == 72) {
            $("#3").val(getweek);
            getday = getDay();
            sbmt();
        }
    });

    document.getElementById("img").setAttribute("src", strLink);
}

$("#img").draggable({
        axis:'x',
        revert: true,
        revertDuration: 100,
        stop: function(event, ui) {
            if (ui.position.left <= 0) {
                if (width <= 650) {
                    nextDay(); 
                }
                else {
                    nextWeek();
                }
            }
            else{
                if (width <= 650) {
                    prevDay(); 
                }
                else {
                    prevWeek();
                }
            }
        }
    });

$(".mat").click(function() {
    $(".maten").toggleClass("matoff");
    $(".frame").attr("height", height);
});

$("#img").click(function() {
    $(".maten").addClass("matoff");
    $(".nav").addClass("navoff");
    $(".navbg").addClass("navoff");
});

$(".home").click(function() {
    $("#3").val(getweek);
    getday = getDay();
    sbmt();
});

$(window).resize(function(){
    width = $(window).width() - 4;
    height = $(window).height() - 4;
    sbmt();
});
