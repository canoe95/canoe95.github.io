(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1092:function(v,_,t){v.exports=t.p+"assets/img/image-20220517200346849.2403e63a.png"},1093:function(v,_,t){v.exports=t.p+"assets/img/image-20220517203842874.b49a5244.png"},1094:function(v,_,t){v.exports=t.p+"assets/img/image-20220520142408967.5311b8eb.png"},1095:function(v,_,t){v.exports=t.p+"assets/img/image-20220520154817887.41dc5c0f.png"},1096:function(v,_,t){v.exports=t.p+"assets/img/image-20220525151801481.4e367c42.png"},1097:function(v,_,t){v.exports=t.p+"assets/img/image-20220525152525229.75672145.png"},1098:function(v,_,t){v.exports=t.p+"assets/img/image-20220525154919487.10b6270e.png"},1099:function(v,_,t){v.exports=t.p+"assets/img/image-20220525181501454.9d82a031.png"},1100:function(v,_,t){v.exports=t.p+"assets/img/image-20220525185945030.c62d720c.png"},1101:function(v,_,t){v.exports=t.p+"assets/img/image-20220525190359474.ac977421.png"},1102:function(v,_,t){v.exports=t.p+"assets/img/image-20220525191855563.998052c6.png"},1103:function(v,_,t){v.exports=t.p+"assets/img/image-20220525202008843.7525eb84.png"},1104:function(v,_,t){v.exports=t.p+"assets/img/image-20220525202856398.191259e1.png"},1105:function(v,_,t){v.exports=t.p+"assets/img/image-20220526205611768.a4a62022.png"},1480:function(v,_,t){"use strict";t.r(_);var d=t(1),p=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"触发器"}},[v._v("触发器")]),v._v(" "),_("h3",{attrs:{id:"概述"}},[v._v("概述")]),v._v(" "),_("blockquote",[_("p",[v._v("所有软件算法都是在硬件基础上实现的")]),v._v(" "),_("p",[v._v("数据是怎么存在内存里的")])]),v._v(" "),_("p",[v._v("如何去记忆一个电信号")]),v._v(" "),_("p",[v._v("触发器：能够存储1位值信号的基本单元电路")]),v._v(" "),_("p",[v._v("基本特性")]),v._v(" "),_("ul",[_("li",[v._v("具有两个自行保持的稳定状态，表示0/1")]),v._v(" "),_("li",[v._v("根据不同的输入信号可以置成1/0")])]),v._v(" "),_("p",[v._v("触发器的作用：记录数值信号，如用8个触发器记录一个8位二进制数储存ASCII码代表字符")]),v._v(" "),_("p",[v._v("不仅取决于该时刻的输入，还和电路原来的状态有关")]),v._v(" "),_("p",[v._v("半导体存储器：一种能存储大量二值信息的半导体器件（硬盘、内存条）")]),v._v(" "),_("p",[v._v("性能指标：存储量、存取速度")]),v._v(" "),_("p",[v._v("电路结构特点：存储单元数目多，但器件的引脚数目有限 ——> 给每个存储单元编地址，与总线连接后才可传输")]),v._v(" "),_("p",[v._v("触发器的类型：")]),v._v(" "),_("p",[v._v("根据功能")]),v._v(" "),_("ul",[_("li",[v._v("RS触发器")]),v._v(" "),_("li",[v._v("JK触发器")]),v._v(" "),_("li",[v._v("T触发器，T’触发器")]),v._v(" "),_("li",[v._v("D触发器")])]),v._v(" "),_("p",[v._v("根据原理")]),v._v(" "),_("ul",[_("li",[v._v("动态触发器（MOS管栅极输入电容上存储电荷来存储数据）")]),v._v(" "),_("li",[v._v("静态触发器（电路状态的自锁存储数据）")])]),v._v(" "),_("h3",{attrs:{id:"sr锁存器"}},[v._v("SR锁存器")]),v._v(" "),_("blockquote",[_("p",[v._v("又称基本RS触发器")])]),v._v(" "),_("h4",{attrs:{id:"电路结构和工作原理"}},[v._v("电路结构和工作原理")]),v._v(" "),_("p",[v._v("对于一个或非门："),_("code",[v._v("Vo1 = (VI1 + A)'")])]),v._v(" "),_("p",[v._v("当A=1时，输入VI1与输出无关，一定输出低电平")]),v._v(" "),_("p",[v._v("当A=1时，输入端变化引起输出端变化（输入位高，输出为低；输入为低，输出为高）")]),v._v(" "),_("p",[v._v("联合两个或非门，单个或非门的输出为另一个或非门的输入之一")]),v._v(" "),_("img",{attrs:{src:t(1092)}}),v._v(" "),_("p",[v._v("VI1一开始为1，使得VO1为0，VO2为1")]),v._v(" "),_("p",[v._v("当VI1变为0，由于VO2为1，之前的状态仍然保持，不会跟随VI1改变而改变，输出不变")]),v._v(" "),_("p",[v._v("只有当VI2输入也改变时，这个状态才会被打破")]),v._v(" "),_("ul",[_("li",[v._v("此之谓记忆功能")])]),v._v(" "),_("h5",{attrs:{id:"或非门的rs触发器"}},[v._v("或非门的RS触发器")]),v._v(" "),_("p",[v._v("两个输入端、两个输出端，在各自的输出端中牵出一根并联线去组成另一个或非门的输入端")]),v._v(" "),_("p",[v._v("Q为第一个或非门的输出端，Q'为第二个或非门的输出端：")]),v._v(" "),_("p",[v._v("当Q=1，Q'=0，称为触发器的1状态，记为Q=1")]),v._v(" "),_("p",[v._v("当Q=0，Q'=1，称为触发器的0状态，即为Q=0")]),v._v(" "),_("p",[v._v("初态（Qn）：触发器在接收触发信号之前的状态，也叫原态")]),v._v(" "),_("p",[v._v("次态：触发器在接收信号之后所建立的新的稳定状态，也叫未态")]),v._v(" "),_("p",[v._v("触发器的特性表（功能表）：含有状态变量的真值表")]),v._v(" "),_("ul",[_("li",[v._v("上一个状态的结果Qn可能是下一个状态的输入逻辑")]),v._v(" "),_("li",[v._v("即真值表的某一行与电路当前状态有关")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("S(D)")]),v._v(" "),_("th",[v._v("R(D)")]),v._v(" "),_("th",[v._v("Q(n)")]),v._v(" "),_("th",[v._v("Q(n+1)")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0*（不定）")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0*（不定）")])])])]),v._v(" "),_("p",[v._v("保持功能：当输入都为零，下一状态保持上一状态值")]),v._v(" "),_("p",[v._v("置1功能：当S为1，R=0，无论之前什么状态，当前态均为1")]),v._v(" "),_("ul",[_("li",[v._v("R=0说明置1信号有效")])]),v._v(" "),_("p",[v._v("置0功能：当S为0，R=1，无论之前什么状态，当前态均为0")]),v._v(" "),_("ul",[_("li",[v._v("R=1就说明置零信号有效")])]),v._v(" "),_("p",[v._v("当S=1、R=1、Q(n)=0，其结果不定，取决于微观上S/R谁先变成1。为了避免这种不确定结果，我们禁用输入同为1")]),v._v(" "),_("h5",{attrs:{id:"与非门的rs触发器"}},[v._v("与非门的RS触发器")]),v._v(" "),_("p",[v._v("由与非门组成的基本RS触发器，更常用")]),v._v(" "),_("img",{attrs:{src:t(1093)}}),v._v(" "),_("p",[v._v("低电平有效，其他与或非门基本无区别")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("R(D)'")]),v._v(" "),_("th",[v._v("S(D)'")]),v._v(" "),_("th",[v._v("Q(n+1)")]),v._v(" "),_("th",[v._v("Q(n+1)'")]),v._v(" "),_("th",[v._v("功能")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("不定")]),v._v(" "),_("td",[v._v("不定")]),v._v(" "),_("td",[v._v("不允许两个都有效")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("触发器置0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("触发器置1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("Q(n)（保持）")]),v._v(" "),_("td",[v._v("Q(n)")]),v._v(" "),_("td",[v._v("保持不变")])])])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("R(D)'")]),v._v(" "),_("th",[v._v("S(D)'")]),v._v(" "),_("th",[v._v("Q(n+1)")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("不定")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("Q(n)")])])])]),v._v(" "),_("p",[v._v("注意低电平有效，禁用"),_("code",[v._v("R(D)' = S(D)' = 0")])]),v._v(" "),_("h4",{attrs:{id:"动作特点"}},[v._v("动作特点")]),v._v(" "),_("p",[v._v("在RS触发器中，输入信号直接加在输出门上，输入信号在全部作用时间里都能有效改变Q的状态")]),v._v(" "),_("ul",[_("li",[v._v("直接置位触发器")]),v._v(" "),_("li",[v._v("直接复位触发器")])]),v._v(" "),_("p",[v._v("当两个输入端均有效时，我们将Q置1，将Q'同样置1，其余情况与上述真值表保持一致")]),v._v(" "),_("ul",[_("li",[v._v("注意要根据或非门和与非门判断有效的电平")])]),v._v(" "),_("h3",{attrs:{id:"触发器-2"}},[v._v("触发器")]),v._v(" "),_("h4",{attrs:{id:"电平触发的触发器"}},[v._v("电平触发的触发器")]),v._v(" "),_("blockquote",[_("p",[v._v("靠时间信号的高电平影响输入端功能，进而控制输出端")])]),v._v(" "),_("h5",{attrs:{id:"电路结构和工作原理-2"}},[v._v("电路结构和工作原理")]),v._v(" "),_("p",[v._v("触发器和锁存器的区别在于增加了一个触发信号输入端，只有触发信号到来时，启动锁存器的功能")]),v._v(" "),_("p",[v._v("触发信号：时钟信号（CLOCK）")]),v._v(" "),_("p",[v._v("不仅仅需要出发输入信号，还要求按照一定的节拍工作，为此要增加一个时钟控制端CP")]),v._v(" "),_("ul",[_("li",[v._v("一串周期和脉宽一定的矩形脉冲")]),v._v(" "),_("li",[v._v("最简单的时钟脉冲控制端：同步触发器")])]),v._v(" "),_("p",[v._v("同步RS触发器：只有当CP=1时，输入端R/S才起作用，若CP=0，R/S将被封锁成0，对后面的储存器不产生影响（始终保持）")]),v._v(" "),_("ul",[_("li",[v._v("有时CP也叫CLK（CLOCK）")]),v._v(" "),_("li",[v._v("同步RS触发器")])]),v._v(" "),_("img",{attrs:{src:t(1094)}}),v._v(" "),_("p",[v._v("电平触发器特性表")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("CP")]),v._v(" "),_("th",[v._v("S")]),v._v(" "),_("th",[v._v("R")]),v._v(" "),_("th",[v._v("Q(n)")]),v._v(" "),_("th",[v._v("Q(n+1)")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("x")]),v._v(" "),_("td",[v._v("x")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("x")]),v._v(" "),_("td",[v._v("x")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1*")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1*")])])])]),v._v(" "),_("p",[v._v("就是在RS触发器的基础上加了一个CP控制器，CP为1时RS触发器起效，遵循上上述表，否则R/S都锁在0，输出端保持")]),v._v(" "),_("p",[v._v("在这里不定的情况更容易出现，如本来R/S均为1，但CP为0，二者不起效，突然CP=1，R/S均为1，必然会出现不定")]),v._v(" "),_("ul",[_("li",[v._v("必须要对S/R取值加强约束")]),v._v(" "),_("li",[v._v("这里的CP就是时钟信号，周期性的置1和复0")])]),v._v(" "),_("h5",{attrs:{id:"动作特点-2"}},[v._v("动作特点")]),v._v(" "),_("p",[v._v("基本RS触发器，同步RS触发器：")]),v._v(" "),_("p",[v._v("在CP=1的全部时间里S/R的变化都将直接引起触发器输出端状态的变化")]),v._v(" "),_("p",[v._v("当CP=0时，触发器输出端保持原来状态不变")]),v._v(" "),_("h5",{attrs:{id:"d触发器"}},[v._v("D触发器")]),v._v(" "),_("p",[v._v("S/R输入端通过一个D输入，S=D，R=D'")]),v._v(" "),_("ul",[_("li",[v._v("如果没有特殊说明，D触发器指的是D型边沿触发器")]),v._v(" "),_("li",[v._v("为了区分这里的叫：D型锁存器")])]),v._v(" "),_("p",[v._v("这自然消除了不定的情况，R/S相反，不可能同为1，其实就表示了真值表的置0和置1功能，当CP=0时为保持，即锁存功能")]),v._v(" "),_("h4",{attrs:{id:"边沿触发的触发器"}},[v._v("边沿触发的触发器")]),v._v(" "),_("blockquote",[_("p",[v._v("我们希望在时钟信号的上升/下降时对触发器进行状态改变，而不是整个高电平时间均生效")]),v._v(" "),_("p",[v._v("为了提高可靠性，增强抗干扰能力")])]),v._v(" "),_("h5",{attrs:{id:"d锁存器的边沿触发器"}},[v._v("D锁存器的边沿触发器")]),v._v(" "),_("p",[_("strong",[v._v("用两个D锁存器组成边沿触发器")])]),v._v(" "),_("p",[v._v("共用一个"),_("code",[v._v("CLK（CP）")]),v._v("控制器，但二者反向，即第一个D锁存器CLK为1时，第二个必为0")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("CLK1 = CLK'")])]),v._v(" "),_("li",[_("code",[v._v("CLK2 = CLK")])])]),v._v(" "),_("p",[v._v("第一个D锁存器的输出G1为第二个锁存器的输入D，第二个锁存器的输出G2为边沿触发器的输出Q")]),v._v(" "),_("ul",[_("li",[v._v("当CP为0时，从触发器被封锁，输入S只作用主触发器，总输出保持不变")]),v._v(" "),_("li",[v._v("当CP从0转为1时，即上升沿这一时刻，G1的值一定是确定的（由S和R决定）")]),v._v(" "),_("li",[v._v("在CP=1了，主触发器被封锁，输入S不起作用，G1始终不变，从触发器正常工作，输出Q由G1的值决定（G1为第一个锁存器的输出，同时作为从触发器的输入）")]),v._v(" "),_("li",[v._v("当CP由1转为0时，这一时刻，G2正常输出，之后马上转为CP为1的状态，完成一次轮回")])]),v._v(" "),_("p",[v._v("整个轮回中，只有在CP的上升沿，整个边沿触发器的输出Q才会发生变化，此之谓边沿触发器，即在边沿触发")]),v._v(" "),_("h5",{attrs:{id:"cmos传输门的边沿触发器"}},[v._v("CMOS传输门的边沿触发器")]),v._v(" "),_("p",[_("strong",[v._v("CMOS传输门组成的边沿触发器")])]),v._v(" "),_("p",[v._v("同样用同一个CLK作为控制端，CMOS控制电路"),_("code",[v._v("C1=CLK', C2=CLK")])]),v._v(" "),_("p",[v._v("两个CMOS管串连，第一个管的输出为第二个管的输入")]),v._v(" "),_("ul",[_("li",[v._v("当C1 = 1即CLK=0，TG1形成导电沟道导通，TG2断开；TG3断开，TG4导通。反馈通路接通，自锁，输出Q保持")]),v._v(" "),_("li",[v._v("当CLK上升时，TG1断，TG2通；TG3通，TG4断。此时反馈不通，输出Q=G1（第一个CMOS管的输出）")]),v._v(" "),_("li",[v._v("当CLK下降时，TG1通，TG2断；TG3断，TG4通。此时反馈接通，输出Q保持")])]),v._v(" "),_("img",{attrs:{src:t(1095)}}),v._v(" "),_("p",[v._v("真值表")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("CLK")]),v._v(" "),_("th",[v._v("D（输入）")]),v._v(" "),_("th",[v._v("Q（第一个输出）")]),v._v(" "),_("th",[v._v("Q*（总输出）")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("X")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("Q")])]),v._v(" "),_("tr",[_("td",[v._v("上升")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("上升")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("X")]),v._v(" "),_("td",[v._v("1")])])])]),v._v(" "),_("p",[v._v("只有上升沿Q*才会发生改变，下降沿不导通")]),v._v(" "),_("p",[_("strong",[v._v("动作特点")])]),v._v(" "),_("p",[v._v("Q*变化只发生在上升沿/下降沿")]),v._v(" "),_("p",[v._v("Q*仅取决于上升沿到达时输入的状态，与前后D状态无关")]),v._v(" "),_("ul",[_("li",[v._v("就像高考前后考多少无关")])]),v._v(" "),_("h4",{attrs:{id:"脉冲触发的触发器"}},[v._v("脉冲触发的触发器")]),v._v(" "),_("blockquote",[_("p",[v._v("主从触发器")])]),v._v(" "),_("h5",{attrs:{id:"rs主从触发器"}},[v._v("RS主从触发器")]),v._v(" "),_("blockquote",[_("p",[v._v("基本RS触发器 ——> 同步RS触发器 ——> 主从结构RS触发器")])]),v._v(" "),_("p",[v._v("主从结构RS触发器：两个同步RS触发相连")]),v._v(" "),_("p",[v._v("第一个为主触发器，第二个为从触发器（两个触发器结构完全一样），使用同一个时钟信号（主使用"),_("code",[v._v("CLK")]),v._v("，从使用"),_("code",[v._v("CLK‘")]),v._v("）")]),v._v(" "),_("ul",[_("li",[v._v("基本有了边缘触发器的功能")])]),v._v(" "),_("p",[v._v("第一个触发器的输出Qm为第二个锁存器的输入，第二个触发器的输出Q为边沿触发器的输出")]),v._v(" "),_("p",[v._v("有"),_("code",[v._v("CLK1=CP, CLK2=CP'")]),v._v("，主触发器输入电平"),_("code",[v._v("S,R")]),v._v("，从触发器的输入为主触发器的输出"),_("code",[v._v("Qm")]),v._v("和"),_("code",[v._v("CLK2")])]),v._v(" "),_("ul",[_("li",[v._v("当CP为1时，从触发器被封锁，输入S只作用主触发器，输出保持不变")]),v._v(" "),_("li",[v._v("当CP从1转为0时，下降沿这一时刻，"),_("code",[v._v("Qm")]),v._v("的值一定是确定的（由S和R决定）")]),v._v(" "),_("li",[v._v("在CP=0了，主触发器被封锁，输入S不起作用，"),_("code",[v._v("Qm")]),v._v("始终不变，从触发器正常工作，输出Q由Qm的值决定（"),_("code",[v._v("Qm")]),v._v("为第一个锁存器的输出，同时作为从触发器的输入）")]),v._v(" "),_("li",[v._v("当CP由0转为1时，这一时刻，Q正常输出，之后马上转为CP为1的状态，完成一次轮回")])]),v._v(" "),_("p",[v._v("整个轮回中，只有在CP的下降沿，整个边沿触发器的输出Q才会发生变化，此之谓边沿触发器，即在边沿触发")]),v._v(" "),_("img",{attrs:{src:t(1096)}}),v._v(" "),_("p",[v._v("真值表")]),v._v(" "),_("img",{attrs:{src:t(1097)}}),v._v(" "),_("p",[v._v("在除下降沿之外，总输出电平在其余时间均保持不变")]),v._v(" "),_("p",[v._v("当处于上升沿，主触发器的输入（"),_("code",[v._v("R/S")]),v._v("）输出（"),_("code",[v._v("Qm")]),v._v("）和同步触发器保持一致：置零、置一、不变")]),v._v(" "),_("p",[v._v("当处于下降沿，输入（"),_("code",[v._v("Qm/Qm'")]),v._v("）输出（"),_("code",[v._v("Q")]),v._v("）和同步触发器一致，其中输入"),_("code",[v._v("Qm->S, Qm'->R")])]),v._v(" "),_("ul",[_("li",[v._v("这里实际上"),_("code",[v._v("Qm=1")]),v._v("则"),_("code",[v._v("Q")]),v._v("置一，"),_("code",[v._v("Qm=0")]),v._v("则"),_("code",[v._v("Q")]),v._v("置零")])]),v._v(" "),_("p",[v._v("优点：克服了CP=1期间触发器输出状态可能多次翻转")]),v._v(" "),_("p",[v._v("缺点：")]),v._v(" "),_("ul",[_("li",[v._v("本身是同步RS触发器，在CP=1期间，"),_("code",[v._v("Qm")]),v._v("状态会随S/R的变化而多次改变")]),v._v(" "),_("li",[v._v("当S/R同为1，触发器状态不定")])]),v._v(" "),_("h5",{attrs:{id:"主从jk触发器"}},[v._v("主从JK触发器")]),v._v(" "),_("p",[v._v("典型的边沿触发器")]),v._v(" "),_("img",{attrs:{src:t(1098)}}),v._v(" "),_("p",[v._v("输入从R/S变为J/K：")]),v._v(" "),_("ul",[_("li",[v._v("输入J比S多了一个输入为从触发器的输出Q")]),v._v(" "),_("li",[v._v("输入K比R多了个一个输入为从触发器的输出Q'")]),v._v(" "),_("li",[v._v("输入CP不变")])]),v._v(" "),_("p",[v._v("特性表：上面的主从触发器基本保持一致")]),v._v(" "),_("p",[v._v("关键之处在于：当输入J/K同时为1时")]),v._v(" "),_("ul",[_("li",[v._v("不为不定，而为上个状态的反状态，即"),_("code",[v._v("1->0, 0->1")])]),v._v(" "),_("li",[v._v("这个操作叫做翻转")])]),v._v(" "),_("img",{attrs:{src:t(1099)}}),v._v(" "),_("p",[v._v("具有多输入端的主从"),_("code",[v._v("JK")]),v._v("触发器")]),v._v(" "),_("ul",[_("li",[v._v("J变为"),_("code",[v._v("J1 J2")]),v._v("（并的结果）")]),v._v(" "),_("li",[v._v("K变为"),_("code",[v._v("K1 K2")])])]),v._v(" "),_("p",[_("strong",[v._v("动作特点")])]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("CP=1")]),v._v("的阶段，接收输入端（"),_("code",[v._v("J/K, S/R")]),v._v("）正常工作，接收输入，从触发器不动")]),v._v(" "),_("p",[v._v("在CP下降沿到来时从触发器按照主触发器翻转")]),v._v(" "),_("p",[v._v("对于主从RS触发器，在整个"),_("code",[v._v("CP=1")]),v._v("的阶段，输入S/R的变化都可以造成主触发器输出的变化")]),v._v(" "),_("p",[v._v("对于JK触发器，在整个"),_("code",[v._v("CP=1")]),v._v("的阶段，主触发器输出的只有可能发生一次变化，一旦翻转了就不会翻回原来的状态，即J/K只会引起一次主触发器输出改变")]),v._v(" "),_("ul",[_("li",[v._v("对于JK触发器，一旦"),_("code",[v._v("Qm")]),v._v("翻转过后，就已经可以确定这一周期"),_("code",[v._v("Q")]),v._v("的输出状态")])]),v._v(" "),_("h4",{attrs:{id:"触发器按逻辑功能的分类"}},[v._v("触发器按逻辑功能的分类")]),v._v(" "),_("p",[v._v("触发器的逻辑功能：指触发器的次态和现态以及输入信号之间在稳定状态下的逻辑关系")]),v._v(" "),_("p",[v._v("逻辑关系可以用特性表、特性方程或状态转换图给出")]),v._v(" "),_("p",[v._v("按逻辑功能的不同特点，通常将时钟控制的触发器分为")]),v._v(" "),_("ul",[_("li",[v._v("RS触发器")]),v._v(" "),_("li",[v._v("JK触发器")]),v._v(" "),_("li",[v._v("T触发器")]),v._v(" "),_("li",[v._v("D触发器")])]),v._v(" "),_("p",[v._v("描述触发器的状态转换关系及转换条件的图形成为状态图，也叫状态（有点像一个有限自动机）")]),v._v(" "),_("p",[v._v("电路结构形式的不同，带来了各不相同的逻辑功能")]),v._v(" "),_("ul",[_("li",[v._v("二者是两个不同的概念")]),v._v(" "),_("li",[v._v("同一逻辑功能的触发器可以用不同的电路结构（与非门、或非门、CMOS传输门）实现")]),v._v(" "),_("li",[v._v("用同一电路结构形式也可以形成不同逻辑功能的触发器")])]),v._v(" "),_("h5",{attrs:{id:"rs触发器"}},[v._v("RS触发器")]),v._v(" "),_("img",{attrs:{src:t(1100)}}),v._v(" "),_("p",[v._v("化简约束得：")]),v._v(" "),_("ul",[_("li",[v._v("特性方程："),_("code",[v._v("Q(n+1) = S + R'Q(n)")])]),v._v(" "),_("li",[v._v("约束条件："),_("code",[v._v("SR=0")]),v._v("（只有RS有约束条件）")])]),v._v(" "),_("p",[v._v("RS触发器的状态图")]),v._v(" "),_("img",{attrs:{src:t(1101)}}),v._v(" "),_("h5",{attrs:{id:"jk触发器"}},[v._v("JK触发器")]),v._v(" "),_("p",[v._v("特性方程："),_("code",[v._v("Q(n+1) = JQ(n)' + K'Q(n)")])]),v._v(" "),_("p",[v._v("驱动表：使输出变化输入驱动")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("Q(n)")]),v._v(" "),_("th",[v._v("Q(n+1)")]),v._v(" "),_("th",[v._v("J")]),v._v(" "),_("th",[v._v("K")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0 ——>")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("x")])]),v._v(" "),_("tr",[_("td",[v._v("0 ——>")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("x")])]),v._v(" "),_("tr",[_("td",[v._v("1 ——>")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("x")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1 ——>")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("x")]),v._v(" "),_("td",[v._v("0")])])])]),v._v(" "),_("p",[v._v("状态图：状态只有两个"),_("code",[v._v("1, 0")]),v._v("，由上述表驱动")]),v._v(" "),_("h5",{attrs:{id:"t触发器"}},[v._v("T触发器")]),v._v(" "),_("blockquote",[_("p",[v._v("T：翻转")])]),v._v(" "),_("p",[v._v("具有保持和翻转功能的电路，T=0时保持，T=1时翻转")]),v._v(" "),_("p",[v._v("J/K触发器的两种情况："),_("code",[v._v("J+K=0, JK=1")])]),v._v(" "),_("p",[v._v("特性表：")]),v._v(" "),_("img",{attrs:{src:t(1102)}}),v._v(" "),_("p",[v._v("特性方程："),_("code",[v._v("Q(n+1) = TQ(n)' + T'Q(n)")])]),v._v(" "),_("h5",{attrs:{id:"d触发器-2"}},[v._v("D触发器")]),v._v(" "),_("p",[v._v("特性方程："),_("code",[v._v("Q(n+1) = D")])]),v._v(" "),_("p",[v._v("当前输出只与当前输入有关，和原先状态无关")]),v._v(" "),_("h5",{attrs:{id:"比较"}},[v._v("比较")]),v._v(" "),_("p",[v._v("RS和JK触发器只有当输入端均为1时不同")]),v._v(" "),_("p",[v._v("T触发器只有保持和翻转的功能，为JK/RS触发器的一部分")]),v._v(" "),_("p",[v._v("D触发器输出永远等同于输入")]),v._v(" "),_("ul",[_("li",[v._v("JK的逻辑功能最强，包含了RS、T触发器所有的逻辑功能")]),v._v(" "),_("li",[v._v("可以用JK触发器当作RS、T触发器使用")])]),v._v(" "),_("h4",{attrs:{id:"触发器的动态特性"}},[v._v("触发器的动态特性")]),v._v(" "),_("p",[v._v("建立时间")]),v._v(" "),_("p",[v._v("保持时间")]),v._v(" "),_("p",[v._v("传输延迟时间")]),v._v(" "),_("p",[v._v("最高时钟频率")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("触发器的电路结构和动作特点")])]),v._v(" "),_("li",[_("p",[v._v("触发器的波形图、特性方程")])])]),v._v(" "),_("h2",{attrs:{id:"半导体存储电路"}},[v._v("半导体存储电路")]),v._v(" "),_("h3",{attrs:{id:"寄存器"}},[v._v("寄存器")]),v._v(" "),_("blockquote",[_("p",[v._v("暂存，就是一个多位的触发器")]),v._v(" "),_("p",[v._v("由触发器构成：4、6、16、32位（bit位）触发器")])]),v._v(" "),_("p",[v._v("用于寄存一组二值代码，N位寄存器由N个触发器组成，可存放一组N位二值代码")]),v._v(" "),_("p",[v._v("只要求其中每个触发器可置1、置0（T触发器就没有这种功能，只能保持和翻转）")]),v._v(" "),_("h3",{attrs:{id:"存储器"}},[v._v("存储器")]),v._v(" "),_("blockquote",[_("p",[v._v("内存条、固态、U盘等")])]),v._v(" "),_("p",[v._v("半导体存储器：一种能存储大量二值信息的半导体器件")]),v._v(" "),_("p",[v._v("性能指标：存储容量和存取速度")]),v._v(" "),_("p",[v._v("电路结构特点：存储单元数目多（一个单元可存1bit），而器件的引脚有限 ——> 在存储器中每个存储单元编了一个地址，只有被输入代码指定的那个地址才能与公共的输入/输出引脚接通，进行数据的读写")]),v._v(" "),_("p",[v._v("种类")]),v._v(" "),_("p",[v._v("按存取功能分类：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("只读存储器：ROM（"),_("code",[v._v("Read Only Memory")]),v._v("）")]),v._v(" "),_("p",[v._v("在正常工作状态下只能从中读，不能写或修改，掉电后信息不丢失")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ROM")]),v._v("：最原始的只读")]),v._v(" "),_("li",[_("code",[v._v("PROM")]),v._v("：可一次性写，不能改")]),v._v(" "),_("li",[_("code",[v._v("EPROM")]),v._v("：可擦除，但用的紫外线")]),v._v(" "),_("li",[_("code",[v._v("EEPROM")]),v._v("：用电擦除")]),v._v(" "),_("li",[_("code",[v._v("Flash Memory")]),v._v("：闪存，现在的U盘属于这种")])])]),v._v(" "),_("li",[_("p",[v._v("随机存储器：RAM（"),_("code",[v._v("Random Access Memory")]),v._v("）")]),v._v(" "),_("p",[v._v("一开始是顺序存储的，读文件只能顺序读，最多是快进或者后退，不能切歌，可随时读写，掉电后信息丢失")]),v._v(" "),_("p",[v._v("内存条一大半是RAM，一小部分是ROM，存储了牌子啊等信息")])])]),v._v(" "),_("p",[v._v("按制造工艺分类：")]),v._v(" "),_("ul",[_("li",[v._v("双极型")]),v._v(" "),_("li",[v._v("MOS型")])]),v._v(" "),_("h4",{attrs:{id:"随机存储器"}},[v._v("随机存储器")]),v._v(" "),_("p",[v._v("优点：读写方便，使用灵活")]),v._v(" "),_("p",[v._v("缺点：数据易失性")]),v._v(" "),_("h5",{attrs:{id:"静态随机存储器"}},[v._v("静态随机存储器")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("SRAM")])]),v._v(" "),_("p",[v._v("主要由静态触发器构成，靠触发器的自动保持功能存储数据")])]),v._v(" "),_("p",[_("code",[v._v("SRAM")]),v._v("速度比"),_("code",[v._v("DRAM")]),v._v("要快，也更贵，多用于计算机的缓存中，"),_("code",[v._v("DRAM")]),v._v("常用于内存中")]),v._v(" "),_("ul",[_("li",[v._v("缓存通常是几MB")]),v._v(" "),_("li",[v._v("内存条通常是几GB")])]),v._v(" "),_("p",[v._v("六管N沟道增强型MOS管组成的一个"),_("code",[v._v("SRAM")]),v._v("存储单元")]),v._v(" "),_("img",{attrs:{src:t(1103)}}),v._v(" "),_("h5",{attrs:{id:"动态随机存储器"}},[v._v("动态随机存储器")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("DRAM")])]),v._v(" "),_("p",[v._v("存储单元利用MOS管栅极电容可以存储电荷的原理制成")]),v._v(" "),_("p",[v._v("电荷不能长时间存储，容易损坏器件，需要定期刷新")])]),v._v(" "),_("p",[v._v("利用MOS管栅极电容可以存储电荷的原理，更多用于内存条")]),v._v(" "),_("h4",{attrs:{id:"只读存储器"}},[v._v("只读存储器")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("ROM")])])]),v._v(" "),_("p",[v._v("掩模"),_("code",[v._v("ROM")]),v._v("：数据在制作时已经确定，无法更改")]),v._v(" "),_("ul",[_("li",[v._v("如海尔品牌的电冰箱和生产日期的一次性写入（烧入）")])]),v._v(" "),_("p",[v._v("可编程ROM（"),_("code",[v._v("PROM")]),v._v("）：其中的数据可以根据自己的需要写入，但一经写入就不能再修改")]),v._v(" "),_("ul",[_("li",[v._v("你可以自己去写数据，不用丢给生产厂家烧进去")])]),v._v(" "),_("p",[v._v("可擦除的可编程ROM（"),_("code",[v._v("RPROM")]),v._v("）：其中的数据不但可以由用户根据自己的需要写入，并且能擦除重写，具有更大的使用灵活性")]),v._v(" "),_("ul",[_("li",[v._v("一开始是紫外线擦除，需要在紫外线环境下照射数个小时，后来是电擦除")])]),v._v(" "),_("h5",{attrs:{id:"掩模rom"}},[v._v("掩模ROM")]),v._v(" "),_("p",[v._v("数据在制作时”固化“到芯片里，无法更改")]),v._v(" "),_("p",[v._v("二极管门阵列、三态门、MOS管")]),v._v(" "),_("p",[v._v("例子：二极管门阵列组成的ROM单元")]),v._v(" "),_("img",{attrs:{src:t(1104)}}),v._v(" "),_("p",[v._v("出厂时已经固定，不能更改，适合大量生产，简单便宜，非易失性")]),v._v(" "),_("h5",{attrs:{id:"可编程rom"}},[v._v("可编程ROM")]),v._v(" "),_("p",[v._v("总体结构与掩模ROM一样，但存储单元不同，多加了一根熔丝，想更改时将熔丝熔断（1变为0），一次性编程，不能改写")]),v._v(" "),_("h5",{attrs:{id:"可擦除可编程rom"}},[v._v("可擦除可编程ROM")]),v._v(" "),_("p",[v._v("紫外线擦除"),_("code",[v._v("EPROM")]),v._v(" ——> 电擦除"),_("code",[v._v("EEPROM")]),v._v(" ——> "),_("code",[v._v("Flash Memory")])]),v._v(" "),_("h4",{attrs:{id:"存储器容量扩展"}},[v._v("存储器容量扩展")]),v._v(" "),_("p",[v._v("位扩展和字扩展")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("当字数（存储单元的个数）够用但位数（每个存储单元能够记录的二进制位）不够时，使用位扩展")]),v._v(" "),_("p",[v._v("例子：用8片"),_("code",[v._v("1024x1")]),v._v("位并联 ——> "),_("code",[v._v("1024x8")]),v._v("位的RAM")])]),v._v(" "),_("li",[_("p",[v._v("当位数够用但字数不够时，使用字扩展")]),v._v(" "),_("p",[v._v("例子：用四片"),_("code",[v._v("256x8")]),v._v("位 ——> "),_("code",[v._v("1024x8")]),v._v("位RAM")])])]),v._v(" "),_("p",[v._v("默认的扩展方式为子扩展，即存储单元不够")]),v._v(" "),_("p",[v._v("考试："),_("code",[v._v("256x4")]),v._v("位转"),_("code",[v._v("2048x8")]),v._v("位需要多少片")]),v._v(" "),_("h4",{attrs:{id:"存储器实现组合逻辑函数"}},[v._v("存储器实现组合逻辑函数")]),v._v(" "),_("p",[v._v("组合逻辑函数 ——> 逻辑组合电路")]),v._v(" "),_("p",[v._v("组合逻辑函数组成")]),v._v(" "),_("ul",[_("li",[v._v("38译码器")]),v._v(" "),_("li",[v._v("数据选择器")]),v._v(" "),_("li",[v._v("存储器")])]),v._v(" "),_("p",[v._v("对于一个ROM，两个地址线"),_("code",[v._v("A1,A0")]),v._v("，四个输出"),_("code",[v._v("D0,D1,D2,D3")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("A1")]),v._v(" "),_("th",[v._v("A0")]),v._v(" "),_("th",[v._v("D0")]),v._v(" "),_("th",[v._v("D1")]),v._v(" "),_("th",[v._v("D2")]),v._v(" "),_("th",[v._v("D3")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0")])])])]),v._v(" "),_("p",[v._v("具有n位地址，m位数据的ROM，可产生一组"),_("code",[v._v("Y<m")]),v._v("个任何形式的n变量组合逻辑函数")]),v._v(" "),_("p",[v._v("可以由4位输入地址，8位输出数据的ROM来实现译码电路")]),v._v(" "),_("img",{attrs:{src:t(1105)}}),v._v(" "),_("p",[v._v("实现过程与38译码器、数据选择器基本一致，拿到一组多输出逻辑函数后，化成最小项和形式，根据最小项和写出输出的真值表")]),v._v(" "),_("p",[_("strong",[v._v("Summary")])]),v._v(" "),_("p",[v._v("半导体存储器的电路结构：")]),v._v(" "),_("ul",[_("li",[v._v("地址译码器")]),v._v(" "),_("li",[v._v("存储矩阵")]),v._v(" "),_("li",[v._v("输入/输出电路")])]),v._v(" "),_("p",[v._v("半导体存储器分类")]),v._v(" "),_("ul",[_("li",[v._v("只读\n"),_("ul",[_("li",[v._v("掩模")]),v._v(" "),_("li",[v._v("可编程")]),v._v(" "),_("li",[v._v("可擦除可编程")]),v._v(" "),_("li",[v._v("闪存")])])]),v._v(" "),_("li",[v._v("随机\n"),_("ul",[_("li",[v._v("静态")]),v._v(" "),_("li",[v._v("动态")])])])]),v._v(" "),_("p",[v._v("扩展")]),v._v(" "),_("ul",[_("li",[v._v("字扩展")]),v._v(" "),_("li",[v._v("位扩展")])])])}),[],!1,null,null,null);_.default=p.exports}}]);