
$(document).ready(function () {

    $('#openSidebar').click(function () {
        $('#sidebar').css('width', '250px');

    });


    $('#closeSidebar').click(function () {
        $('#sidebar').css('width', '0');
    });
});

const logOut = () => {

    $.ajax({
        type: 'GET',
        url: '/proyecto_beneficios/user/log-out/',
        success: () => {

        }
    })

    window.location.href = '/proyecto_beneficios/';

}
