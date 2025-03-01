$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var hearts = $(".heart");

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");

        // Show hearts with a slight delay to sync with animation
        setTimeout(function() {
            hearts.css("display", "block"); 
        }, 400); // Adjust timing to match animation
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");

        // Hide hearts instantly
        hearts.css("display", "none");
    }

    envelope.click(openEnvelope);
    btn_open.click(openEnvelope);
    btn_reset.click(closeEnvelope);
});

