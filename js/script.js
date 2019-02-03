/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
            var names = pq1(0);
            var qt1 = q1(0);
            var qt2 = q2(0);
            var qt3 = q3(0);
            totalScore = names + qt1 + qt2 + qt3;
            $("body").text(totalScore);
        
        function pq1(score) {
            return score + 2;
        }
        
        function q1(score) {
            if(q1Result.length <= 6) {
                return score + 3;
            } else if(q1Result.length >= 9) {
                return score + 5;
            } else {
                return score + 2;
            }
        }
        
        function q2(score) {
            if(q2Result <= 7) {
                return score + 3;
            } else if(q2Result.length <= 8) {
                return score + 3;
            } else {
                return score + 3;
            }
        }
        
        function q3(score) {
            if(q3Result.length < 5) {
                return score + 2;
            } else if(q3Result.length < 8) {
                return score + 4;
            } else {
                return score + 6;
            }
        }
        
    });
});
