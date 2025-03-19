$(document).ready(function(){
	console.log("loaded");
    var warpTimer;

	// --------------------------- Intro Page -------------------------------------

    $('.logo-container').queue(function(){
		$(this).addClass('show-logo');
	});

    $('.start-button').delay(1000).queue(function(){
		$(this).addClass('show-button');
	});


    $(".start-button").click (function(){
        console.log("clicked");
        $('.start-button').removeClass('show-button');
        $('.logo-container').removeClass('show-logo');

        var hyperspeedSound = document.getElementById('hyperspeed-sound');

        $('.window-long').delay(2000).queue(function(){
            $(this).addClass('window-move');
            hyperspeedSound.play()
        });

        $('.speed').delay(3650).queue(function(){
            $(this).addClass('show-speed');
        });

        warpTimer = setTimeout(removeWarpSpeed, 7000);

        function removeWarpSpeed(){
            $('.speed').removeClass('show-speed');
        }

        $('.main-menu').delay(7000).queue(function(){
            $(this).addClass('show-main-menu');
        });

        $('.main-planet').delay(7000).queue(function(){
            $(this).addClass('show-planet');
        });
        
        $('.learning').delay(8000).queue(function(){
		    $(this).addClass('show-main-buttons');
	    });

        $('.games').delay(8000).queue(function(){
		    $(this).addClass('show-main-buttons');
	    });

        $('.game-menu-buttons').delay(8000).queue(function(){
		    $(this).addClass('game-menu-buttons-hidden');
	    });

        $('.home').delay(9000).queue(function(){
		    $(this).addClass('show-main-buttons');
	    });

        $('.settings').delay(9000).queue(function(){
		    $(this).addClass('show-main-buttons');
	    });
    })

    $(".games").click (function(){
        console.log("clicked");
        $('.games').removeClass('show-main-buttons');
        $('.learning').removeClass('show-main-buttons');
        $('.game-menu-buttons').removeClass('game-menu-buttons-hidden')
        
        $('.label').delay(1000).queue(function(){
		    $(this).addClass('show-game-buttons');
	    });

        $('.mystery').delay(1000).queue(function(){
		    $(this).addClass('show-game-buttons');
	    });

        $('.game-menu-buttons').delay(1000).queue(function(){
		    $(this).removeClass('game-menu-buttons-hidden');
	    });
    })

    $(".home").click (function(){
        window.location.reload();
    })

        // --------------------------- Label The Plant Transition -------------------------------------

    $(".label").click (function(){
        setupLabel();
    }) 

    function setupLabel() {
        $('.label-background').delay(3000).queue(function(){
            $(this).addClass('background-blur');
        });

        $('.label-placeholder').delay(3000).queue(function(){
            $(this).addClass('background-blur');
        });

        $('.label-main').delay(3000).queue(function(){
            $(this).addClass('label-main-delay');
        });

        $('.label-instruction-one').delay(5000).queue(function(){
            $(this).addClass('show-instruction-one');
        });

        $('.label-next-button').delay(5000).queue(function(){
            $(this).addClass('show-instruction-one');
        });

        $('.label-next-button-two').delay(5000).queue(function(){
            $(this).addClass('show-instruction-two');
        });

    }

    $(".label-next-button").click (function(){
        console.log("clicked");
        setTimeout(function(){
            $('.label-instruction-one').removeClass('show-instruction-one');
        },0);

        $('.label-instruction-two').delay(1000).queue(function(){
            $(this).addClass('show-instruction-two');
        });

        setTimeout(function(){
            $('.label-next-button').removeClass('show-instruction-one');
            $('.label-next-button').addClass('game-menu-buttons-hidden');
        },2000);
    })

    $(".label-next-button-two").click (function(){
        console.log("clicked");
        setTimeout(function(){
            $('.label-instruction-two').removeClass('show-instruction-two');
            $('.label-next-button-two').removeClass('show-instruction-two');
            $('.label-main').addClass('label-blur');
        },0);

        $('.target').delay(2000).queue(function(){
            $(this).addClass('show-targets');
        });

        $('.arrows').delay(2000).queue(function(){
            $(this).addClass('show-arrows');
        });

        $('.drag-me').delay(2000).queue(function(){
            $(this).addClass('show-label-buttons');
        });
    })

    	// --------------------------- Mystery Plant Transition -------------------------------------

    $(".mystery").click (function(){
        console.log("clicked");

        setTimeout(function(){
            var lightSound = document.getElementById('light-bulb');
            lightSound.play()
        },1000);

        setTimeout(function(){
            $('.background-lights').addClass('show-lights');
        },2000);

        setTimeout(function(){
            $('.background-lights').removeClass('show-lights');
        },2200);

        setTimeout(function(){
            $('.background-lights').addClass('show-lights');
        },2300);

        setTimeout(function(){
            $('.background-lights').removeClass('show-lights');
        },2400);

        setTimeout(function(){
            $('.background-lights').addClass('show-lights');
        },2500);

        setTimeout(function(){
            $('.background-lights').removeClass('show-lights');
            lightSound.stop()
        },2600);

        setTimeout(function(){
            $('.background-lights').addClass('show-lights');
            var lightSound = document.getElementById('light-bulb');
            lightSound.pause()
        },2700);

        setTimeout(function(){
            $('.mystery-instruction-one').addClass('show-mystery-instruction-one');
        },4000);

        $('.next-button').delay(4000).queue(function(){
            $(this).addClass('show-mystery-instruction-one');
        });

        $('.next-button-two').delay(4000).queue(function(){
            $(this).addClass('show-mystery-instruction-two');
        });

    })

        // --------------------------- Mystery Plant Game -------------------------------------

    $(".next-button").click (function(){
        console.log("clicked");
        setTimeout(function(){
            $('.mystery-instruction-one').removeClass('show-mystery-instruction-one');
        },0);

        $('.mystery-instruction-two').delay(1000).queue(function(){
            $(this).addClass('show-mystery-instruction-two');
        });

        setTimeout(function(){
            $('.next-button').removeClass('show-mystery-instruction-one');
            $('.next-button-two').addClass('show-mystery-instruction-two');
        },1000);
    })

    $(".next-button-two").click (function(){
        console.log("clicked");
        setTimeout(function(){
            $('.mystery-instruction-two').removeClass('show-mystery-instruction-two');
            $('.next-button-two').removeClass('show-mystery-instruction-two');
        },0);

        setTimeout(function(){
            $('.mystery-main').addClass('show-wrapper');
        },1000);

        $('#answer1').click(function(){
            $(this).addClass("selected");
            setTimeout(function() {
                checkAnswer(1);
            },2000);
        });
        $('#answer2').click(function(){
            $(this).addClass("selected")
            setTimeout(function() {
                checkAnswer(2);
            },2000);
        });
        $('#answer3').click(function(){
            $(this).addClass("selected")
            setTimeout(function() {
                checkAnswer(3);
            },2000);
        });
    
        $('#next-btn').click(function(){
            nextQuestion();
            questionNum();
        });
        nextQuestion();
    })

            // --------------------------- Learning Transition -------------------------------------

    $(".learning").click (function(){
        console.log("clicked");
        
        setTimeout(function() {
            var scifiComputerSound = document.getElementById('scfi-computer');
            scifiComputerSound.play()
        },1000);

        $('.learning-background').delay(3000).queue(function(){
            $(this).addClass('learning-blur');
        });

        $('.learning-welcome').delay(3000).queue(function(){
            $(this).addClass('learning-fade');
        });

        $('.learning-lets').delay(3000).queue(function(){
            $(this).addClass('learning-fade');
        });
    })

        // --------------------------- Learning Plants Knowledge -------------------------------------

    $(".learning-lets").click (function(){
        console.log("clicked");

        $('.learning-lets').removeClass('learning-fade');
        $('.learning-welcome').removeClass('learning-fade');

        $('.learning-welcome-two').delay(1000).queue(function(){
            $(this).addClass('learning-fade');
        });

        setTimeout(function(){
            $('.learning-welcome-two').removeClass('learning-fade');
        },5000);

        $('.learning-main').delay(6000).queue(function(){
            $(this).addClass('learning-main-delay');
        });

        $('.learning-main').delay(6000).queue(function(){
            $(this).addClass('learning-main-delay');
        });

        $('.learning-plant').delay(6000).queue(function(){
            $(this).addClass('learning-fade');
        });

        $('.learning-plant-intro').delay(6000).queue(function(){
            $(this).addClass('learning-fade');
        });

        $('.rose').delay(6000).queue(function(){
            $(this).addClass('learning-fade');
        });

        $('.sunflower').delay(6000).queue(function(){
            $(this).addClass('learning-fade');
        });

        $('.tulip').delay(6000).queue(function(){
            $(this).addClass('learning-fade');
        });
    })

    $(".rose").click (function(){
        console.log("clicked");
        $('.rose-learning').addClass('learning-fade');
        plantNum();
    })

    $(".sunflower").click (function(){
        console.log("clicked");
        $('.sunflower-learning').addClass('learning-fade');
        plantNum();
    })

    $(".tulip").click (function(){
        console.log("clicked");
        $('.tulip-learning').addClass('learning-fade');
        plantNum();
    })

    var totalPlants=0;

function plantNum(){
    totalPlants++;
    if(totalPlants==3){
        $('.plant-next').delay(1000).queue(function(){
            $(this).addClass('learning-fade');
        });
    }
}

    // --------------------------- Learning Parts Knowledge -------------------------------------

$(".plant-next").click (function(){
    console.log("clicked");
    $('.learning-plants').addClass('learning-fade-out');

    $('.learning-part-two').delay(1000).queue(function(){
        $(this).addClass('learning-fade');
    });

    setTimeout(function(){
        $('.learning-part-two').removeClass('learning-fade');
    },5000);

    setTimeout(function(){
        $('.learning-part-intro').addClass('learning-fade');
    },6000);

    setTimeout(function(){
        $('.plant-placeholder').addClass('learning-fade');
        $('.circle-one').addClass('learning-fade');
        $('.circle-two').addClass('learning-fade');
        $('.circle-three').addClass('learning-fade');
        $('.circle-four').addClass('learning-fade');
        $('.circle-five').addClass('learning-fade');
    },6000);
})

$(".circle-one").click (function(){
    console.log("clicked");
    $('.root-fact').addClass('learning-fade');
    partsNum();
})

$(".circle-two").click (function(){
    console.log("clicked");
    $('.seed-fact').addClass('learning-fade');
    partsNum();
})

$(".circle-three").click (function(){
    console.log("clicked");
    $('.leaf-fact').addClass('learning-fade');
    partsNum();
})

$(".circle-four").click (function(){
    console.log("clicked");
    $('.stem-fact').addClass('learning-fade');
    partsNum();
})

$(".circle-five").click (function(){
    console.log("clicked");
    $('.petal-fact').addClass('learning-fade');
    partsNum();
})

var totalParts=0;

function partsNum(){
    totalParts++;
    if(totalParts==5){
        $('.parts-next').delay(1000).queue(function(){
            $(this).addClass('learning-fade');
        });
    }
}

$(".parts-next").click (function(){
    console.log("clicked");
    $('.learning-parts').addClass('learning-fade-out');
    $('.learning-main').addClass('learning-fade-out');

    $('.learning-background').delay(1000).queue(function(){
        $(this).removeClass('learning-blur');
    });

    $('.learning-finish').delay(1000).queue(function(){
        $(this).addClass('learning-fade');
    });

    $('.learning-lets-finish').delay(1000).queue(function(){
        $(this).addClass('learning-fade');
    });

})


	// --------------------------- Menu Page -------------------------------------

    $('.label').click(function(){
		transition(".label-the-plant","push-left");
	});

	$('.mystery').click(function(){
		transition(".mystery-plant","push-right");
	});

    $('.mystery-home').click(function(){
		transition(".main","fade");
	});

    $('.label-home').click(function(){
		transition(".main","fade");
	});

	$('.learning').click(function(){
		transition(".learning-home","fade");
	});

    $('.learning-lets-finish').click(function(){
		transition(".main","fade");
	});

    // --------------------------- Other Pages -------------------------------------



	$('.p2-button').click(function(){
		transition(".page-yourPageID3","push-right");
	});

	$('.p-menu-button').click(function(){
		transition(".page-menu","fade");
	});

    $(".games").click (function(){
        console.log("clicked");
        $('.games').removeClass('show-main-buttons');
        $('.learning').removeClass('show-main-buttons');
        $('.game-menu-buttons').removeClass('game-menu-buttons-hidden')
        
        $('.label').delay(1000).queue(function(){
		    $(this).addClass('show-game-buttons');
	    });

        $('.mystery').delay(1000).queue(function(){
		    $(this).addClass('show-game-buttons');
	    });

        $('.game-menu-buttons').delay(1000).queue(function(){
		    $(this).removeClass('game-menu-buttons-hidden');
	    });
    })

});

