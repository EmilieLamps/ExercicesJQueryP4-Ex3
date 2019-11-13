$(function(){
    $('form').on('submit', function(event){
        var isValid = true;

        var lastName = $('#lastName').val();
        var firstName = $('#firstName').val();
        var mail = $('#mail').val();
        var phone = $('#phoneNumber').val();
        var checkName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
        var checkFirstName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
        //var checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var checkMail = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        var checkPhone = /^(0|\+33)[1-9]([-. ][0-9]{2}){4}$/;

        $('form span.text-danger').remove();

        if(!checkName.test(lastName)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un nom valide');
            $('#lastName').after(span);
        }
        if(!checkFirstName.test(firstName)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un prénom valide');
            $('#firstName').after(span);
        }
        if(!checkMail.test(mail)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un mail valide');
            $('#mail').after(span);
        }
        if(!checkPhone.test(phone)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un numéro de téléphone valide');
            $('#phoneNumber').after(span);
        }
        if(!isValid){
            event.preventDefault();
        }
    });
});
