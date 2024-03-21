---
title: 编译原理基础
date: 2021-9-12
tags:
  - Compilation
---

## 编译原理概述

<img src="./assets/QQ截图20221106140610.png">

翻译程序

- 编译程序：将高级语言程序转化为汇编语言程序或机器语言程序，不负责执行，只得到代码
- 解释程序：边翻译边执行

注意编译程序不同于汇编器，汇编器将汇编语言程序转化为机器语言程序

## 语言和文法

文法的语言：即由文法的识别符号推出的所有终结符符号串

### 集合及闭包

集合：集合元素不允许重复

集合相加：{1,2,3} + {3,4,5} = {1,2,3,4,5}

集合相乘：全相乘，集合乘自己称做集合的幂
$$
\{1,2,3\}\times\{4,5,6\} = \{4,5,6,8,10,12,15,18\}
$$
正闭包：集合幂的集合
$$
A^+=\sum_{i=1}^{n}A^i
$$
自反传递闭包：包含空集的正闭包
$$
A* = \sum_{i=0}^nA^i,A^0 = \empty
$$
### 四元式

文法的四元式表示：非终结符集，终结符集，产生式集，开始符号
$$
C[S] = (V_N,V_T,P,S)
$$
已知句子，用四元式描述其文法

<img src="./assets/QQ截图20221120140929.png">

自顶向下：推导

- 最左推导（规范推导）：每次被替换的是最左的非终结符
- 最右推导

自底向上：规约
- 最右规约（规范规约）
- 最左规约

四种文法

- 0 型文法 - 短语结构语言 - 图灵机
- 1 型文法 - 上下文有关 - 线性限界自动机
- 2 型文法 - 上下文无关 - 下推自动机
- 3 型文法 - 正规 - DFA

### 语法树及二义性

语法树：每个文法都对应一颗庞大的语法树，通过语法树可以生成该文法的所有句子

- 子树：任一结点及其全部后继
- 直接子树：子树高度为 2，即自身的下一层必须全是叶子结点

句子：可以通过语法树推导出的单词串集合

<img src="./assets/QQ截图20221120141719.png">

二义性

- 二义性文法：存在某个句子对应不止一棵语法树
- 无二义性文法：文法产生的每一个句子都只有一颗语法树

在实际做题时，举一个反例就行，就是说找到某一个句子，可以通过文法的两条路径推出，即可证明其为二义性文法

<img src="./assets/QQ截图20221120142643.png">

短语：每颗子树的叶子，如上题为`{a, bc, abc}`，列短语时，注意从下层子树向上遍历，递归地列出所有短语防止遗漏

直接短语：每颗直接子树的叶子，`{a, bc}`

句柄：最左直接短语，`a`

### 化简文法

化简文法：合并文法

- 消去无限循环的状态（所有含该状态的产生式都要消去）
- 消去空产生式，如 A->空，将 A 去掉
- 消去纯非终结符推纯非终结符，如 A->B，可将 A 这一中间状态消去
- 删除推不出的符号和产生式

<img src="./assets/QQ截图20221121132323.png">

## 词法分析

### 状态转移图 / 矩阵

右线性文法：非终结符总是在产生式的最右侧

状态转换图：如下图，弧上是条件，通过状态转换图能直接写出右线性文法

- 常通过语法树来推导状态转换图，再通过状态转换图写出右线性文法

栗子一：通过文法推出其右线性文法

画语法树，通过结果看文法，无限循环使用 C -> xC | x 的形式（产生无限个 x），即自身推出**要产生的无限循环字符以及自身**

<img src="./assets/截图_2022-11-21_12-00-19.png">

栗子二：通过状态转换图推出其右线性文法并对其能产生的句子进行分析

就从初始节点开始对每个状态进行分析即可，就是得到什么然后变成什么

<img src="./assets/截图_2022-11-21_12-08-44.png">

栗子三：写出状态转换矩阵的 3 型文法，3 型文法即**正规文法**，也就是左线性 / 右线性文法

通过状态转移矩阵推出对应状态转换图，分析**得到什么，变成什么**

再根据所得到的状态转换图分析句子或者直接看出其右线性文法

<img src="./assets/截图_2022-11-21_12-26-53.png">

### NFA 和 DFA

NFA：非确定有限状态自动机

DFA：确定有限状态自动机
$$
NFA=(K,\sum,f,S,Z)
$$
其中

- K 为所有状态集合
- Σ 为所有键入的符号集合
- f 为映射关系，即状态转换关系
- S 为初始状态
- Z 为终态集合

DFA 的确定性体现在