// --------------------------- Transition Pages -------------------------------------

/* This code modified from Sitepoint book "Build Mobile websites and apps
   for Smart Devices", Castledine, Eftos, Wheeler (2011) */

function transition(toPage, type){
	var toPage = $(toPage),
    	fromPage = $(".pages .current"); 

    toPage
    .addClass("current " + type + " in")
    .one("msAnimationEnd animationend oAnimationEnd", function(){ 
      fromPage.removeClass("current " + type + " out" );
      toPage.removeClass(type + " in");
    });
  fromPage.addClass(type + " out ");
}

    // --------------------------- Learning Game Data -------------------------------------


var quizData = [
    { 
     question:("<img src='images/sunflower-off.svg'/>"),
     answers:["Sunflower","Rose","Lavender"],
     correctAnswer:1,
     feedback:("<img src='images/sunflower.svg'/>"),
    },
     {
     question:("<img src='../images/tulip-off.svg'/>"),
     answers:["Daisy","Orchid","Tulip"],
     correctAnswer:3,
     feedback:("<img src='images/tulip.svg'/>"),
    },
    {
     question:("<img src='images/rose-off.svg'/>"),
     answers:["Iris","Rose","Hibsiscus"],
     correctAnswer:2,
     feedback:("<img src='images/rose.svg'/>"),
    },
    {
     question:("<img src='../images/mystery-background.svg'/>"),
     answers:["Iris","Rose","Hibsiscus"],
     feedback:(""),
    },
];


