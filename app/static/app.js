function sent_msg() {
    $.ajax({
        url:'/aaaa',
        type:'POST',
        data:{
            'url':location.href,
        }
    })
    .done((result) => {
        console.log(result);
        $('#bbb').text(result["XXXXXXXX"]);
    })
    .fail((result) => {
        $('#bbb').text('エラー');
    })
}

$(function () {
    $('#aaa').on('click',sent_msg);
});