- 初始状态唯一
- 状态转换唯一，即一个状态键入同一个输入只能到达唯一的下一个状态（单值转换）
- 另外不能有空转换，如 A 收到 ε 转换为 B

NFA 确定化和最小化：确定化即将 NFA 转化为 DFA，最小化即把 DFA 文法化简

子集法对 NFA 进行确定化：先得到起始状态集合`ε-closure`，再通过状态转移矩阵分析，不断得到新的状态集合直到没有新状态产生

- 第一步：先将`ε-closure`状态集作为新结点，然后对其中每个旧结点进行映射分析，写出新的状态集
- 循环执行第二步：按照先来先处理的原则不断分析新的状态集直到没有新状态集产生

<img src="./assets/QQ截图20221122113850.png">

DFA 的化简：即 NFA 的最小化，消除 DFA 无用状态和合并等价状态

- 第一步：消去孤立状态，即不能被初态退出的状态
- 第二步：分割终态节点和非终态节点，在各区间内合并不可区分的状态

其实可以通过肉眼观察直接合并一些状态

<img src="./assets/QQ截图20221122134153.png">

正规式和 DFA：给定正则表达式（句子），推出其对应 NFA / DFA

从结果推文法，通过**分裂法**对产生方法进行分解，逐渐扩大为一整个带 ε 的状态转移图，即 NFA，再通过 NFA 的确定化以及 DFA 的化简得到最简 DFA

<img src="./assets/QQ截图20221122134535.png">

<img src="./assets/QQ截图20221122135028.png">

## 自顶向下语法分析

> 自顶向下语法分析采用最左推导方式，递归下降分析 / 预测分析
>
> LL(K) 分析：LL(1)
>

语法分析的任务

- 主要：分析单词串是如何构成语句和声明的
- 分析语句和说明如何构成程序的
- 分析程序结构

### 左递归消除

左递归文法

- 直接左递归：`S -> Sb | ε`
- 间接左递归：`S -> ASb | ε，A -> aA | ε`当 A 推出空时，`S -> Sb | ε`左递归

消除左递归：`A -> Aa | b`（通过添加状态，不改变原文法意义）

- `A -> bA'`
- `A' -> aA' | ε`

<img src="./assets/截图_2022-11-23_12-15-57.png">

### 状态集

#### FIRST

FIRST 集：指当前状态能推出的所有产生式的起始非终止符集合，针对**非终结符**，就是非终结符能推出的式子的起始终结符

#### FOLLOW

FOLLOW 集：指跟在当前状态后的状态，跟不是达到，而是紧邻的意思，如`A -> Bc`

- 状态 c 就跟在状态 B 后面，则 c 在 B 的 Follow 集中

FOLLOW 集同样针对的是非终结符，自然的，要找**跟在**符号后的非终结符，要从产生式右侧寻找，这里一定要注意右侧推出空的情况，如`A -> BCd, C -> ε` ，此时`d`同样在 B 的 FOLLOW 集合中，当然，FIRST(C) 也在 FOLLOW(B) 中

空同样可以存在于 FOLLOW 集合中，以 # 号表示

<img src="./assets/截图_2022-11-23_12-32-58.png">

#### SELECT

SELECT 集针对的是产生式，其意义是找到当前产生式的第一个非终结符，即，当前产生式以哪个非终结符起始，SELECT 集实际上就是产生式的起始符的集合

同样的，这里也要注意空的情况

- 若起始非终结符可以推出空，则要考虑后续的符号
- 若产生式右侧有  ε，则将 # 加入 SELECT 集

总结

| 状态集 | 分析关键                              |
| ------ | ------------------------------------- |
| FIRST  | 找产生式左侧为当前状态的式子          |
| FOLLOW | 找产生式右侧包含当前状态的式子        |
| SELECT | 指定每个产生式单独分析，找 FIRST 符号 |

### LL(1) 文法

自顶向下分析，必须

- 消除回溯
- 消除左递归
- 提取公共左因子

判断 LL(1) 文法

- 已化简且无左递归

- 找各个状态所有产生式的 SELECT 集合，他们必须两两相交为空


LL(1) 分析表

| LL1 分析表     | 终结符 a                  |
| -------------- | ------------------------- |
| **非终结符 S** | FIRST(S) = a 对应的产生式 |

<img src="./assets/QQ截图20221123155717.png">

LL1 文法判定：无左递归，同一状态的不同产生式 SELECT 集交为空

LL1 预测分析表：分析栈 - 剩余输入串 - 对应产生式

## 自底向上语法分析

