$(document).ready(function () {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '8800004937',
        accessToken: '8800004937.1677ed0.880b3d092d674a48ac6fe595f9943660',
        resolution:'standard_resolution',
        limit:40
    });
    userFeed.run();

    setTimeout(function () {
        $('.instafeed').addClass('shadowed');
    },100 )

});