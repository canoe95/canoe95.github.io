(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1297:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221013145629.3cdd146a.png"},1298:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221013155511.42285725.png"},1299:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221014192710.91ad45e5.png"},1300:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221014193553.38532083.png"},1301:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221014191816.e3e5d19b.png"},1302:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221014202348.58f53069.png"},1303:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221014204855.ef82e913.png"},1304:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221017210949.3d3cdfbd.png"},1305:function(v,_,i){v.exports=i.p+"assets/img/QQ截图20221017211329.22226468.png"},1677:function(v,_,i){"use strict";i.r(_);var l=i(1),t=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("四星重点，考频较高，难度较小")]),v._v(" "),_("p",[v._v("注意考察 I/O 方式：给 IO 时间和 CPU 时间计算比例；计算整个 IO 时间")])]),v._v(" "),_("h2",{attrs:{id:"i-o-接口"}},[v._v("I/O 接口")]),v._v(" "),_("p",[v._v("也就是 I/O 控制器")]),v._v(" "),_("h3",{attrs:{id:"i-o-系统的组成"}},[v._v("I/O 系统的组成")]),v._v(" "),_("p",[v._v("I/O 系统包括外围设备、输入/输出接口和输入/输出软件，主要功能为实现人机交互")]),v._v(" "),_("p",[v._v("设备多，种类繁杂，速度差异大")]),v._v(" "),_("ul",[_("li",[v._v("很显然 CPU 的速度太快，无法管理 IO 设备")])]),v._v(" "),_("p",[v._v("计算机系统的输入输出接口实现主机和外设之间的信息交换")]),v._v(" "),_("h3",{attrs:{id:"i-o-接口的功能"}},[v._v("I/O 接口的功能")]),v._v(" "),_("p",[v._v("实现主机和外设的通信联络控制：通过同步控制电路解决时间配合问题，通过联络信息管理外设和主机交换信息的时间")]),v._v(" "),_("p",[v._v("解析地址译码和设备选择：解析 CPU 发来的地址码，转化为具体的 IO 设备")]),v._v(" "),_("p",[v._v("实现数据缓冲：在输入输出设备和主机之间有一层数据缓冲，由数据缓冲寄存器实现")]),v._v(" "),_("p",[v._v("数据格式的转换：如并串/串并转换、数模转换、二进制数和 ASCII 码转换")]),v._v(" "),_("p",[v._v("传递控制命令和状态信息")]),v._v(" "),_("p",[v._v("终端功能")]),v._v(" "),_("h3",{attrs:{id:"接口的基本结构"}},[v._v("接口的基本结构")]),v._v(" "),_("p",[v._v("控制逻辑电路，上面对接 CPU，下面对接外设")]),v._v(" "),_("ul",[_("li",[v._v("一个小型的 CPU，有一定的处理信息能力")])]),v._v(" "),_("img",{attrs:{src:i(1297)}}),v._v(" "),_("p",[v._v("可以发现，IO 接口中有多种寄存器，这些寄存器也叫 IO 端口")]),v._v(" "),_("h3",{attrs:{id:"接口的类型"}},[v._v("接口的类型")]),v._v(" "),_("p",[v._v("按照数据传送方式分类")]),v._v(" "),_("ul",[_("li",[v._v("串行接口")]),v._v(" "),_("li",[v._v("并行接口")])]),v._v(" "),_("p",[v._v("按照主机对 IO 设备的控制方式")]),v._v(" "),_("ul",[_("li",[v._v("程序查询接口")]),v._v(" "),_("li",[v._v("程序中断接口")]),v._v(" "),_("li",[v._v("DMA 接口")]),v._v(" "),_("li",[v._v("通道控制器")])]),v._v(" "),_("p",[v._v("按功能选择的灵活性")]),v._v(" "),_("ul",[_("li",[v._v("可编程接口")]),v._v(" "),_("li",[v._v("不可编程接口")])]),v._v(" "),_("p",[v._v("按照通用性")]),v._v(" "),_("ul",[_("li",[v._v("通用接口：扩展坞")]),v._v(" "),_("li",[v._v("专用接口")])]),v._v(" "),_("p",[v._v("根据信号：数模转换器")]),v._v(" "),_("ul",[_("li",[v._v("数字接口")]),v._v(" "),_("li",[v._v("模拟接口")])]),v._v(" "),_("h3",{attrs:{id:"i-o-端口"}},[v._v("I/O 端口")]),v._v(" "),_("p",[v._v("IO 端口就是接口电路中可以被 CPU 直接访问的寄存器，常分为")]),v._v(" "),_("ul",[_("li",[v._v("数据端口")]),v._v(" "),_("li",[v._v("命令端口")]),v._v(" "),_("li",[v._v("状态端口")])]),v._v(" "),_("p",[v._v("CPU 发送的数据实际上是直接发送到各 IO 接口中")]),v._v(" "),_("p",[v._v("为了节省硬件，状态信息和控制信息可以共用一个端口（寄存器），称为控制状态寄存器")]),v._v(" "),_("h3",{attrs:{id:"i-o-端口的编址方式"}},[v._v("I/O 端口的编址方式")]),v._v(" "),_("p",[v._v("IO 没有地址端口，那么他是如何进行地址选择？")]),v._v(" "),_("p",[v._v("地址将由 CPU 发送给设备选择电路，由该电路实现地址选择，因为 IO 设备可以随时装上拆除，如果用地址寄存器，总会有不够用的情况")]),v._v(" "),_("p",[v._v("于是用设备选择电路，通过当前的电路情况产生信号告知该操作读写哪个设备")]),v._v(" "),_("h4",{attrs:{id:"独立编址方式"}},[v._v("独立编址方式")]),v._v(" "),_("p",[v._v("又称 IO 映射方式，对外设端口单独编址，即与主存的编址完全无关")]),v._v(" "),_("ul",[_("li",[v._v("访存使用访存指令")]),v._v(" "),_("li",[v._v("IO 指令使用 IO 指令（IO 指令是特权指令，只能由 CPU 执行，不能由用户执行）")])]),v._v(" "),_("p",[v._v("如在 8086 中，主存地址为 0000H~FFFFH，IO 端口地址范围为 0000H~FFFFH，二者相互独立，互不影响")]),v._v(" "),_("h4",{attrs:{id:"统一编址方式"}},[v._v("统一编址方式")]),v._v(" "),_("p",[v._v("存储器映射方式，外设端口和主存单元统一编址，占据相同的地址空间，但占据不同的地址范围")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("编址方式")]),v._v(" "),_("th",[v._v("定义")]),v._v(" "),_("th",[v._v("特点")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("统一编址")]),v._v(" "),_("td",[v._v("把 IO 端口当作存储器单元进行空间分配，采用统一的访存指令")]),v._v(" "),_("td",[v._v("优点：不需要专门的 IO 指令；占用了存储器地址空间，速度慢")])]),v._v(" "),_("tr",[_("td",[v._v("独立编址")]),v._v(" "),_("td",[v._v("IO 端口和存储器地址无关，需要设置专门的 IO 指令访问 IO 端口")]),v._v(" "),_("td",[v._v("优点：程序编址清晰，便于理解；缺点：IO 指令较少，增加了控制复杂性")])])])]),v._v(" "),_("p",[v._v("前者依靠不同的地址码进行区分存储单元和 IO 端口，后者通过不同的指令进行区分")]),v._v(" "),_("h2",{attrs:{id:"中断系统"}},[v._v("中断系统")]),v._v(" "),_("h3",{attrs:{id:"基本原理"}},[v._v("基本原理")]),v._v(" "),_("p",[v._v("异常事件发生，如在上网课，志愿者上门做核酸，打断了上网课，做完之后再去上网课")]),v._v(" "),_("ul",[_("li",[v._v("其中做核酸就是一个中断")])]),v._v(" "),_("p",[v._v("中断后再回到主程序停止处继续执行，注意 CPU 只有在指令执行周期结束后才会响应中断")]),v._v(" "),_("h3",{attrs:{id:"中断分类"}},[v._v("中断分类")]),v._v(" "),_("p",[v._v("根据中断发起者，分为")]),v._v(" "),_("ul",[_("li",[v._v("软件中断：如 0X80 命令，由程序发起，使用中断指令使机器进入中断处理")]),v._v(" "),_("li",[v._v("硬件中断：由随机产生的硬件事件而产生的中断")])]),v._v(" "),_("p",[v._v("根据中断发生位置，分为")]),v._v(" "),_("p",[v._v("内中断：也叫异常，CPU 内部硬件或软件原因引起的中断")]),v._v(" "),_("p",[v._v("在操作系统中，内中断分为错误（error）、陷入（trap）、异常（exception），均可由 CPU 检测到")]),v._v(" "),_("p",[v._v("引起内中断的栗子")]),v._v(" "),_("ul",[_("li",[v._v("访存缺页：exception")]),v._v(" "),_("li",[v._v("非法指令")]),v._v(" "),_("li",[v._v("等待超时")]),v._v(" "),_("li",[v._v("运行超时")]),v._v(" "),_("li",[v._v("特权指令")]),v._v(" "),_("li",[v._v("访存越界：error")]),v._v(" "),_("li",[v._v("内存校验错误")]),v._v(" "),_("li",[v._v("阶上溢")]),v._v(" "),_("li",[v._v("非法运算")])]),v._v(" "),_("p",[v._v("外中断：CPU 意外原因引起的中断，常指 IO 中断")]),v._v(" "),_("ul",[_("li",[v._v("程序 IO 中断")]),v._v(" "),_("li",[v._v("DMA 中断")]),v._v(" "),_("li",[v._v("通道中断")])]),v._v(" "),_("p",[v._v("根据中断的允许 / 禁止，可分为")]),v._v(" "),_("ul",[_("li",[v._v("可屏蔽中断：可被 CPU 通过指令限制某些设备发出中断请求的中断\n"),_("ul",[_("li",[v._v("CPU 关中断：CPU 将不响应任何中断")]),v._v(" "),_("li",[v._v("设置中断屏蔽字：CPU 将响应优先级最高的中断（紧急的把不紧急的屏蔽掉）")])])]),v._v(" "),_("li",[v._v("不可屏蔽中断：电源断电")])]),v._v(" "),_("h3",{attrs:{id:"中断处理过程"}},[v._v("中断处理过程")]),v._v(" "),_("p",[v._v("中断处理系统需要解决以下几个问题")]),v._v(" "),_("ul",[_("li",[v._v("中断源如何向 CPU 提出请求")]),v._v(" "),_("li",[v._v("中断源同时提出请求如何处理")]),v._v(" "),_("li",[v._v("CPU 在什么条件、时间、以什么方式响应中断")]),v._v(" "),_("li",[v._v("如何保护现场")]),v._v(" "),_("li",[v._v("如何寻址入口地址")]),v._v(" "),_("li",[v._v("如何恢复中断，如何返回")]),v._v(" "),_("li",[v._v("处理中断途中又遇到中断如何处理")])]),v._v(" "),_("p",[v._v("中断处理过程分为两个阶段：中断响应周期和中断服务周期")]),v._v(" "),_("p",[v._v("中断响应周期")]),v._v(" "),_("ul",[_("li",[v._v("关中断")]),v._v(" "),_("li",[v._v("保存断点")]),v._v(" "),_("li",[v._v("寻找中断服务程序")])]),v._v(" "),_("p",[v._v("中断服务周期")]),v._v(" "),_("ul",[_("li",[v._v("保护现场")]),v._v(" "),_("li",[v._v("中断服务过程")]),v._v(" "),_("li",[v._v("恢复现场")]),v._v(" "),_("li",[v._v("开中断")]),v._v(" "),_("li",[v._v("中断返回")])]),v._v(" "),_("img",{attrs:{src:i(1298)}}),v._v(" "),_("h3",{attrs:{id:"中断请求标记"}},[v._v("中断请求标记")]),v._v(" "),_("p",[v._v("中断对于主机来说实际上是一个异常事件，我们给每一个中断源设置一个"),_("strong",[v._v("比特")]),v._v("作为标识符表识其是否提出中断，该位 1 即提出了中断")]),v._v(" "),_("p",[v._v("多个中断请求设法其构成一个中断请求寄存器，就像微程序的直接编码设计方式，固定下每位对应的中断源，如 1100 对应 abcd 四个中断源，就表示 ab 发出了中断请求，而 cd 没有发出")]),v._v(" "),_("h3",{attrs:{id:"中断优先级判断"}},[v._v("中断优先级判断")]),v._v(" "),_("p",[v._v("当系统同时出现多个中断源，如何判断先实现哪个中断")]),v._v(" "),_("ul",[_("li",[v._v("硬件排队器实现")]),v._v(" "),_("li",[v._v("软件程序查询实现优先级判断，就是 if-else 语句")])]),v._v(" "),_("h3",{attrs:{id:"中断响应的条件"}},[v._v("中断响应的条件")]),v._v(" "),_("blockquote",[_("p",[v._v("背住")])]),v._v(" "),_("p",[v._v("四个条件，必须同时满足")]),v._v(" "),_("ul",[_("li",[v._v("中断源提出中断请求")]),v._v(" "),_("li",[v._v("在所有中断源中，有优先级最高的中断且当前没有更高级的中断服务程序正在执行")]),v._v(" "),_("li",[v._v("CPU 允许中断：CPU 有两种状态，一种是关中断，此时允许触发器为 0；另一个是开中断，允许触发器为 1。只有访问允许触发器得到 1 时才允许触发中断")]),v._v(" "),_("li",[v._v("指令周期结束")])]),v._v(" "),_("h3",{attrs:{id:"中断响应周期和中断隐指令"}},[v._v("中断响应周期和中断隐指令")]),v._v(" "),_("p",[v._v("隐指令指计算机中实际不存在于指令系统的指令，完全由硬件完成")]),v._v(" "),_("p",[v._v("中断响应周期中，"),_("strong",[v._v("中断隐指令")]),v._v("主要完成以下操作")]),v._v(" "),_("ul",[_("li",[v._v("关中断：进入不可响应中断的状态")]),v._v(" "),_("li",[v._v("保存断点：保存 PC 的值")]),v._v(" "),_("li",[v._v("寻找中断服务程序：针对不同的中断源寻找不同的中断服务")])]),v._v(" "),_("p",[v._v("寻找中断服务有两种方法，中断向量表存放中断服务程序的入口地址，中断向量指的是中断服务程序的入口地址在中断向量表中的地址")]),v._v(" "),_("ul",[_("li",[v._v("硬件向量法：在中断向量表中查询对应的中断服务程序的入口")]),v._v(" "),_("li",[v._v("中断向量法（软件查询法）：通过中断向量查询中断向量表（就像间接寻址）")])]),v._v(" "),_("h3",{attrs:{id:"中断服务程序流程"}},[v._v("中断服务程序流程")]),v._v(" "),_("p",[v._v("服务有以下操作，并不是由隐指令实现")]),v._v(" "),_("ul",[_("li",[v._v("保护现场：除了 PC，还要保护寄存器的状态等")]),v._v(" "),_("li",[v._v("中断处理：执行中断服务程序")]),v._v(" "),_("li",[v._v("恢复现场")]),v._v(" "),_("li",[v._v("开中断：由 ISR 实现")]),v._v(" "),_("li",[v._v("中断返回")])]),v._v(" "),_("h3",{attrs:{id:"多重中断"}},[v._v("多重中断")]),v._v(" "),_("p",[v._v("也叫中断嵌套，在处理中断的过程中出现新的更紧集的中断")]),v._v(" "),_("p",[v._v("实现多重中断的条件")]),v._v(" "),_("ul",[_("li",[v._v("提前设置开中断指令")]),v._v(" "),_("li",[v._v("设置中断的优先级，优先级高的中断有权中断优先级别低的中断源")])]),v._v(" "),_("p",[v._v("中断屏蔽寄存器：记录各个中断源的中断屏蔽字，中断屏蔽字由一串二进制位构成，1 越多，表示优先级越高（全 1 的中断字优先级最高），如")]),v._v(" "),_("img",{attrs:{src:i(1299)}}),v._v(" "),_("p",[v._v("1 表示可以屏蔽，0 表示被屏蔽，默认自己可以屏蔽自己")]),v._v(" "),_("p",[v._v("又如")]),v._v(" "),_("img",{attrs:{src:i(1300)}}),v._v(" "),_("p",[v._v("中断的优先级分为两种")]),v._v(" "),_("ul",[_("li",[v._v("当中断响应次序由硬件排队电路实现，无法改变，该优先级称为响应优先级")]),v._v(" "),_("li",[v._v("当中断响应次序是中断服务的执行次序，可以由屏蔽码动态改变，该优先级称为处理优先级")])]),v._v(" "),_("p",[v._v("引入多重中断后的中断处理流程")]),v._v(" "),_("img",{attrs:{src:i(1301)}}),v._v(" "),_("h2",{attrs:{id:"i-o-方式"}},[v._v("I/O 方式")]),v._v(" "),_("blockquote",[_("p",[v._v("四星重点，常考答题")])]),v._v(" "),_("p",[v._v("常用的 I/O 控制方式包括：程序查询方式、程序中断方式、直接存储器存取（DMA）方式、I/O 通道控制方式和 I/O 处理机方式")]),v._v(" "),_("ul",[_("li",[v._v("尽可能减少 CPU 参与 I/O，避免 I/O 拖慢 CPU")])]),v._v(" "),_("h3",{attrs:{id:"程序查询方式"}},[v._v("程序查询方式")]),v._v(" "),_("p",[v._v("通过 CPU 不断执行指令完成和 IO 设备的信息传送")]),v._v(" "),_("ul",[_("li",[v._v("查询指令：不断查询 IO 设备是否准备好，准备好了开始传送")]),v._v(" "),_("li",[v._v("传送指令：传送数据")]),v._v(" "),_("li",[v._v("转移指令：重复该过程")])]),v._v(" "),_("p",[v._v("CPU 完全参与 IO 控制")]),v._v(" "),_("img",{attrs:{src:i(1302)}}),v._v(" "),_("p",[v._v("优点：硬件简单，易实现")]),v._v(" "),_("p",[v._v("缺点")]),v._v(" "),_("ul",[_("li",[v._v("查询过程 CPU 长期处于原地等待状态，系统效率低")]),v._v(" "),_("li",[v._v("CPU 在一段时间内只能和一台外设交换信息，串行工作，无法并行执行")]),v._v(" "),_("li",[v._v("不能发现和处理错误和异常")])]),v._v(" "),_("p",[v._v("特点：接口中至少有两个寄存器，一个数据缓冲寄存器存储指令，一个设备状态寄存器供 CPU 查询状态")]),v._v(" "),_("p",[v._v("大部分时间花费在查询状态这一步，IO 设备准备实在是太慢了，根本原因在于外设只能被动被查询状态，无法主动报告自身是否准备好")]),v._v(" "),_("ul",[_("li",[v._v("高速设备采用这种方式计算比例有可能大于 100%，这显然是不可能的，于是得到结论，高速设备无法使用程序查询方式")])]),v._v(" "),_("h3",{attrs:{id:"程序中断方式"}},[v._v("程序中断方式")]),v._v(" "),_("p",[v._v("使用中断处理程序和外设通信")]),v._v(" "),_("p",[v._v("以中断的方式主动报告自己的状态，当外设准备好后，发送中断请求，主机执行中断服务程序，完成和外设的数据传输")]),v._v(" "),_("ul",[_("li",[v._v("于是 CPU 不用串行查询外设状态，节省大量时间")])]),v._v(" "),_("p",[v._v("处理过程：在程序中安排一条指令，向外设发出 START 信号，外设收到后进行准备，同时 CPU 可以进行其他工作，当外设准备好后，便发送中断请求（INT）信号，CPU 中断，执行和外设的中断服务程序，实现数据传输（通常是一个字或一个字节进行传送）")]),v._v(" "),_("p",[v._v("同样的，传输也是一个循环过程，和程序查询一样，需要重复传输，即重复执行中断处理程序")]),v._v(" "),_("p",[v._v("特点")]),v._v(" "),_("ul",[_("li",[v._v("传输的基本单位是字或字节")]),v._v(" "),_("li",[v._v("每传输一个单位都要中断以此")]),v._v(" "),_("li",[v._v("IO 设备的启动需要 CPU 参与")])]),v._v(" "),_("h3",{attrs:{id:"直接存储器存取方式"}},[v._v("直接存储器存取方式")]),v._v(" "),_("p",[v._v("直接存储器存取（Direct Memory Access, DMA）方式是单独在外设和主存间开辟一条“直接数据通道”，不需要 CPU 的参与，直接在主存和外设间高速传输数据")]),v._v(" "),_("p",[v._v("在 DMA 方式中，对数据传送过程进行控制的硬件叫做 "),_("strong",[v._v("DMA 控制器")])]),v._v(" "),_("p",[v._v("DMA 的组成")]),v._v(" "),_("img",{attrs:{src:i(1303)}}),v._v(" "),_("p",[v._v("核心结构")]),v._v(" "),_("ul",[_("li",[v._v("DMA 控制逻辑")]),v._v(" "),_("li",[v._v("寄存器：需要寻址，包括内存地址寄存器、命令 / 状态寄存器、数据寄存器、数据计数器")]),v._v(" "),_("li",[v._v("中断机构：整个过程 CPU 不知道，需要 DMA 主动发出中断告知数据是否传输完成 ，需要 CPU 进行相应的后处理")])]),v._v(" "),_("p",[v._v("DMA 控制器的功能包括")]),v._v(" "),_("ul",[_("li",[v._v("接受外设发出的 DMA 请求，并向 CPU 发出总线请求")]),v._v(" "),_("li",[v._v("CPU 响应总线请求并发送响应信号后，CPU 接管对总线的控制，进入 DMA 操作周期")]),v._v(" "),_("li",[v._v("确定数据所在主存地址及长度，并能够自动动态修改")]),v._v(" "),_("li",[v._v("识别传输方向，内存向 IO 还是 IO 向内存")]),v._v(" "),_("li",[v._v("向 CPU 报告 DMA 操作的结束，即中断")])]),v._v(" "),_("p",[v._v("四类寄存器")]),v._v(" "),_("ul",[_("li",[v._v("内存地址寄存器 MAR")]),v._v(" "),_("li",[v._v("命令状态寄存器 CR")]),v._v(" "),_("li",[v._v("数据寄存器 DR")]),v._v(" "),_("li",[v._v("数据计数器 DC")])]),v._v(" "),_("p",[v._v("DMA 的工作阶段")]),v._v(" "),_("ul",[_("li",[v._v("预处理阶段：CPU 来做，启动 DMA，设置数据传输方向，初始化地址、数据寄存器内容")]),v._v(" "),_("li",[v._v("数据传输阶段：完全由 DMA 控制")]),v._v(" "),_("li",[v._v("后处理阶段：DMA 向 CPU 发出中断，CPU 通过中断响应程序完成，这一步主要由 CPU 完成")])]),v._v(" "),_("p",[v._v("有一个问题：DMA 访存时 CPU 也想访问内存，怎么处理？")]),v._v(" "),_("p",[v._v("三种方法")]),v._v(" "),_("ul",[_("li",[v._v("停止 CPU 访问法：在 DMA 获得访问权限到结束之前，CPU 无访存权限")]),v._v(" "),_("li",[v._v("存储器分时法：将单位时间一分为二，CPU 和 DMA 交替访问内存，由于 CPU 频率远大于 DMA，这样均分会造成大量的 DMA 空访存，拖慢系统效率")]),v._v(" "),_("li",[v._v("周期挪用法（最常用）：CPU 对主存的访问居于主要地位，一旦外设获得 DMA 请求后（并获取 CPU 批准），DMA 将获得一个周期的访存权，传送一个字/字节，再把权限交回 CPU，CPU 继续自己的操作，同时等待下一个 DMA 请求的到来")])]),v._v(" "),_("p",[v._v("周期挪用法的周期是什么周期？指令周期？存取周期还是时钟周期？")]),v._v(" "),_("p",[v._v("答案是存取周期，很明显一次传送一个字，就是一个存取周期的工作")]),v._v(" "),_("p",[v._v("DMA 请求到达时，其访存的优先级大于 CPU 的访存权，DMA 连接高速设备，如果不及时处理，很有可能发生数据丢失")]),v._v(" "),_("p",[v._v("DMA 的特点")]),v._v(" "),_("ul",[_("li",[v._v("将内存和 CPU 分开，既可以由 CPU 访问，又可以由外设（DMA）访问")]),v._v(" "),_("li",[v._v("DMA 处理内存地址地址以及数据长度均使用硬件电路实现")]),v._v(" "),_("li",[v._v("DMA 只有开始和结束需要 CPU 参与（预处理和后处理）")]),v._v(" "),_("li",[v._v("DMA 传送数据快且与 CPU 并行工作")])]),v._v(" "),_("p",[v._v("注意")]),v._v(" "),_("ul",[_("li",[v._v("CPU 对中断的响应必须在每个指令周期结束，对于 DMA 请求是在每个存取周期（机器周期）结束")]),v._v(" "),_("li",[v._v("DMA 对内存的访问权高于 CPU")]),v._v(" "),_("li",[v._v("数据传输过程不需要 CPU 控制，DMA 有自己的处理器")]),v._v(" "),_("li",[v._v("在 DMA 方式中，由外设发出 DMA 请求，由 DMA 控制器发出总线请求")])]),v._v(" "),_("h3",{attrs:{id:"i-o-通道控制方式"}},[v._v("I/O 通道控制方式")]),v._v(" "),_("p",[v._v("在大型计算机系统中，IO 设备多，输入输出多，DMA 远不能满足要求，于是引入通道")]),v._v(" "),_("p",[v._v("通道，是一种更高级的 IO 控制部件，拥有自己的软件，即"),_("strong",[v._v("通道程序")]),v._v("，相当于一个小型的 CPU，当然，通道受到 CPU 的管理，如开始和停止，并且要向 CPU 报告自己的状态")]),v._v(" "),_("ul",[_("li",[v._v("硬件：通道")]),v._v(" "),_("li",[v._v("软件：通道程序")]),v._v(" "),_("li",[v._v("相当于一个迷你 CPU\n"),_("ul",[_("li",[v._v("和 CPU 共享内存")]),v._v(" "),_("li",[v._v("指令较简单，只能做 IO")])])])]),v._v(" "),_("p",[v._v("通道的功能")]),v._v(" "),_("ul",[_("li",[v._v("接收 CPU 的 IO 指令")]),v._v(" "),_("li",[v._v("从主存取出通道指令，经译码后向外设发送命令")]),v._v(" "),_("li",[v._v("实现内存和外设的数据传送")]),v._v(" "),_("li",[v._v("从外设获取状态信息并放在主存中，供 CPU 访问使用")]),v._v(" "),_("li",[v._v("外设和自己的中断请求按次序及时报告 CPU")])]),v._v(" "),_("p",[v._v("通道的工作过程：通常几百万个字节传输 CPU 参与干扰一次")]),v._v(" "),_("ul",[_("li",[v._v("发出访管指令，进入内核态，编制通道程序")]),v._v(" "),_("li",[v._v("通道指令通道程序，组织 IO 操作")]),v._v(" "),_("li",[v._v("IO 操作结束后，CPU 响应通道发出的中断请求")])]),v._v(" "),_("p",[v._v("通道的类型")]),v._v(" "),_("ul",[_("li",[v._v("字节多路通道：带宽为求和")]),v._v(" "),_("li",[v._v("数组多路通道：带宽为 max")]),v._v(" "),_("li",[v._v("选择通道：带宽为 max")])]),v._v(" "),_("p",[v._v("DMA 方式和通道方式的区别")]),v._v(" "),_("ul",[_("li",[v._v("通道可以控制多台设备，DMA 控制单个外设")]),v._v(" "),_("li",[v._v("通道方式中 CPU 的干预更少")]),v._v(" "),_("li",[v._v("通道程序可以使用指令灵活改变，DMA 是写死的")])]),v._v(" "),_("h3",{attrs:{id:"i-o-处理机方式"}},[v._v("I/O 处理机方式")]),v._v(" "),_("p",[v._v("IO 处理机也叫外围处理机，有内存、有自己的指令集、能独立完成 IO 控制，能纠错改错，就是一个仅负责 IO 的小 CPU")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("IO 方式")]),v._v(" "),_("th",[v._v("实现原理")]),v._v(" "),_("th",[v._v("实现方式")]),v._v(" "),_("th",[v._v("适用范围")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("程序查询")]),v._v(" "),_("td",[v._v("CPU 执行输入输出指令")]),v._v(" "),_("td",[v._v("纯软件")]),v._v(" "),_("td",[v._v("中低速设备")])]),v._v(" "),_("tr",[_("td",[v._v("程序中断")]),v._v(" "),_("td",[v._v("执行终端服务程序")]),v._v(" "),_("td",[v._v("软件+硬件")]),v._v(" "),_("td",[v._v("中低速设备")])]),v._v(" "),_("tr",[_("td",[v._v("DMA")]),v._v(" "),_("td",[v._v("DMA 控制 IO")]),v._v(" "),_("td",[v._v("纯硬件")]),v._v(" "),_("td",[v._v("中高速且以高速为主")])]),v._v(" "),_("tr",[_("td",[v._v("通道")]),v._v(" "),_("td",[v._v("通过通道执行通道程序")]),v._v(" "),_("td",[v._v("软件+硬件")]),v._v(" "),_("td",[v._v("高速和超高速设备")])])])]),v._v(" "),_("p",[v._v("考试计算")]),v._v(" "),_("ul",[_("li",[v._v("计算 CPU 用于 IO 的时间")]),v._v(" "),_("li",[v._v("CPU 用于 IO 时间和 IO 总时间的比例")])]),v._v(" "),_("p",[v._v("栗题一")]),v._v(" "),_("ul",[_("li",[v._v("数据传输速率 / 字节单位 = 单位时间数据传输次数")]),v._v(" "),_("li",[v._v("数据传输次数 x 每次传输时间（时间周期） = IO 所花时间")]),v._v(" "),_("li",[v._v("IO 所花时间 / CPU 频率 = IO 所占比例")])]),v._v(" "),_("img",{attrs:{src:i(1304)}}),v._v(" "),_("p",[v._v("栗题二：周期挪用法")]),v._v(" "),_("ul",[_("li",[v._v("挪用/窃取的是存取周期，每个字节均窃取一次，常常存取周期假定为时钟周期")]),v._v(" "),_("li",[v._v("后处理属于一次中断，每批需要处理一次")])]),v._v(" "),_("img",{attrs:{src:i(1305)}}),v._v(" "),_("p",[v._v("可以发现周期窃取中等待的存取周期占大头，在各种情况中均是如此，并且数据越大，这种占比会越高")]),v._v(" "),_("p",[v._v("中断的不同")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("IO 方式")]),v._v(" "),_("th",[v._v("中断作用")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("中断 IO")]),v._v(" "),_("td",[v._v("借助中断传输数据")])]),v._v(" "),_("tr",[_("td",[v._v("DMA")]),v._v(" "),_("td",[v._v("借助中断后处理")])]),v._v(" "),_("tr",[_("td",[v._v("通道")]),v._v(" "),_("td",[v._v("第一次中断为了构造通道程序；第二次为了后处理")])]),v._v(" "),_("tr",[_("td",[v._v("程序查询")]),v._v(" "),_("td",[v._v("无中断")])])])]),v._v(" "),_("p",[v._v("三个设备，两个阶段")]),v._v(" "),_("ul",[_("li",[v._v("三个设备：内存/CPU、IO 接口、IO 设备")]),v._v(" "),_("li",[v._v("两个阶段：IO 准备数据阶段、IO 指令阶段")])]),v._v(" "),_("p",[v._v("其中 CPU 的作用范围仅仅作用于 IO 接口，外设也仅仅和 IO 接口打交道，这意味着：准备数据阶段和 CPU 其实无关，设备与 CPU 并行")]),v._v(" "),_("p",[v._v("请求内容")]),v._v(" "),_("ul",[_("li",[v._v("中断 IO 请求 CPU 处理时间")]),v._v(" "),_("li",[v._v("DMA 请求总线事务")])]),v._v(" "),_("p",[v._v("响应时间")]),v._v(" "),_("ul",[_("li",[v._v("中断 IO 发生在指令周期结束，这和中断是一致的")]),v._v(" "),_("li",[v._v("DMA 和周期窃取发生在存取周期结束")])])])}),[],!1,null,null,null);_.default=t.exports}}]);