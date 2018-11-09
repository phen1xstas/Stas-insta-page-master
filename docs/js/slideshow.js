$(document).ready(function () {

    var slideIndex = 0;

    showPhotos();

    function showPhotos() {
        var i;
        var slides = $('#instafeed a');

        // Запускаем цикл для скрытия фотографий
        for (i = 0; i < slides.length; i++) {

            $(slides[i]).hide();

        }
        //Считаем фотографии и сбрасывам счетчик когда количество доходит до макс. кол-ва фото...

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }


        $(slides[slideIndex - 1]).show();

        setTimeout(showPhotos, 600);
    }

});