import React, { Component } from 'react'
import {Col, Form, Row} from 'antd'
import style from './captcha.less'
import $ from 'jquery'

var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];
    var colors = []
    var rand = new Array();

export default class captcha extends Component {

    constructor(){
        super();
        this.canvas = React.createRef();
    }

    drawCode = () => {
        const canvas = this.canvas.current;
        //var canvas = document.getElementById("verifyCanvas"); //获取HTML端画布
        var context = canvas.getContext("2d"); //获取画布2D上下文
        context.fillStyle = "cornflowerblue"; //画布填充色
        context.fillRect(0, 0, canvas.width, canvas.height);
        // 创建渐变
        var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        //清空画布
        context.fillStyle = 'white'; //设置字体颜色
        context.font = "25px Arial"; //设置字体
        
        var x = new Array();
        var y = new Array();
        for (var i = 0; i < 4; i++) {
            rand[i] = nums[Math.floor(Math.random() * nums.length)]
            x[i] = i * 16 + 10;
            y[i] = Math.random() * 20 + 20;
            context.fillText(rand[i], x[i], y[i]);
        }
        // console.log(rand);
        //画3条随机线
        // for (var i = 0; i < 3; i++) {
        //     this.drawline(canvas, context);
        // }
 
        // 画30个随机点
        // for (var i = 0; i < 30; i++) {
        //     this.drawDot(canvas, context);
        // }
        this.convertCanvasToImage(canvas)
 
 
        console.log(rand)
        // 点击提交进行验证
        $("#submit").click((e) => {
            console.log(rand)
            var newRand=rand.join('').toUpperCase();
            console.log(newRand);
    
            //下面就是判断是否== 的代码，无需解释
            var oValue = $('#verify').val().toUpperCase();
            console.log(oValue)
            if (oValue == 0) {
                alert('请输入验证码')
            } else if (oValue != newRand) {
                oValue = ' ';
                alert('验证码不正确')
            } else {
                // window.open('http://www.baidu.com', '_self');
                alert('验证码正确')
            }
        })
    }
 
    // 随机线
    drawline = (canvas, context) => {
        context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
        context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
        context.lineWidth = 0.5; //随机线宽
        context.strokeStyle = 'rgba(50,50,50,0.3)'; //随机线描边属性
        context.stroke(); //描边，即起点描到终点
    }
    /* // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述) */
    drawDot = (canvas, context) => {
        var px = Math.floor(Math.random() * canvas.width);
        var py = Math.floor(Math.random() * canvas.height);
        context.moveTo(px, py);
        context.lineTo(px + 1, py + 1);
        context.lineWidth = 0.2;
        context.stroke();
 
    }
    /* // 绘制图片 */
    convertCanvasToImage = (canvas) => {
        console.log( canvas = this.canvas.current)
        // document.getElementById("verifyCanvas").style.display = "none";
        var image = document.getElementById("code_img");
        image.src = canvas.toDataURL("image/png");
        return image;
    }
 
    /* // 点击图片刷新 */
    // document.getElementById('code_img').removeEventListener('click', drawCode)
    // document.getElementById('code_img').addEventListener('click', () => {
    //     $('#verifyCanvas').remove();
    //     $('#verify').after('<canvas width="100" height="40" id="verifyCanvas"></canvas>')
    //     drawCode();
    // })

    // document.getElementById('code_img').onclick = function () {
        
    // }

    componentDidMount(){
        console.log()
        this.drawCode();
         document.getElementById('code_img').removeEventListener('click',this.drawCode)
        document.getElementById('code_img').addEventListener('click', () => {
            $('#verifyCanvas').remove();
            $('#verify').after('<canvas ref={this.canvas} width="100" style={{display:"none"}} height="40" id="verifyCanvas" className={style.verifyCanvas}></canvas>')
            console.log($('#verifyCanvas'))
            this.drawCode();
        })
    }

    render() {
        return (
            <div>
                <Col span={4} className='captchaBox'>
              {/* <Button>Get captcha</Button> */}
              <div className='loginCaptcha'>
              {/* <input type="text" class="topAlign" id="verify" name="verify" required /> */}
              <div id='verify' className={style.verify}></div>
                  <canvas ref={this.canvas} width="100" style={{display:"none"}} height="40" id="verifyCanvas" className={style.verifyCanvas}></canvas>
            <img id="code_img" className={style.code_img}/>
              </div>
              
            </Col>

            </div>
        )
    }
}