LR 文法规约分析表：状态栈 - 符号栈 - 剩余输入串 - Action 列 - Goto 列

### LR(0) 文法

> 自底向上：简单优先；算符优先；优先函数；LR 分析

LR(0) 项目：右侧带`·`的产生式，项目集闭包对应自动机的一个状态

- 规约项目：后继符号为空的项目称为归约项目
- 接受项目：当 S' -> S ·，称为接受项目，此时识别了整个字符串
- 移进项目：后继符号为终结符的项目称为移进项目
- 待约项目：后继项目为非终结符的项目，称为待约项目

拓广（增广）文法：添加一个初始状态 S' -> S

根据文法写出状态集及推导关系

<img src="./assets/QQ截图20221124134112.png">

判断 LR(0) 文法：无冲突项目（状态），并且只存在唯一一个起始状态（增广文法）

- 移进-规约冲突：在同一状态内同时存在规约项目和移进项目
- 规约-规约冲突：在同一状态内同时存在不同的规约项目

注意**接受和移进项目在同一状态里并不构成冲突**，接受项目指从 S' 直接规约的项目，即产生式左侧为唯一起始状态

以上推出的 DFA 中并不存在冲突，于是判断其为 LR(0) 文法

| LR0 分析表      | Action：a \| b \| c \| # | Goto：A \| B \| S |
| --------------- | ------------------------ | ----------------- |
| **DFA状态编号** | 当前移进、规约动作       | 当前规约非终结符  |

Action 列中，填写的是移进、规约或接受的项目

- `Si`表示移进状态`i`，这个`i`是 DFA 中的状态编号
- `acc`表示该状态为接受项目，结束分析
- `ri`表示该项目为规约项目，i 为产生式的编号，表示以第 i 各产生式进行规约

Goto 表中，填写的待规约的下一个状态

- 这里直接填编号就行，指的是 DFA 中状态的编号

上述 DFA - LR(0)文法的分析表

<img src="./assets/QQ截图20221124202903.png">

### SLR(1) 文法

判断 SLR(1) 文法：用 FOLLOW 集合去区分同一状态的 规约-规约冲突 和 规约-移进冲突

DFA 中允许存在**移进-规约**冲突但要求规约产生式的左侧状态 FOLLOW 集和移进终结符相交为空，即**当前规约的状态不能被当前移进的非终结符跟随**

<img src="./assets/QQ截图20221124205738.png">

<img src="./assets/QQ截图20221124210806.png">

SLR(1) 文法中**允许存在规约规约冲突**，但同一状态规约项目的 FOLLOW 集不能有相交元素

如以下 A B 同时在 I0 状态规约，且 FOLLOW(A) 交 FOLLOW(B) 不为空，所以并非 SLR(1) 文法

<img src="./assets/QQ截图20221125152000.png">

### LR(1) 文法

LR(1) 文法的 DFA 书写时，多了一个向前搜索符，用`,`分隔，后写当前等价项右侧的第一个非终结符（集），比如`A->BCd,#`，则 B 的向前搜索符就是`First(C)`，C 的向前搜索符就是`d`

- 向前搜索符，其实就是当前状态每个非终结符的 FOLLOW 集合
- 同时（自然）要继承前者的后继

因为多了向前搜索符，即使多个产生式右侧推出同样的式子，若向前搜索符不同，也能对这些产生式进行区分，于是可以避免一些规约-规约冲突（向前搜索符实际上是 FOLLOW 集合的子集，这无疑缩小了 SLR(1) 的寻找范围，更加精确）

自然的，对于 LR(1) 文法的分析表，**当碰到规约或接受项目时，不是一股脑将规约式 ri 填一行，而是在指定的向前搜索符列填写规约项**，如以下 DFA 及分析表

<img src="./assets/QQ截图20221125150248.png">

<img src="./assets/QQ截图20221125150327.png">

LR(1) 识别串的分析过程

<img src="./assets/QQ截图20221125151443.png">

### LALR(1) 文法

若 LR(1) 文法合并同心集后**没有规约-规约冲突，而对移进-规约冲突无限制**，这样的文法叫做 LALR(1) 文法

<img src="./assets/QQ截图20221125153636.png">

<img src="./assets/QQ截图20221125192708.png">

自底向上总结

- LR(0)：无冲突
- SLR(1)：可以有冲突，但有限制
  - 规约-规约不能 follow 同种元素
  - 移入-规约不能移入和 follow 同种元素
- LALR(1)：合并同心集后无规约-规约冲突，无所谓移进-规约冲突
- LA(1)：合并前无规约-规约冲突，无所谓移进-规约冲突

