$("#homeMenu").css("display", "flex");

$("#tutorial-home-screen").css("display", "block");

// $(' #step-1').append(startButton).addClass('selected-step')

$('.manager-speech').empty().append(speech1)

$('#tutorial-start-button').click(function(){
    $("#homeMenu").css("display", "none");
    $("#tacticsMenu").css("display", "flex");
    $('.manager-speech').empty().append(speech2);

    $('#menu-tactics').click(function(){
        $("#tutorial-home-screen").css("display", "none");
        $("#tactics").css("display", "block");
        $('.manager-speech').empty().append(speech3);

        $('#continue').click(function(){
            $('.manager-speech').empty().append(speech4);

            $('#continue').click(function(){
                $("#tactics").css("display", "none");
                $("#match-simulation").css("display", "block");
                $('.manager-speech').empty().append(speech5);
                console.log('match-sim');

                $('#continue2').click(function(){
                    $("#match-simulation").css("display", "none");
                    $("#tutorial-home-screen2").css("display", "block");
                    $('.manager-speech').empty().append(speech6);

                    $('#continue3').click(function(){
                        $('.manager-speech').empty().append(speech7);
                        $('#continue3').remove();
                        $("#homeMenu").css("display", "flex");
                        $("#tacticsMenu").css("display", "none");

                        $('#tutorial-start-button2').click(function(){
                            $('.manager-speech').empty().append(speech75);

                            $('#menu-stadium').click(function () {
                                $("#stadium").css("display", "block");
                                $("#tutorial-home-screen2").css("display", "none");
                                $('.manager-speech').empty().append(speech8);
                                $('#continue4').css("display", "none")
                                $('#stadium-level').html('Youth Academy, level 0')

                                $('#upgrade-stadium').click(function () {
                                    $('.manager-speech').empty().append(speech9);
                                    $('#stadium-level').html('Youth Academy, level 1')

                                    $("#homeMenu").css("display", "none");
                                    $("#tacticsMenu").css("display", "flex");

                                    $('#menu-youth').click(function () {
                                        $("#stadium").css("display", "none");
                                        $("#youth-development").css("display", "block");
                                        $('.manager-speech').empty().append(speech10);
                                        $('#continue5').css("display", "none")

                                        $('#hire-player').click(function () {
                                            $('.manager-speech').empty().append(speech105);

                                            $('#continue5').css("display", "unset").click(function () {
                                                $("#youth-development").css("display", "none");
                                                $("#tutorial-home-screen3").css("display", "block");
                                                $('.manager-speech').empty().append(speech11);


                                                $('#tutorial-start-button3').click(function(){
                                                    $('.manager-speech').empty().append(speech12);

                                                    $('#menu-training').click(function(){
                                                        $("#tutorial-home-screen3").css("display", "none");
                                                        $("#training").css("display", "block");
                                                        $('.manager-speech').empty().append(speech13);
                                                        $('#continue7').css('display', 'none')

                                                        $('#continue6').click(function(){
                                                            $('.manager-speech').empty().append(speech14)
                                                            $('#continue6').css('display', 'none')
                                                            $('#continue7').css('display', 'unset').click(function () {
                                                                $("#training").css("display", "none");
                                                                $("#player-profile").css("display", "block");
                                                                $('.manager-speech').empty().append(speech15)

                                                                $('#continue8').click(function(){
                                                                    $("#player-profile").css("display", "none");
                                                                    $("#tutorial-home-screen4").css("display", "block");
                                                                    $('.manager-speech').empty().append(speech16)
                                                                    $('#continue10').css('display', 'none')

                                                                    $('#continue9').click(function(){
                                                                        $('.manager-speech').empty().append(speech17)
                                                                        $('#continue9').css('display', 'none')

                                                                        $('#tutorial-start-button4').click(function(){
                                                                            $('.manager-speech').empty().append(speech18)
                                                                            $('#continue10').css('display', 'unset').click(function () {
                                                                                $("#tutorial-home-screen4").css("display", "none");
                                                                                $("#player-profile2").css("display", "block");
                                                                                $("#continue10, #continue11").css("display", "none");
                                                                                $('.manager-speech').empty().append(speech19)

                                                                                $('#transfer-list-player').click(function() {

                                                                                    $('.manager-speech').empty().append(speech20)
                                                                                    $("#continue11").css("display", "unset").click(function () {
                                                                                        $('.manager-speech').empty().append(speech21)
                                                                                        $("#continue11").css("display", "none")
                                                                                        $('#tacticsMenu').css("display", "none")
                                                                                        $('#transferMenu').css("display", "flex")

                                                                                        $('#menu-transfer').click(function() {
                                                                                            $('.manager-speech').empty().append(speech22)
                                                                                            $("#player-profile2").css("display", "none");
                                                                                            $("#transfer").css("display", "block");
                                                                                            $("#continue12").css("display", "none")

                                                                                            $('#bid-player').click(function(){
                                                                                                $('.manager-speech').empty().append(speech23)
                                                                                                $("#continue12").css("display", "unset").click(function () {
                                                                                                    $('.manager-speech').empty().append(speech24)
                                                                                                    $("#continue12").css("display", "none")
                                                                                                    $('#menu-bids').click(function(){
                                                                                                        $("#transfer").css("display", "none");
                                                                                                        $("#bidding").css("display", "block");

                                                                                                        $('.manager-speech').empty().append(speech25)
                                                                                                        $('#continue13').click(function(){
                                                                                                            $("#bidding").css("display", "none");
                                                                                                            $("#tutorial-home-screen5").css("display", "block");
                                                                                                            $('.manager-speech').empty().append(speech26)

                                                                                                            $('#tutorial-start-button5').click(function(){
                                                                                                                $('.manager-speech').empty().append(speech27)
                                                                                                                $("#transferMenu").css("display", "none");
                                                                                                                $("#leagueMenu").css("display", "flex");
                                                                                                                $('#top-division').css("display", "none");
                                                                                                                $('#continue15').css("display", "none");

                                                                                                                $('#menu-league').click(function(){
                                                                                                                    $("#tutorial-home-screen5").css("display", "none");
                                                                                                                    $("#league").css("display", "block");


                                                                                                                    $('.manager-speech').empty().append(speech28)
                                                                                                                    $('#continue14').click(function(){
                                                                                                                        $("#continue14").css("display", "none");
                                                                                                                        $('.manager-speech').empty().append(speech29)
                                                                                                                        $('#top-division').css("display", "unset").click(function () {
                                                                                                                            $('.manager-speech').empty().append(speech30)
                                                                                                                            $('#top-division').css("display", "none")
                                                                                                                            $('#continue15').css("display", "block").click(function () {
                                                                                                                                $("#league").css("display", "none");
                                                                                                                                $("#club").css("display", "block");
                                                                                                                                $('.manager-speech').empty().append(speech31)

                                                                                                                                $('#continue16').click(function(){
                                                                                                                                    $("#club").css("display", "none");
                                                                                                                                    $("#tutorial-home-screen6").css("display", "block");
                                                                                                                                    $('.manager-speech').empty().append(speech32)
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            });
        });
    });
});
