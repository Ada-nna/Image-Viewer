document.addEventListener('DOMContentLoaded', function () {
    const images = ['1', '2', '3', '4', '5', '6'];
    const imageFolder = document.querySelector('.imageContainer');
    const arrows = document.querySelectorAll('.btn');
    let counter = 0;

    function updateImage() {
        imageFolder.style.background = `url('images/${images[counter]}.jpg')`;
        imageFolder.style.backgroundSize = 'contain';
        imageFolder.style.backgroundRepeat = 'no-repeat';
        imageFolder.style.backgroundPosition = 'center';
    }

    arrows.forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (item.classList.contains('btn-left')) {
                counter--;
                if (counter < 0) {
                    counter = images.length - 1;
                }
                updateImage();
            };

            if (item.classList.contains('btn-right')) {
                counter++;
                if (counter > images.length - 1) {
                    counter = 0;
                }
                updateImage();
            };
        });
    });
});
