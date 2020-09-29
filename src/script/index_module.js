define([], function () {
    return {
        init: function () {
            const $sce1 = $('.Box_list ul');
            $.ajax({
                url: "http://192.168.13.15/WHXJS2007/php/index1.php",
                dataType: "json"
            })
                .done((data) => {
                    let $renderdata = data;
                    let $strhtml = "";
                    $.each($renderdata, function (index, value) {
                        $strhtml += `
                                    <li>
                                        <a href="">
                                            <img src="${value.url}">
                                            <div>
                                            <p>${value.title}</p>
                                            <span>${value.price}</span>
                                            </div>
                                        </a>
                                    </li>
                                `;
                    })
                    $sce1.html($strhtml);
                });




            //第一块的鼠标移入显示二维码效果
            let $two = $('.Box_top1_3_1>img')
            let $Box_top1_3_1 = $('.Box_top1_3_1')
            $Box_top1_3_1.on('mouseover', function () {
                $Box_top1_3_1.css({
                    height: '10.5vw'
                })
                $two.show()
            })
            $Box_top1_3_1.on('mouseout', function () {
                $Box_top1_3_1.css({
                    height: '2.5vw'
                })
                $two.hide()
            })


            //右边的回到顶部盒子鼠标经过效果
            var $Box_center_MD_1 = $('.Box_center_MD_1')
            var $Box_center_MD_3 = $('.Box_center_MD_3 img')
            var $phone = $('.Box_center_MD_1_phone')
            var $erweima = $('.Box_center_MD_1_2weima')
            $Box_center_MD_1.on('mouseover', function () {
                $phone.show()
            })
            $Box_center_MD_1.on('mouseout', function () {
                $phone.hide()
            })
            $Box_center_MD_3.on('mouseover', function () {
                $erweima.show()
            })
            $Box_center_MD_3.on('mouseout', function () {
                $erweima.hide()
            })





            //轮播图
            const $titles = $('.Box_center1_2 .Box_center1_2_1')
            const $items = $('.Box_center2_banner1')
            $titles.on('mouseover', function () {
                $(this).addClass('active').siblings('div').removeClass('active');
                $items.eq($(this).index()).show().siblings('div').hide();
            });

            //2.根据本地存储，显示用户信息
            if (localStorage.getItem('username')) {
                $('.login').hide();
                $('.admin').show();
                $('.admin span').html(localStorage.getItem('username'));
            }

            $('.admin a').on('click', function () {
                $('.login').show();
                $('.admin').hide();
                localStorage.removeItem('username');
            });

        }
    }
});