var currentQuestion = 0;
var totalQuestions = quizData.length;
var score = 1;
var numberQuestion = 0;

function showQuestion(){
$("#question").html(quizData[currentQuestion-1].question);
$("#answer1").html(quizData[currentQuestion-1].answers[0]);
$("#answer2").html(quizData[currentQuestion-1].answers[1]);
$("#answer3").html(quizData[currentQuestion-1].answers[2]);
$("#feedback").html(quizData[currentQuestion-1].feedback);
$("#pageNumber").html(currentQuestion+ "/3");
}

function nextQuestion(){
currentQuestion++;

showQuestion();

$("#next-btn").addClass("hidden");
$("#feedback").addClass("hidden");

$('.answer-box').removeClass("correct incorrect");
}

function checkAnswer(selectedAnswer){
var theCorrectAnswer = quizData[currentQuestion-1].correctAnswer;

$('.answer-box').removeClass("selected");


$( ".answer-box" ).each(function( index ) {
  if((index+1)==theCorrectAnswer){
      $( this ).addClass("correct");
  } else {
      $( this ).addClass("incorrect");
  }
});

if(selectedAnswer==theCorrectAnswer){
    score +=1;
    $(".score").html(score);
} else {
    score += 1;
    $(".score").html(score);
}

$("#next-btn").removeClass("hidden");
$("#feedback").removeClass("hidden");
}

