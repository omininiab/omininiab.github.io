jQuery(document).ready(function($) {


    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /* Github Calendar - https://github.com/omininiab/github-calendar */
    GitHubCalendar("#github-graph", "omininiab");


    /* Github Activity Feed - https://github.com/omininiab/github-activity */
    GitHubActivity.feed({ username: "omininiab", selector: "#ghfeed" });


});
