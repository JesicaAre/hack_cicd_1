function confirmarEliminacion(url, id, type = null, tableId = null) {

    let context = ''

    if (type === null) {
        context = 'eliminar'
    } else {
        context = 'reactivar'
    }

    Swal.fire({
        title: '¿Seguro que quiere ' + context + '?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, ' + context,
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url + '/' + id,
                success: function (response) {
                    // Si la respuesta es success
                    if (response.type === 1) {
                        Swal.fire(
                            'Operación realizada con éxito.',
                            response.message,
                            'success'
                        ).then(() => {
                            // Recargar el DataTable
                            $('#' + tableId).DataTable().ajax.reload();
                        });
                    } else {
                        Swal.fire(
                            'Error',
                            response.message,
                            'error'
                        );
                    }
                },
                error: function () {
                    // Si ocurre un error en la petición AJAX
                    Swal.fire(
                        'Error',
                        'Ocurrió un problema en el servidor.',
                        'error'
                    );
                }
            });
        }
    });
}

function alertas(response, tableId, modalId = null) {

    if (response.type === 1) {
        Swal.fire(
            'Operación realizada con éxito.',
            response.message,
            'success'
        ).then(() => {
            // Recargar el DataTable
            $('#' + tableId).DataTable().ajax.reload();

            if (modalId != null) {
                $('#' + modalId).modal('hide')
            }
        });
    } else {
        Swal.fire(
            'Error',
            response.message,
            'error'
        );
    }
}

function alertTecError() {
    Swal.fire(
        'Error',
        'Hubo un error. Por favor, comuníquese con el administrador.',
        'error'
    );
}