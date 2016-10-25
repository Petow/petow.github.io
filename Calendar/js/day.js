var S = KISSY;

S.config({
    packages:[
        {
            name: 'kg',
            path: 'http://g.tbcdn.cn/kg/',
            charset: 'utf-8',
            ignorePackageNameInUri: true
        }
    ]
});

if (S.Config.debug) {
    var srcPath = '../';
    S.config({
        packages:[
            {
                name: 'kg/calendar/2.0.1',
                path: srcPath,
                charset: 'utf-8',
                ignorePackageNameInUri: true
            }
        ]
    });
}

S.use('kg/calendar/2.0.1/index', function(S, Calendar) {
    var $ = S.all;
    var calendar = new Calendar({
        'container': '#J_Example'
    });

    // 设置日历个数
    $('.J_Count').on('click', function(e) {
        calendar.set('count', $(this).attr('data-count'));
        calendar.render();
    });

    // 设置节假日显示/隐藏
    $('.J_Holiday').on('click', function(e) {
        calendar.set('isHoliday', $(this).attr('data-holiday') * 1);
        calendar.render();
    });

    // 时间范围限制
    $('.J_Limit').on('click', function(e) {
        var node    = $(this);
        var isLimit = node.hasAttr('data-value');
        var today   = Calendar.DATE.stringify(new Date);

        calendar.set('date', today);
        calendar.set('minDate', isLimit ? today : '');
        calendar.set('maxDate', isLimit ? Calendar.DATE.siblings(today, node.attr('data-value')) : '');
        calendar.render();
    });

    // 下拉表单选择时间
    $('.J_Select').on('click', function(e) {
        calendar.set('isSelect', $(this).attr('data-select') * 1);
        calendar.render();
    });

    // 显示选择的日期及日期信息
    calendar.on('dateclick', function(e) {
        alert(e.date + '【'+ e.dateInfo +'】');
    });
});
