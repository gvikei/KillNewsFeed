function removeFacebookElements() {
    var feed = 
        $('[id^=rightCol], [id^=timeline_composer_container],  [id^=topnews_main_stream], [id^=mostrecent_main_stream]');
    
    var message = $('#distracted');

    if (feed.length == 0) {
        message.remove();
    }

    feed.children().remove();
    $('.ticker_stream').remove();
    $('.ego_column').remove();
    $('#pagelet_games_rhc').remove();
    $('#pagelet_trending_tags_and_topics').remove();
    $('#pagelet_canvas_nav_content').remove();
}

function displayQuora() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.quora.com', true);
    xhr.send();
    xhr.onload = function () {
        processed_html = xhr.responseText.replace(/src="" data-src=/g, 'src=');
        processed_html = processed_html.replace(/\<img class\=\"(\w+)\"\>/g, '\<img class\=\"$1\  style\=\"opacity\: 1\;\"\>');
        $('#contentArea').children()[0].innerHTML = processed_html;
    };
}

function process() {
    window.setInterval(removeFacebookElements, 100);
    displayQuora();
}

process();
 