## 语法制导翻译

> 语义翻译：语义分析 + 中间代码生成
>
> 语法制导翻译：语法分析 + 语义分析 + 中间代码生成
>

基本思想：为上下文有关文法的文法符号设置**语义属性**，在构建语法分析树时，同时利用**语义规则**分析各节点语义属性值

### SDD

语法制导定义：对 CFG（上下文无关文法）的推广

> 文法符号的属性
>

综合属性：文法本身或由子节点定义的属性，如 E->E1+E2，E.val = E1.val + E2.val

继承属性：文法本身或由父节点、兄弟节点定义的属性

终结符无继承属性，其由词法分析器提供的值为综合属性

> 语义规则的作用
>

递归定义综合 / 继承属性

产生副作用，如打印节点某一属性值

注意，没有副作用的 SDD 称为**属性文法**

> S-SDD

仅仅使用综合属性的 SDD

> L-SDD
>

其综合属性纯由子节点提供

其继承属性纯由父节点或左兄弟节点提供

**在实际分析时，就是构造出文法句子对应的语法树，递归向上分析，每次规约执行相应语义动作，实现一个完整的语义过程**

### SDT

语法制导翻译方案：在产生式右部嵌入程序片段的 CFG，程序片段也被称为**语义动作**

S-SDD 转换 SDT：将每个产生式左侧非终结符的语义规则直接写在产生式最右端

L-SDD 转换 SDT

- 将计算某个非终结符号A的继承属性的动作**插入到产生式右部中紧靠在A的本次出现之前的位置上**
- 将计算一个产生式左部符号的综合属性的动作放置在这个产生式右部的最右端（同 S-SDD）

如果一个 S-SDD 的基本文法可以使用 LR 分析技术， 那么它的 SDT 可以在 LR 语法分析过程中实现

如果一个 L-SDD 的基本文法可以使用 LL 分析技术， 那么它的 SDT 可以在 LL 或 LR 语法分析过程中实现

## 中间代码生成

对语法制导翻译的扩展

### 逆波兰式

后缀表示：括号优先级最高，幂运算大于乘除大于加减，关系运算符次之，大于逻辑运算符

- `A+B ——> AB+`
- `B*(A+C) ——> B AC+ *`
- `A+B <= C ——> AB+ C <=`

中缀式转后缀式

<img src="./assets/QQ截图20221125194453.png">

后缀式转中缀式

<img src="./assets/QQ截图20221125195257.png">

### 三地址码和四元式

> 也叫三地址代码

四元式（操作符，左操作符，右操作符，结果）

<img src="./assets/QQ截图20221125195626.png">

### 代码回填

当碰到转移指令时，不急着填转移处，而是继续向后写直到转移点被写出后再进行回填

<img src="./assets/QQ截图20221125200514.png">

<img src="./assets/QQ截图20221125201303.png">

## 运行时存储组织

**控制栈**存放**活动记录**，**活动记录**按照**活动树**节点扩展顺序依次入栈，**访问链**表示各个活动记录之间的相互调用关系，这里涉及到静态作用域的问题，即只有**嵌套深度**相差 1 的活动可以直接调用

一个活动记录由三部分组成：活动名称 - 访问链 - 临时变量

每个活动记录的访问链指向其被直接调用的活动记录的访问链，如`sort`直接调用`partition`，则`partition`的访问链指向其相邻`sort`的访问链，`sort`的访问链最终一定间接指向`main`的访问链

嵌套深度指活动记录在活动树中的最高层，如

```c
int partition(int l, int r, int[] arr){
    int mid;
    // ... 得到分割点 //
    return mid;
}

void sort(int l, int r, int[] arr){
    int mid = parition(l, r, arr);
    // ... 排列当前 //
    sort(l, mid-1, arr);
    sort(mid+1, r, arr);
}

int main(){
    int[] arr = {4,3,2,1};
    sort(0, 3, arr);
}   
```

首先，`main`在活动树的最高层，嵌套深度为 1

在递归程序中，控制栈可能同时存在多个相同的过程（函数），其嵌套深度为最浅的一个，如`sort`嵌套深度为 2，因为它最先在`main`中被调用，而`main`深度为 1，自然`sort`深度为`1+1=2`

同理，`partition`最先在`sort`中被调用，于是其深度为`2+1=3`

## 代码优化和目标代码生成

基本块：一段连续的中间代码，只有一个入口和一个出口，这意味这基本块中途是没有任何跳转指令的

流图：由基本快构成的流程图，有循环、顺序结构

优化技术

- 删除公共子表达式
- 循环不变计算移出循环