var totalCorrect=0;

function questionNum(){
    totalCorrect++;
    if(totalCorrect==3){
        $(answersAndFeedback).addClass("hidden-final");
        $(pageNumber).addClass("hide-page-num");

        $('.background-lights').addClass('lights-final');
        $('.game-over').delay(1000).queue(function(){
            $(this).addClass('game-final');
        });
        $('.mystery-home').delay(1000).queue(function(){
            $(this).addClass('mystery-home-final');
        });

    }
}

$(document).ready(function(){
    $('.drag-me').draggable({snap:".target"});

    $('.target-roots').droppable({
        accept:".roots",
        drop: function( event, ui ) {
            addToCorrectLabel();
            placedLabel();
        }
    });

    $('.target-flower').droppable({
        accept:".flower",
        drop: function( event, ui ) {
            addToCorrectLabel();
            placedLabel();
        }
    });

    $('.target-seed').droppable({
        accept:".seed",
        drop: function( event, ui ) {
            addToCorrectLabel();
            placedLabel();
        }
    });

    $('.target-leaf').droppable({
        accept:".leaf",
        drop: function( event, ui ) {
            addToCorrectLabel();
            placedLabel();
        }
    });

    $('.target-stem').droppable({
        accept:".stem",
        drop: function( event, ui ) {
            addToCorrectLabel();
            placedLabel();
        }
    });
});

    var totalCorrectLabel=0;
    var totalPlacedLabel=0;

    function addToCorrectLabel(){
        totalCorrectLabel++;
        if(totalCorrectLabel==5){
            $('.label-main-game').delay(1000).queue(function(){
                $(this).addClass('hide-label-main-game');
            });

            $('.label-main').delay(1000).queue(function(){
                $(this).removeClass('label-main-delay');
            });

            setTimeout(function(){
                $('.label-background').removeClass('background-blur');
                $('.label-placeholder').removeClass('background-blur');
            },1000);

            $('.label-game-over').delay(2000).queue(function(){
                $(this).addClass('label-game-final');
            });
            $('.label-home').delay(2000).queue(function(){
                $(this).addClass('label-home-final');
            });
        } 
    }
