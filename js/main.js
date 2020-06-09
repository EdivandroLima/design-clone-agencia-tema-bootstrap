// Navbar
$(window).scroll(function(){
    if ($(".navbar").offset().top > 100){
        $(".navbar").addClass("navbar-scroll");
        $(".logo").addClass("logo-scroll");
    }
    else {
        $(".navbar").removeClass("navbar-scroll");
        $(".logo").removeClass("logo-scroll");
    }
});

// scroll section
function sc(valor) {
     $("body, html").animate({ scrollTop:    $(valor).offset().top }, 500, "swing" );
}

// Validação de formulário
(function() {
    'use strict';

    window.addEventListener('load', function() {
        // Selecione todos os campos em 'needs-validation'
        var forms = document.getElementsByClassName('needs-validation');

        // Faz um loop neles e previne envio
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();