(function (root, factory) {if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('echarts'));
} else {
    // Browser globals
    factory({}, root.echarts);
}
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
        '#ffe65e',
        '#e7b7be',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
    ];

    var theme = {

        color: colorPalette,

        title: {
            textStyle: {
                fontWeight: 'normal'
            }
        },

        visualMap: {
            color:['#1D2B64','#7AA1D2','#e7b7be']
        },

        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#06467c'
                }
            }
        },

        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.6)'
        },

        dataZoom: {
            dataBackgroundColor: '#dedede',
            fillerColor: 'rgba(154,217,247,0.2)',
            handleColor: '#005eaa'
        },

        timeline: {
            lineStyle: {
                color: '#005eaa'
            },
            controlStyle: {
                normal: {
                    color: '#005eaa',
                    borderColor: '#005eaa'
                }
            }
        },

        candlestick: {
            itemStyle: {
                normal: {
                    color: '#c12e34',
                    color0: '#2b821d',
                    lineStyle: {
                        width: 1,
                        color: '#c12e34',
                        color0: '#2b821d'
                    }
                }
            }
        },

        graph: {
            color: colorPalette
        },

        map: {
            label: {
                normal: {
                    textStyle: {
                        color: '#c12e34'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#666666',
                    areaColor: '#dedede'
                },
                emphasis: {
                    areaColor: '#FFE65E'
                }
            }
        },

        // gauge: {
        //     axisLine: {
        //         show: true,
        //         lineStyle: {
        //             //color: [[0.2, '#2b821d'],[0.8, '#005eaa'],[1, '#c12e34']],
        //             color: '#fff',
        //             width: 5
        //         }
        //     },
        //     axisTick: {
        //         splitNumber: 10,
        //         length:8,
        //         lineStyle: {
        //             color: '#d5d9dc'
        //         }
        //     },
        //     axisLabel: {
        //         show: true,
        //         textStyle: {
        //             color: '#d5d9dc'
        //         }
        //     },
        //     splitLine: {
        //         length: 12,
        //         lineStyle: {
        //             color: '#d5d9dc'
        //         }
        //     },
        //     pointer: {
        //         length: '90%',
        //         width: 3,
        //         color: '#d5d9dc'
        //     },
        //     title: {
        //         textStyle: {
        //             color: '#d5d9dc'
        //         }
        //     },
        //     detail: {
        //         textStyle: {
        //             color: '#d5d9dc'
        //         }
        //     }
        // }
    };


    echarts.registerTheme('shine', theme);
}));