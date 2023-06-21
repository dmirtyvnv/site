$(function() {
    const $gallery = $('.gallery');
    const $modal = $('.modalgalery');
    const $modalContent = $('.modal-content');

    $gallery.on('click', 'img', function() {
        const $clonedImg = $(this).clone();
        // alert("ss");
        $modalContent.append($clonedImg);
        $modal.show();
    });

    $modal.on('click', function() {
        $modal.hide();
        $modalContent.empty();
    });
});
$(function() {
    const $gallery = $('.gallery');
    const $modal = $('.modalgalery');
    const $modalContent = $('.modal-content');

    $gallery.on('click', 'img', function() {
        $currentImg = $(this);
        $modal.show();

        $modalContent.on('click', function() {
            const $nextImg = $currentImg.nextAll().first();

            if ($nextImg.length) {
                $currentImg = $nextImg;
            } else {
                $currentImg = $gallery.children().first();
            }

            $clonedImg.attr('src', $currentImg.attr('src'));
        });

        $('body').on('keydown', function(event) {
            if (event.which === 27) { // ESC
                $modal.hide();
                $modalContent.empty();
            } else if (event.which === 37) { // left arrow
                const $prevImg = $currentImg.prevAll().first();

                if ($prevImg.length) {
                    $currentImg = $prevImg;
                } else {
                    $currentImg = $gallery.children().last();
                }

                $clonedImg.attr('src', $currentImg.attr('src'));
            } else if (event.which === 39) { // right arrow
                const $nextImg = $currentImg.nextAll().first();

                if ($nextImg.length) {
                    $currentImg = $nextImg;
                } else {
                    $currentImg = $gallery.children().first();
                }

                $clonedImg.attr('src', $currentImg.attr('src'));
            }
        });
    });

    $modal.on('click', function() {
        $modal.hide();
        $modalContent.empty();
    });
});
