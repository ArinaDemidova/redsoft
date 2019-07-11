$( document ) . ready ( function ()
{
    /* Ссылка на шапку */
    var $header = $( '.header', 'body' );

    /* Ссылка на кнопки управления слайдером */
    var $controls = $( '.controls', $header );

    /* Клик по кнопке слайдера */
    $( '.button', $controls ) . click ( function ()
    {
        var $this = $( this );

        /* Выход, если клик по уже активной кнопке */
        if ( $this . hasClass ( 'active' ) )
        {
            return;
        }

        /* Метка слайдера для показа */
        var $targetSlider = $this . attr ( 'target' );

        /* Активация кнопки */
        $( '.button.active', $controls ) . removeClass ( 'active' );
        $this . addClass ( 'active' );

        /* Активация слайдера */
        $( '.slider.active', $header ) . fadeOut
        (
            'fast',
            function ()
            {
                $( this ) . removeClass ( 'active' );
                $( '.slider.' + $targetSlider, $header ) . fadeIn ( 'fast' );
                $( '.slider.' + $targetSlider, $header ) . addClass ( 'active' );
            }
        );

        $header . attr ( 'target', $targetSlider );

    });
});