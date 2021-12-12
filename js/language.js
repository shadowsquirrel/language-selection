window.onload = function() {

    // var node = parent.node;

    var revealSelection = function() {

        var delay = 150;

        setTimeout(()=>{
            $('.0-china').css({'transition':'0.8s', 'opacity':'1'});
        }, delay)

        setTimeout(()=>{
            $('.0-germany').css({'transition':'0.8s', 'opacity':'1'});
        }, 2 * delay)

        setTimeout(()=>{
            $('.0-english').css({'transition':'0.8s', 'opacity':'1'});
        }, 3 * delay)

        setTimeout(()=>{
            $('.0-spain').css({'transition':'0.8s', 'opacity':'1'});
        }, 4 * delay)

        setTimeout(()=>{
            $('.0-france').css({'transition':'0.8s', 'opacity':'1'});
        }, 5 * delay)

        setTimeout(()=>{
            $('.0-italy').css({'transition':'0.8s', 'opacity':'1'});
        }, 6 * delay)

        setTimeout(()=>{
            $('.0-korea').css({'transition':'0.8s', 'opacity':'1'});
        }, 7 * delay)

        setTimeout(()=>{
            $('.0-portugal').css({'transition':'0.8s', 'opacity':'1'});
        }, 8 * delay)

        setTimeout(()=>{
            $('.0-russia').css({'transition':'0.8s', 'opacity':'1'});
        }, 9 * delay)

        setTimeout(()=>{
            $('.0-turkey').css({'transition':'0.8s', 'opacity':'1'});
        }, 10 * delay)

        setTimeout(()=>{
            $('.0-pakistan').css({'transition':'0.8s', 'opacity':'1'});
        }, 11 * delay)

        setTimeout(()=>{
            $('.0-vietnam').css({'transition':'0.8s', 'opacity':'1'});
        }, 12 * delay)

    }

    revealSelection();


    // CHINESE
    $('#china').click(function() {

        console.log('chinese');

    })


    // GERMAN
    $('#germany').click(function() {

        console.log('german');

    })


    // ENGLISH
    $('#english').click(function() {

        console.log('english');

    })


    // SPANISH
    $('#spain').click(function() {

        console.log('spanish');

    })


    // FRENCH
    $('#france').click(function() {

        console.log('french');

    })


    // ITALIAN
    $('#italy').click(function() {

        console.log('italian');

    })


    // KOREAN
    $('#korea').click(function() {

        console.log('korean');

    })


    // PORTUGUESE
    $('#portugal').click(function() {

        console.log('portuguese');

    })


    // RUSSIAN
    $('#russia').click(function() {

        console.log('russian');

    })


    // TURKISH
    $('#turkey').click(function(event) {

        console.log('turkish');

    })


    // URDU
    $('#pakistan').click(function(event) {

        console.log('urdu');

    })


    // VIETNAM
    $('#vietnam').click(function() {

        console.log('vietnamese');

    })


}
