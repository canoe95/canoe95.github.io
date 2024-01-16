(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1356:function(s,t,a){"use strict";a.r(t);var i=a(1),l=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"回溯法"}},[s._v("回溯法")]),s._v(" "),t("p",[s._v("基于 DFS，带有回退功能的深度优先搜索，可以提前结束一次错误的搜索或提前返回最优解")]),s._v(" "),t("p",[s._v("经典问题：装载问题，n 后问题，0-1 背包问题，旅行商问题")]),s._v(" "),t("p",[s._v("智能穷举法（intelligent exhaustive search）")]),s._v(" "),t("ul",[t("li",[s._v("回溯法（backtracking）")]),s._v(" "),t("li",[s._v("分支限界法（branch-and-bound）")])]),s._v(" "),t("p",[s._v("回溯法的算法框架")]),s._v(" "),t("ul",[t("li",[s._v("按深度优先策略，从根结点出发搜索问题解空间树")]),s._v(" "),t("li",[s._v("算法搜索至解空间树的任意节点时，先判断该结点是否包含问题的解\n"),t("ul",[t("li",[s._v("如果肯定不包含，则跳过对该结点为根的子树的搜索，逐层向其祖先结点回溯")]),s._v(" "),t("li",[s._v("否则进入该子树，继续按深度优先策略搜索")])])]),s._v(" "),t("li",[s._v("回溯法求问题的所有解时，要回溯到根节点，且根节点的所有子树都已被搜索遍才结束")])]),s._v(" "),t("p",[s._v("在最坏的情况下，还是要面对穷举查找中遇到的指数级爆炸问题")]),s._v(" "),t("p",[s._v("死节点和活节点：碰到死节点回溯至祖先活结点，重新进行扩展，直到解空间没有活节点")]),s._v(" "),t("p",[s._v("剪枝函数")]),s._v(" "),t("ul",[t("li",[s._v("约束函数：在扩展结点处剪去不满足约束的子树")]),s._v(" "),t("li",[s._v("限界函数：剪去得不到最优解的子树")])]),s._v(" "),t("p",[s._v("回溯实现类型")]),s._v(" "),t("ul",[t("li",[s._v("递归回溯：对解空间作深度优先搜索")]),s._v(" "),t("li",[s._v("迭代回溯：采用树的"),t("strong",[s._v("非递归")]),s._v("深度遍历算法")])]),s._v(" "),t("p",[s._v("解空间树类型")]),s._v(" "),t("ul",[t("li",[s._v("子集树")]),s._v(" "),t("li",[s._v("排列树")])]),s._v(" "),t("h3",{attrs:{id:"装载问题"}},[s._v("装载问题")]),s._v(" "),t("p",[s._v("装载策略")]),s._v(" "),t("ul",[t("li",[s._v("首先将第一艘轮船"),t("strong",[s._v("尽可能")]),s._v("装满")]),s._v(" "),t("li",[s._v("将剩余的集装箱装上第二艘轮船")])]),s._v(" "),t("img",{attrs:{src:a(483)}}),s._v(" "),t("h3",{attrs:{id:"n-皇后问题"}},[s._v("n 皇后问题")]),s._v(" "),t("p",[s._v("n 皇后问题要求把 n 个皇后放在一个 n × n 的棋盘上，使得任何两个皇后都不能相互攻击，即它们不能同行，不能同列，也不能位于同一条对角线上（相当于象棋"),t("code",[s._v("士")]),s._v("和"),t("code",[s._v("帅")]),s._v("的移动），问一共有多少 种摆放方法")]),s._v(" "),t("p",[s._v("算法设计")]),s._v(" "),t("ul",[t("li",[s._v("对于"),t("code",[s._v("n")]),s._v("后问题, 用"),t("code",[s._v("n")]),s._v("元组"),t("code",[s._v("x[1..n]")]),s._v("表示它的解")]),s._v(" "),t("li",[t("code",[s._v("x[i]")]),s._v("表示皇后"),t("code",[s._v("i")]),s._v("放在棋盘的第"),t("code",[s._v("i")]),s._v("行的第"),t("code",[s._v("x[i]")]),s._v("列，即坐标为"),t("code",[s._v("(i, x[i])")])]),s._v(" "),t("li",[s._v("约束条件\n"),t("ul",[t("li",[s._v("解向量中的诸"),t("code",[s._v("x[i]")]),s._v("互不相同，即"),t("code",[s._v("x[i] != x[j]")])]),s._v(" "),t("li",[s._v("任意 2 个皇后不在同一斜线，转化为"),t("code",[s._v("|i-x[i]| != |j-x[j]|")])])])])]),s._v(" "),t("h3",{attrs:{id:"_0-1-背包问题"}},[s._v("0/1 背包问题")]),s._v(" "),t("p",[s._v("解空间：子集树")]),s._v(" "),t("p",[s._v("算法过程")]),s._v(" "),t("ul",[t("li",[s._v("无脑扩展左子树，即令当前"),t("code",[s._v("x[i]")]),s._v("为 1")]),s._v(" "),t("li",[s._v("设 Vr 是当前剩余物品价值总和，Vc 是当前价值，Vb 是当前最优价值，当 Vc + Vr ≤ Vb 时，可剪去右子树")])]),s._v(" "),t("p",[s._v("计算最优值上界：按照性价比排序，优先装入性价比高的物品，装不下的时候装入部分当前性价比最高的物品，计算总价值")]),s._v(" "),t("img",{attrs:{src:a(484)}}),s._v(" "),t("h3",{attrs:{id:"旅行商问题"}},[s._v("旅行商问题")]),s._v(" "),t("p",[s._v("给定一张带权图，"),t("strong",[s._v("周游路线")]),s._v("指包括图每个节点的一条回路，"),t("strong",[s._v("周游费用")]),s._v("指这条路线上的权之和，旅行商问题即找出周游费用最小的周游路线")]),s._v(" "),t("p",[s._v("解空间：排列树")]),s._v(" "),t("p",[s._v("算法设计")]),s._v(" "),t("img",{attrs:{src:a(485)}}),s._v(" "),t("img",{attrs:{src:a(486)}}),s._v(" "),t("h2",{attrs:{id:"分枝限界法"}},[s._v("分枝限界法")]),s._v(" "),t("p",[s._v("基于 BFS，在扩展结点的过程中，边搜索边减去树的某些分支，在当前节点的儿子节点中找到最优的一个向下扩展")]),s._v(" "),t("p",[s._v("经典问题：单源最短路径问题，装载问题，0-1 背包问题")]),s._v(" "),t("p",[s._v("剪枝策略")]),s._v(" "),t("ul",[t("li",[s._v("节点不能构成可行解")]),s._v(" "),t("li",[s._v("该节点的边界值不优于目前最优解的解，有两种情况\n"),t("ul",[t("li",[s._v("第一种：其边界值小于某来自"),t("strong",[s._v("同一直系父节点")]),s._v("的兄弟节点")]),s._v(" "),t("li",[s._v("第二种：多次访问到该节点，删除边界值较大的节点分支")])])])]),s._v(" "),t("p",[s._v("两种分枝限界方式")]),s._v(" "),t("ul",[t("li",[s._v("队列式分支限界法：按照队列先进先出原则选取下一 个节点为扩展节点")]),s._v(" "),t("li",[s._v("优先队列式分支限界法：按照优先队列中规定的优先级选取优先级最高的节点成为当前扩展节点")])]),s._v(" "),t("h3",{attrs:{id:"单源最短路径问题"}},[s._v("单源最短路径问题")]),s._v(" "),t("p",[s._v("剪枝策略：优先级判定条件为当前节点到起点的路长")]),s._v(" "),t("ul",[t("li",[s._v("当不小于（大于等于）当前节点的最短路长，删去")]),s._v(" "),t("li",[s._v("当第二次经过该节点，删去路径较长的那一颗子树")])]),s._v(" "),t("img",{attrs:{src:a(487)}}),s._v(" "),t("img",{attrs:{src:a(488)}}),s._v(" "),t("p",[s._v("其中，经过路径 p 以最小的长度到达了终点 t")]),s._v(" "),t("h3",{attrs:{id:"装载问题-2"}},[s._v("装载问题")]),s._v(" "),t("img",{attrs:{src:a(489)}}),s._v(" "),t("img",{attrs:{src:a(490)}}),s._v(" "),t("img",{attrs:{src:a(491)}}),s._v(" "),t("h3",{attrs:{id:"_0-1-背包问题-2"}},[s._v("0/1 背包问题")]),s._v(" "),t("p",[s._v("考虑 0/1 背包问题：n = 3, w = [16, 15, 15], v = [45, 25, 25], c = 30")]),s._v(" "),t("ul",[t("li",[s._v("队列式分枝限界利用一个队列来记录活节点，节点将按照顺序从队列中取出")]),s._v(" "),t("li",[s._v("优先队列分枝限界使用一个最大堆，该队列的优先级定义为活节点所获得的价值")])]),s._v(" "),t("p",[s._v("以这样的方式，可以列出所有背包装载的情况")]),s._v(" "),t("img",{attrs:{src:a(492)}}),s._v(" "),t("p",[s._v("定义第 i 个物品的上界 ub（性价比）\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mi",[s._v("u")]),t("mi",[s._v("b")]),t("mo",[s._v("=")]),t("msub",[t("mi",[s._v("v")]),t("mi",[s._v("i")])],1),t("mo",[s._v("+")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("C")]),t("mo",[s._v("−")]),t("msub",[t("mi",[s._v("w")]),t("mi",[s._v("i")])],1),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("msub",[t("mi",[s._v("v")]),t("mrow",[t("mi",[s._v("i")]),t("mo",[s._v("+")]),t("mn",[s._v("1")])],1)],1),t("mi",{attrs:{mathvariant:"normal"}},[s._v("/")]),t("msub",[t("mi",[s._v("w")]),t("mrow",[t("mi",[s._v("i")]),t("mo",[s._v("+")]),t("mn",[s._v("1")])],1)],1),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nub = v_i + (C − w_i)(v_{i+1}/w_{i+1})\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("b")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7333em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[s._v("w")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0269em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),t("span",{staticClass:"mbin mtight"},[s._v("+")]),t("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2083em"}},[t("span")])])])])]),t("span",{staticClass:"mord"},[s._v("/")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[s._v("w")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0269em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")]),t("span",{staticClass:"mbin mtight"},[s._v("+")]),t("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2083em"}},[t("span")])])])])]),t("span",{staticClass:"mclose"},[s._v(")")])])])])])])],1),s._v("\nC 是当前还能装载的重量")]),s._v(" "),t("p",[s._v("对上述空间树进行剪枝，剪枝策略为")]),s._v(" "),t("ul",[t("li",[s._v("删除当前层直系兄弟节点中"),t("code",[s._v("ub")]),s._v("大于等于当前最小"),t("code",[s._v("ub")]),s._v("的节点分支")]),s._v(" "),t("li",[s._v("删除装不进的分支")])]),s._v(" "),t("img",{attrs:{src:a(493)}}),s._v(" "),t("img",{attrs:{src:a(494)}}),s._v(" "),t("h2",{attrs:{id:"线性规划与网络流"}},[s._v("线性规划与网络流")]),s._v(" "),t("h3",{attrs:{id:"线性规划算法模型"}},[s._v("线性规划算法模型")]),s._v(" "),t("p",[s._v("线性规划问题是一个多变量线性函数的最优化问题，参考高中的平面线性规划")]),s._v(" "),t("ul",[t("li",[s._v("所有可行解构成的集合为线性规划问题的可行区域")]),s._v(" "),t("li",[s._v("目标函数取得极值的可行解称为最优解, 在最优解 处目标函数的值称为最优值")]),s._v(" "),t("li",[s._v("有些情况下可能不存在最优解\n"),t("ul",[t("li",[s._v("可行域不存在")]),s._v(" "),t("li",[s._v("目标函数在可行域没有极值，即无界")])])])]),s._v(" "),t("p",[s._v("举个栗子")]),s._v(" "),t("img",{attrs:{src:a(495)}}),s._v(" "),t("h3",{attrs:{id:"单纯形算法"}},[s._v("单纯形算法")]),s._v(" "),t("blockquote",[t("p",[s._v("求解线性规划问题")])]),s._v(" "),t("p",[s._v("极点定理：可行区域非空的任意线性规划问题有最优解，而且最优解总是能够在其可行区域的一个极点上找到")]),s._v(" "),t("p",[s._v("于是产生朴素想法：穷举可行域中所有极点，找出最大值，但极点数是指数增长的")]),s._v(" "),t("p",[s._v("单纯形法的几何描述")]),s._v(" "),t("ul",[t("li",[s._v("先在可行区域内找到一个极点，然后检查一下邻接极点处是否可以让目标函数取值更佳\n"),t("ul",[t("li",[s._v("No，当前顶点就是最优点，算法停止")]),s._v(" "),t("li",[s._v("Yes，处理下个能让目标函数取值更佳的邻接顶点")])])]),s._v(" "),t("li",[s._v("有限步之后，该算法可以找到一个最优解的极点，或证明最优解不存在")])]),s._v(" "),t("p",[s._v("线性规划问题的约束标准型，限制条件均为等式的线性规划问题称为约束标准型")]),s._v(" "),t("p",[s._v("在解决线性规划问题是添加一组"),t("strong",[s._v("基变量")]),s._v("将限制条件全化为等式的形式，转化为约束标准型，再通过单纯形法进行求解")]),s._v(" "),t("p",[s._v("一个栗子：要求最大值的 z 的式子的各项系数是始终不变的；检验数均小于等于 0 时迭代完成，其中")]),s._v(" "),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("msub",[t("mi",[s._v("Z")]),t("mi",[s._v("j")])],1),t("mo",[s._v("=")]),t("msub",[t("mi",[s._v("C")]),t("mi",[s._v("B")])],1),t("mo",[s._v("×")]),t("msub",[t("mi",[s._v("x")]),t("mi",[s._v("i")])],1),t("mtext"),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mtext"),t("mtext"),t("mtext",[s._v("如")]),t("mtext"),t("msub",[t("mi",[s._v("Z")]),t("mn",[s._v("1")])],1),t("mo",[s._v("=")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mn",[s._v("0")]),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mn",[s._v("0")]),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mn",[s._v("0")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",[s._v("×")]),t("mrow",[t("mo",{attrs:{fence:"true"}},[s._v("[")]),t("mtable",{attrs:{rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"}},[t("mtr",[t("mtd",[t("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[t("mn",[s._v("1")])],1)],1)],1),t("mtr",[t("mtd",[t("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[t("mn",[s._v("2")])],1)],1)],1),t("mtr",[t("mtd",[t("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[t("mn",[s._v("1")])],1)],1)],1)],1),t("mo",{attrs:{fence:"true"}},[s._v("]")])],1),t("mo",[s._v("=")]),t("mn",[s._v("0")]),t("mspace",{attrs:{linebreak:"newline"}}),t("msub",[t("mi",[s._v("δ")]),t("mi",[s._v("j")])],1),t("mo",[s._v("=")]),t("msub",[t("mi",[s._v("C")]),t("msub",[t("mi",[s._v("B")]),t("mi",[s._v("j")])],1)],1),t("mo",[s._v("−")]),t("msub",[t("mi",[s._v("Z")]),t("mi",[s._v("j")])],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nZ_j = C_B\\times x_i\\,,\\,\\,\n如\\,Z_1\n=\n[0,0,0]\\times\n\\begin{bmatrix}\n1\\\\\n2\\\\\n1\n\\end{bmatrix}\n= 0\n\\\\\nδ_j = C_{B_j} - Z_j\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.9694em","vertical-align":"-0.2861em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("Z")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8333em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8778em","vertical-align":"-0.1944em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord cjk_fallback"},[s._v("如")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("Z")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("1")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"3.6em","vertical-align":"-1.55em"}}),t("span",{staticClass:"minner"},[t("span",{staticClass:"mopen"},[t("span",{staticClass:"delimsizing mult"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"2.05em"}},[t("span",{staticStyle:{top:"-4.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"5.6em"}}),t("span",{staticStyle:{width:"0.667em",height:"3.600em"}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600"}},[t("path",{attrs:{d:"M403 1759 V84 H666 V0 H319 V1759 v0 v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v0 v1759 h84z"}})])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.55em"}},[t("span")])])])])]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mtable"},[t("span",{staticClass:"col-align-c"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"2.05em"}},[t("span",{staticStyle:{top:"-4.21em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("1")])])]),t("span",{staticStyle:{top:"-3.01em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("2")])])]),t("span",{staticStyle:{top:"-1.81em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("1")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.55em"}},[t("span")])])])])])]),t("span",{staticClass:"mclose"},[t("span",{staticClass:"delimsizing mult"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"2.05em"}},[t("span",{staticStyle:{top:"-4.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"5.6em"}}),t("span",{staticStyle:{width:"0.667em",height:"3.600em"}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"3.600em",viewBox:"0 0 667 3600"}},[t("path",{attrs:{d:"M347 1759 V0 H0 V84 H263 V1759 v0 v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v0 v1759 h84z"}})])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.55em"}},[t("span")])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("0")])]),t("span",{staticClass:"mspace newline"}),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.9805em","vertical-align":"-0.2861em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03785em"}},[s._v("δ")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0379em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1.0307em","vertical-align":"-0.3473em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05017em"}},[s._v("B")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3281em"}},[t("span",{staticStyle:{top:"-2.357em","margin-left":"-0.0502em","margin-right":"0.0714em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),t("span",{staticClass:"sizing reset-size3 size1 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2819em"}},[t("span")])])])])])])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3473em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.9694em","vertical-align":"-0.2861em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("Z")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[t("span")])])])])])])])])])])],1),t("img",{attrs:{src:a(496)}}),s._v(" "),t("h3",{attrs:{id:"增广路算法"}},[s._v("增广路算法")]),s._v(" "),t("blockquote",[t("p",[s._v("网络最大流")])]),s._v(" "),t("p",[s._v("网络：即一张有向带权图，每条边有最大容纳流量"),t("code",[s._v("cap(v,w)")]),s._v("，表示从节点 v 到节点 w 这条边的最大容纳量")]),s._v(" "),t("p",[s._v("边的分类")]),s._v(" "),t("ul",[t("li",[s._v("零流边：flow = 0")]),s._v(" "),t("li",[s._v("饱和边：flow = cap")]),s._v(" "),t("li",[s._v("弱流边：flow < cap")])]),s._v(" "),t("p",[s._v("最大流问题：每条边的输入输出流"),t("strong",[s._v("没有浪费")])]),s._v(" "),t("img",{attrs:{src:a(497)}}),s._v(" "),t("p",[s._v("从起点 s 到终点 t，边的分类")]),s._v(" "),t("ul",[t("li",[s._v("向前边：边和路的方向一致")]),s._v(" "),t("li",[s._v("向后边：反之")])]),s._v(" "),t("p",[s._v("可增广路定义：从 s 到 t 的一条路 P 中，所有向前边的 flow 均小于 cap，所有向后边 flow > 0（向前边非饱和，向后边非零流）")]),s._v(" "),t("ul",[t("li",[s._v("可增广路指，可以通过修正边流量使之成为流值更大的可行流")])]),s._v(" "),t("p",[s._v("可增广路增流：就是向前边增多少，相关联的向后边就要减多少")]),s._v(" "),t("img",{attrs:{src:a(498)}}),s._v(" "),t("img",{attrs:{src:a(499)}}),s._v(" "),t("p",[s._v("可增广量 d 必然是有限制的")]),s._v(" "),t("ul",[t("li",[s._v("他不会使任一向前流的 flow 超过其 cap")]),s._v(" "),t("li",[s._v("同时不会使任一向后流的 flow 小于 0")])]),s._v(" "),t("p",[s._v("增广路定理：若 flow 是一条 G 的可行流，且不存在任何可增广路，则 flow 是网络 G 的一个最大流")]),s._v(" "),t("p",[s._v("一个栗子")]),s._v(" "),t("img",{attrs:{src:a(500)}}),s._v(" "),t("img",{attrs:{src:a(501)}}),s._v(" "),t("img",{attrs:{src:a(502)}}),s._v(" "),t("p",[s._v("复杂度分析")]),s._v(" "),t("img",{attrs:{src:a(503)}})])}),[],!1,null,null,null);t.default=l.exports},483:function(s,t,a){s.exports=a.p+"assets/img/image-20230210142730758.6aa0fd70.png"},484:function(s,t,a){s.exports=a.p+"assets/img/image-20230210144734194.f912c6be.png"},485:function(s,t,a){s.exports=a.p+"assets/img/image-20230210151253244.96f43bef.png"},486:function(s,t,a){s.exports=a.p+"assets/img/image-20230210151311754.a600367a.png"},487:function(s,t,a){s.exports=a.p+"assets/img/image-20230204221925578.14990b1a.png"},488:function(s,t,a){s.exports=a.p+"assets/img/image-20230204221906901.ac001615.png"},489:function(s,t,a){s.exports=a.p+"assets/img/image-20230205011351879.3b439288.png"},490:function(s,t,a){s.exports=a.p+"assets/img/image-20230205011857556.86540626.png"},491:function(s,t,a){s.exports=a.p+"assets/img/image-20230205011809174.2df9e7ab.png"},492:function(s,t,a){s.exports=a.p+"assets/img/image-20230204214422861.c4f7044a.png"},493:function(s,t,a){s.exports=a.p+"assets/img/image-20230204222202568.a89a1871.png"},494:function(s,t,a){s.exports=a.p+"assets/img/image-20230204223041807.d8f65956.png"},495:function(s,t,a){s.exports=a.p+"assets/img/image-20230205012943469.e6354c65.png"},496:function(s,t,a){s.exports=a.p+"assets/img/image-20230206160330363.81677be6.png"},497:function(s,t,a){s.exports=a.p+"assets/img/image-20230208145311995.97fb9686.png"},498:function(s,t,a){s.exports=a.p+"assets/img/image-20230208151352888.cfb9171f.png"},499:function(s,t,a){s.exports=a.p+"assets/img/image-20230208151414839.316de323.png"},500:function(s,t,a){s.exports=a.p+"assets/img/image-20230208152031698.c6925cd1.png"},501:function(s,t,a){s.exports=a.p+"assets/img/image-20230208152052478.fb9a9ae3.png"},502:function(s,t,a){s.exports=a.p+"assets/img/image-20230208152119464.b6951864.png"},503:function(s,t,a){s.exports=a.p+"assets/img/image-20230208152151880.43f5c80e.png"}}]);