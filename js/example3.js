(function () {
    require.config({
        paths: {
            echarts: 'js/dist'
        },
        packages: [
            {
                name: 'BMap',
                location: 'js',
                main: 'main'
            }
        ]
    });

    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map',
        'echarts/chart/scatter',
        'echarts/echarts'
    ],
    function (echarts, BMapExtension) {
  
        // 初始化地图
        var BMapExt = new BMapExtension($('#main')[0], BMap, require('echarts'), require('zrender'));
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();
        var startPoint = {
            x: 104.114129,
            y: 37.550339
        };
        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 5);
        map.enableScrollWheelZoom(true);

        // 地图自定义样式
        map.setMapStyle({
            styleJson: [
                // 陆地
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#073763"
                    }
                },
                // 水系
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#073763",
                        "lightness": -54
                    }
                },
                // 国道与高速
                {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                        "color": "#45818e"
                    }
                },
                // 边界线
                {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                        "color": "#ffffff",
                        "lightness": -62,
                        "visibility": "on"
                    }
                },
                // 行政标注
                {
                    "featureType": "label",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#ffffff",
                        "visibility": "on"
                    }
                },
                {
                    "featureType": "label",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#444444",
                        "visibility": "on"
                    }
                }
            ]
        });

        var placeList = [
            {name:'上海', geoCoord:[121.48, 31.22]},
            {name:'厦门', geoCoord:[118.1, 24.46]},
            {name:'太原', geoCoord:[112.53, 37.87]},
            {name:'深圳', geoCoord:[114.07, 22.62]},
            {name:'大连', geoCoord:[121.62, 38.92]},
            {name:'沈阳', geoCoord:[123.38, 41.8]},
            {name:'苏州', geoCoord:[120.62, 31.32]},

            // {name:'吉林', geoCoord:[126.57, 43.87]},
            // {name:'呼和浩特', geoCoord:[111.65, 40.82]},
            // {name:'成都', geoCoord:[104.06, 30.67]},
            // {name:'镇江', geoCoord:[119.44, 32.2]},
            // {name:'西安', geoCoord:[108.95, 34.27]},
            // {name:'常州', geoCoord:[119.95, 31.79]},
            // {name:'重庆', geoCoord:[106.54, 29.59]},
            // {name:'南京', geoCoord:[118.78, 32.04]},
            // {name:'无锡', geoCoord:[120.29, 31.59]},
            // {name:'北京', geoCoord:[116.46, 39.92]},
            // {name:'徐州', geoCoord:[117.2, 34.26]},
            // {name:'杭州', geoCoord:[120.19, 30.26]},
            // {name:'济南', geoCoord:[117, 36.65]},
            // {name:'天津', geoCoord:[117.2, 39.13]},
            // {name:'郑州', geoCoord:[113.65, 34.76]},
            // {name:'哈尔滨', geoCoord:[126.63, 45.75]},
            // {name:'石家庄', geoCoord:[114.48, 38.03]},
            // {name:'岳阳', geoCoord:[113.09, 29.37]},
            // {name:'长沙', geoCoord:[113, 28.21]},
            // {name:'合肥', geoCoord:[117.27, 31.86]},
            // {name:'武汉', geoCoord:[114.31, 30.52]},
        ];
        var priceData = [
            {name:'上海', value:50066},
            {name:'厦门', value:47903},
            {name:'太原', value:9386},
            {name:'深圳', value:47703},
            {name:'大连', value:10362},
            {name:'沈阳', value:7946},
            {name:'苏州', value:15355},

            // {name:'吉林', value:Math.round(Math.random()*1000)},
            // {name:'呼和浩特', value:Math.round(Math.random()*1000)},
            // {name:'成都', value:Math.round(Math.random()*1000)},
            // {name:'镇江', value:Math.round(Math.random()*1000)},
            // {name:'西安', value:Math.round(Math.random()*1000)},
            // {name:'常州', value:Math.round(Math.random()*1000)},
            // {name:'重庆', value:Math.round(Math.random()*1000)},
            // {name:'南京', value:Math.round(Math.random()*1000)},
            // {name:'无锡', value:Math.round(Math.random()*1000)},
            // {name:'北京', value:Math.round(Math.random()*1000)},
            // {name:'徐州', value:Math.round(Math.random()*1000)},
            // {name:'杭州', value:Math.round(Math.random()*1000)},
            // {name:'济南', value:Math.round(Math.random()*1000)},
            // {name:'天津', value:Math.round(Math.random()*1000)},
            // {name:'郑州', value:Math.round(Math.random()*1000)},
            // {name:'哈尔滨', value:Math.round(Math.random()*1000)},
            // {name:'石家庄', value:Math.round(Math.random()*1000)},
            // {name:'岳阳', value:Math.round(Math.random()*1000)},
            // {name:'长沙', value:Math.round(Math.random()*1000)},
            // {name:'合肥', value:Math.round(Math.random()*1000)},
            // {name:'武汉', value:Math.round(Math.random()*1000)},

        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = placeList[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

option = {

    color: ['blue','aqua','lime'],
    title : {
        text: '城市房价价格分布',
        subtext: '数据来源安居客',
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['强','中','弱'],
        textStyle : {
            color: '#fff'
        }
    },
    tooltip: {

    },
    // toolbox: {
    //     show : true,
    //     orient : 'vertical',
    //     x: 'right',
    //     y: 'center',
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },

    series : [
            {
                name: '强',
                type: 'map',
                mapType: 'none',
                geoCoord : {
                    '北京':[116.40, 39.90],
                    '上海':[121.47, 31.23],

                    '厦门':[114.07, 22.62],
                    '深圳':[114.07, 22.62],
                    '广州':[114.07, 22.62],
                    '福州':[114.07, 22.62],
                    '南京':[114.07, 22.62],
                    '三亚':[120.62, 31.32],
                },
                data:[],

                //markpoint
                markPoint : {
                    symbolSize:6,
                    large: true,
                    effect : {
                        show: true
                    },
                    data : (function(){
                        var data = [];
                        var len = placeList.length;
                        while(len--) {
                            data.push({
                                name : placeList[len].name,
                                value : priceData[len].value,
                                geoCoord : placeList[len].geoCoord
                            })
                        }
                        return data;
                    })()
                }
            },

            {
            name: '中',
            type: 'map',
            mapType: 'none',
            geoCoord : {
                '天津':[121.48, 31.22],
                '杭州':[118.1, 24.46],
                '珠海':[112.53, 37.87],
                '义乌':[114.07, 22.62],
                '温州':[121.62, 38.92],
                '青岛':[123.38, 41.8],
                '石家庄':[120.62, 31.32],
                '宁波':[120.62, 31.32],
                '武汉':[120.62, 31.32],
                '济南':[120.62, 31.32],
                '苏州':[120.62, 31.32],

                // '吉林':[126.57, 43.87],
                // '呼和浩特':[111.65, 40.82],
                // '成都':[104.06, 30.67],
                // '镇江':[119.44, 32.2],
                // '西安':[108.95, 34.27],
                // '常州':[119.95, 31.79],
                // '重庆':[106.54, 29.59],
                // '南京':[118.78, 32.04],
                // '无锡':[120.29, 31.59],
                // '北京':[116.46, 39.92],
                // '徐州':[117.2, 34.26],
                // '杭州':[120.19, 30.26],
                // '济南':[117, 36.65],
                // '天津':[117.2, 39.13],
                // '郑州':[113.65, 34.76],
                // '哈尔滨':[126.63, 45.75],
                // '石家庄':[114.48, 38.03],
                // '岳阳':[113.09, 29.37],
                // '长沙':[113, 28.21],
                // '合肥':[117.27, 31.86],
                // '武汉':[114.31, 30.52]
            },
            data:[],

            //markpoint
            markPoint : {
                symbolSize:6,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = placeList.length;
                    while(len--) {
                        data.push({
                            name : placeList[len].name,
                            value : priceData[len].value,
                            geoCoord : placeList[len].geoCoord
                        })
                    }
                    return data;
                })()
            }
        },

        {
            name: '弱',
            type: 'map',
            mapType: 'none',
            geoCoord : {
                '上海':[121.48, 31.22],
                '厦门':[118.1, 24.46],
                '太原':[112.53, 37.87],
                '深圳':[114.07, 22.62],
                '大连':[121.62, 38.92],
                '沈阳':[123.38, 41.8],
                '苏州':[120.62, 31.32],

                // '吉林':[126.57, 43.87],
                // '呼和浩特':[111.65, 40.82],
                // '成都':[104.06, 30.67],
                // '镇江':[119.44, 32.2],
                // '西安':[108.95, 34.27],
                // '常州':[119.95, 31.79],
                // '重庆':[106.54, 29.59],
                // '南京':[118.78, 32.04],
                // '无锡':[120.29, 31.59],
                // '北京':[116.46, 39.92],
                // '徐州':[117.2, 34.26],
                // '杭州':[120.19, 30.26],
                // '济南':[117, 36.65],
                // '天津':[117.2, 39.13],
                // '郑州':[113.65, 34.76],
                // '哈尔滨':[126.63, 45.75],
                // '石家庄':[114.48, 38.03],
                // '岳阳':[113.09, 29.37],
                // '长沙':[113, 28.21],
                // '合肥':[117.27, 31.86],
                // '武汉':[114.31, 30.52]
            },
            data:[],

            //markpoint
            markPoint : {
                symbolSize:6,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = placeList.length;
                    while(len--) {
                        data.push({
                            name : placeList[len].name,
                            value : priceData[len].value,
                            geoCoord : placeList[len].geoCoord
                        })
                    }
                    return data;
                })()
            }
         }

    ]
};


        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.resize;
        BMapExt.setOption(option);

    }
);
})();