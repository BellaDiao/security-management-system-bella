<template>
  <div class="dashboard-container">
    <div ref="bar" style="width: 600px; height: 400px"></div>
    <div ref="drawCharts" style="width: 600px; height: 400px"></div>
    <div ref="drawChaets2" style="width: 600px; height: 400px"></div>
    <div id="container"></div>
    <div ref="line" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as echarts from 'echarts';
import { WordCloud } from '@antv/g2plot';
export default {
  name: 'echarts',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created () {
    this.$nextTick(function () {
      this.bar();
      this.drawCharts();
      this.cyt();
      this.line();

    })

  },
  methods: {
    bar () {
      let myChart = echarts.init(this.$refs.bar);
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    },
    drawCharts () {// 环形图
      //https://www.136.la/jingpin/show-157914.html
      let value = 1458;//当前进度
      let maxValue = 6000;//进度条最大值
      let pipe = echarts.init(this.$refs.drawCharts);

      let option = {
        title: {
          //标题内容
          text: '高风险数：',
          textStyle: {
            fontWeight: 'bold',
            fontFamily: 'Microsoft YaHei',
            fontSize: 24
          },
          //标题位置
          top: '5%',
          left: '5%'
        },
        //环形中间文字
        graphic: [
          //第一行文字
          //内容 + 位置
          {
            type: 'text',
            left: 'center',
            top: '48%',
            style: {
              //value当前进度
              text: '高风险数：' + value + '个',
              textAlign: 'center',
              fill: '#000',
              fontSize: 28
            }
          },
          //第二行文字
          //内容 + 位置
          {
            type: 'text',
            left: 'center',
            top: '55%',
            style: {
              //maxValue进度条最大值
              text: '共' + maxValue + '个',
              textAlign: 'center',
              fill: '#999',
              fontSize: 24
            }
          }
        ],
        series: [{
          type: 'pie',
          radius: ['70%', '64%'],//['外圆大小', '内圆大小']
          center: ['50%', '50%'],//圆心位置['左右'， '上下']
          hoverAnimation: false,//取消鼠标悬停动画
          animationEasing: 'cubicOut',//设置动画缓动效果
          //取消显示饼图自带数据线条
          labelLine: {
            normal: {
              show: false
            }
          },
          //增加阴影效果
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(44, 196, 196, 0.8)'
            }
          },
          data: [
            //value当前进度 + 颜色
            {
              value: value,
              itemStyle: {
                normal: {
                  color: 'white'
                }
              }
            },
            //(maxValue进度条最大值 - value当前进度) + 颜色
            {
              value: maxValue - value,
              itemStyle: {
                normal: {
                  color: '#73A0FA'
                }
              }
            }
          ]
        }]
      };
      pipe.setOption(option);
      //随着浏览器窗口大小改变而改变
      window.addEventListener("resize", function () {
        pipe.resize();
      });
    },
    drawChaets2 () {
      var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
      let myChart = echarts.init(this.$refs.drawChaets2);

      var option;
      var _panelImageURL = ROOT_PATH + '/data/asset/img/custom-gauge-panel.png';
      var _animationDuration = 1000;
      var _animationDurationUpdate = 1000;
      var _animationEasingUpdate = 'quarticInOut';
      var _valOnRadianMax = 200;
      var _outerRadius = 200;
      var _innerRadius = 170;
      var _pointerInnerRadius = 40;
      var _insidePanelRadius = 140;
      var _currentDataIndex = 0;

      function renderItem (params, api) {
        var valOnRadian = api.value(1);
        var coords = api.coord([api.value(0), valOnRadian]);
        var polarEndRadian = coords[3];
        var imageStyle = {
          image: _panelImageURL,
          x: params.coordSys.cx - _outerRadius,
          y: params.coordSys.cy - _outerRadius,
          width: _outerRadius * 2,
          height: _outerRadius * 2
        };

        return {
          type: 'group',
          children: [{
            type: 'image',
            style: imageStyle,
            clipPath: {
              type: 'sector',
              shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r: _outerRadius,
                r0: _innerRadius,
                startAngle: 0,
                endAngle: -polarEndRadian,
                transition: 'endAngle',
                enterFrom: { endAngle: 0 }
              }
            }
          }, {
            type: 'image',
            style: imageStyle,
            clipPath: {
              type: 'polygon',
              shape: {
                points: makePionterPoints(params, polarEndRadian)
              },
              extra: {
                polarEndRadian: polarEndRadian,
                transition: 'polarEndRadian',
                enterFrom: { polarEndRadian: 0 }
              },
              during: function (apiDuring) {
                apiDuring.setShape(
                  'points',
                  makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
                );
              }
            }
          }, {
            type: 'circle',
            shape: {
              cx: params.coordSys.cx,
              cy: params.coordSys.cy,
              r: _insidePanelRadius
            },
            style: {
              fill: '#fff',
              shadowBlur: 25,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(76,107,167,0.4)'
            }
          }, {
            type: 'text',
            extra: {
              valOnRadian: valOnRadian,
              transition: 'valOnRadian',
              enterFrom: { valOnRadian: 0 }
            },
            style: {
              text: makeText(valOnRadian),
              fontSize: 50,
              fontWeight: 700,
              x: params.coordSys.cx,
              y: params.coordSys.cy,
              fill: 'rgb(0,50,190)',
              align: 'center',
              verticalAlign: 'middle',
              enterFrom: { opacity: 0 }
            },
            during: function (apiDuring) {
              apiDuring.setStyle('text', makeText(apiDuring.getExtra('valOnRadian')));
            }
          }]
        };
      }

      function convertToPolarPoint (renderItemParams, radius, radian) {
        return [
          Math.cos(radian) * radius + renderItemParams.coordSys.cx,
          -Math.sin(radian) * radius + renderItemParams.coordSys.cy
        ];
      }

      function makePionterPoints (renderItemParams, polarEndRadian) {
        return [
          convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
          convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian + Math.PI * 0.03),
          convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
        ];
      }

      function makeText (valOnRadian) {
        // Validate additive animation calc.
        if (valOnRadian < -10) {
          alert('illegal during val: ' + valOnRadian);
        }
        return (valOnRadian / _valOnRadianMax * 100).toFixed(0) + '%';
      }

      option = {
        animationEasing: _animationEasingUpdate,
        animationDuration: _animationDuration,
        animationDurationUpdate: _animationDurationUpdate,
        animationEasingUpdate: _animationEasingUpdate,
        dataset: {
          source: [[1, 156]]
        },
        tooltip: {},
        angleAxis: {
          type: 'value',
          startAngle: 0,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false },
          min: 0,
          max: _valOnRadianMax
        },
        radiusAxis: {
          type: 'value',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false }
        },
        polar: {},
        series: [{
          type: 'custom',
          coordinateSystem: 'polar',
          renderItem: renderItem
        }]
      };

      setInterval(function () {
        var nextSource = [[1, Math.round(Math.random() * _valOnRadianMax)]];
        myChart.setOption({
          dataset: {
            source: nextSource
          }
        });
      }, 3000);

      option && myChart.setOption(option);
    },
    cyt () {// 词云图
      fetch('https://gw.alipayobjects.com/os/antfincdn/jPKbal7r9r/mock.json')
        .then((res) => res.json())
        .then((data) => {
          const wordCloud = new WordCloud('container', {
            data,
            wordField: 'x',
            weightField: 'value',
            color: '#122c6a',
            wordStyle: {
              fontFamily: 'Verdana',
              fontSize: [24, 80],
            },
            // 设置交互类型
            interactions: [{ type: 'element-active' }],
            state: {
              active: {
                // 这里可以设置 active 时的样式
                style: {
                  lineWidth: 3,
                },
              },
            },
          });

          wordCloud.render();
        });

    },
    line () {
      let myChart = echarts.init(this.$refs.line);
      let option;
      option = {
        title: {
          text: '年度趋势',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2020年', '2021年']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '1月', '1月', '1月', '1月', '1月', '1月', '1月', '1月', '1月', '1月', '1月']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 个'
          }
        },
        series: [
          {
            name: '最高',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '最低',
            type: 'line',
            data: [1, 12, 2, 5, 3, 2, 0],
            markPoint: {
              data: [
                { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' },
                [{
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                }, {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: '最大值'
                  },
                  type: 'max',
                  name: '最高点'
                }]
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
}
</script>
<style>
.center {
  position: absolute;
  width: 50%;
  height: 80%;
  box-shadow: 1px 2px 10px 0 rgba(0, 196, 196, 0.5);
  border-radius: 10px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
