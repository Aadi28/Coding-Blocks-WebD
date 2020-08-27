$(() => {
    function refreshtodolist() {
        $('#list').empty()
        $.get('/todo', (data) => {
            for (let i = 0; i < data.length; i++) {
                $('#list').append(
                    $('<li>').text(data[i]).append(
                        $('<button>').text('X').attr('class', 'del')
                    )
                )
            }
        })
    }

    refreshtodolist()

    $('#btn').click(() => {
        let val = $('#inp').val()
        $.get(`/add?task=${val}`, (data) => {
            if (data == 'Success') {
                refreshtodolist()
            }
        })
    })

    $('.del').click(() => {
        let value = $(this).parent().text()
        console.log(value)
        $.get(`/del?dat=${value}`, (data) => {
            if (data == 'Success') {
                refreshtodolist()
            }
        })
    })
})