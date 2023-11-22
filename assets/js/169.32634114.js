(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1668:function(v,_,e){"use strict";e.r(_);var i=e(1),l=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"mdps"}},[v._v("MDPs")]),v._v(" "),_("blockquote",[_("p",[v._v("Markov Decision Processes")]),v._v(" "),_("p",[v._v("马尔可夫决定过程")])]),v._v(" "),_("h3",{attrs:{id:"what-is-mdps"}},[v._v("What is MDPs")]),v._v(" "),_("p",[v._v("进程：对搜索的概括")]),v._v(" "),_("p",[v._v("计算可能的结果")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("GridWorld")]),v._v("中，你决定向北走（因为这是最佳策略），但可能会执行失败（撞墙）")]),v._v(" "),_("p",[v._v("MDP：Reward ——> 结果")]),v._v(" "),_("ul",[_("li",[v._v("happy reward")]),v._v(" "),_("li",[v._v("bad reward")])]),v._v(" "),_("p",[v._v("目标很松散 ——>为了最大化奖励的总和")]),v._v(" "),_("p",[v._v("An MDP is defined by")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("a set of states s")])]),v._v(" "),_("li",[_("p",[v._v("a set of actions a")])]),v._v(" "),_("li",[_("p",[v._v("a transition function T(s, a, s')")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Probability that a from s leads to s', called P(s'| s, a)")]),v._v(" "),_("p",[v._v("在s状态执行a行为到达s'的代价")])]),v._v(" "),_("li",[_("p",[v._v("Also called the model or the dynamics")]),v._v(" "),_("p",[v._v("不同于搜索，这个后继函数有很多个，如在每个地点都可以向东南西北移动")])])])]),v._v(" "),_("li",[_("p",[v._v("a reward function R(s, a, s')")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("sometimes just R(s) or R(s')")]),v._v(" "),_("p",[v._v("奖惩制度，有时只取决起点或终点")])])])]),v._v(" "),_("li",[_("p",[v._v("a start state")])]),v._v(" "),_("li",[_("p",[v._v("maybe a terminal state")])])]),v._v(" "),_("p",[v._v("MDPs是不确定性搜索问题")]),v._v(" "),_("ul",[_("li",[v._v("强化学习的基础")])]),v._v(" "),_("p",[v._v("expectimax（最大期望算法）算法可以MDP问题")]),v._v(" "),_("p",[v._v("action outcomes depend on")]),v._v(" "),_("ul",[_("li",[v._v("未来要到达的状态")]),v._v(" "),_("li",[v._v("你要执行的行动")])]),v._v(" "),_("p",[v._v("MDPs适合嘈杂的世界")]),v._v(" "),_("p",[_("strong",[v._v("Grid World")])]),v._v(" "),_("p",[v._v("Policy：策略")]),v._v(" "),_("ul",[_("li",[v._v("通过状态告诉你动作的功能")]),v._v(" "),_("li",[v._v("如在地图上每个点标好你该往哪个方向走")])]),v._v(" "),_("p",[v._v("optimal policy：最优策略")]),v._v(" "),_("ul",[_("li",[v._v("或许存在很多等效策略")])]),v._v(" "),_("p",[v._v("competition")]),v._v(" "),_("ul",[_("li",[v._v("移动奖励（负0.1）是那么微不足道而不值得冒险去坑附近")]),v._v(" "),_("li",[v._v("宁愿什么都不做，也不愿犯错")])]),v._v(" "),_("p",[v._v("当移动代价变得更大，策略将更倾向与冒险在坑附近")]),v._v(" "),_("p",[v._v("当更更大时，甚至有可能直接跳坑而避免移动花销")]),v._v(" "),_("p",[_("strong",[v._v("Racing")])]),v._v(" "),_("p",[v._v("states：")]),v._v(" "),_("ul",[_("li",[v._v("cool")]),v._v(" "),_("li",[v._v("warm")]),v._v(" "),_("li",[v._v("overheated：risk the danger of breaking")])]),v._v(" "),_("p",[v._v("跟据当前的温度决定是加速还是减速")]),v._v(" "),_("p",[_("strong",[v._v("Racing Search Tree")])]),v._v(" "),_("blockquote",[_("p",[v._v("tool：epectimax search")])]),v._v(" "),_("p",[v._v("actions：")]),v._v(" "),_("ul",[_("li",[v._v("slower")]),v._v(" "),_("li",[v._v("faster")])]),v._v(" "),_("p",[v._v("state：")]),v._v(" "),_("ul",[_("li",[v._v("warm")]),v._v(" "),_("li",[v._v("cool")]),v._v(" "),_("li",[v._v("over heated")])]),v._v(" "),_("p",[v._v("这棵树是无限的")]),v._v(" "),_("ul",[_("li",[v._v("Q state：选择了但还没行动的过度状态")])]),v._v(" "),_("p",[_("strong",[v._v("Utilities of Sequences")])]),v._v(" "),_("p",[v._v("实用程序的选择顺序")]),v._v(" "),_("ul",[_("li",[v._v("more or less")]),v._v(" "),_("li",[v._v("now or later")])]),v._v(" "),_("p",[v._v("隐含的权衡")]),v._v(" "),_("p",[_("strong",[v._v("discount")])]),v._v(" "),_("p",[v._v("对奖励的贬值，对晚来的价值施以惩罚，如每走一步，未得到的价值便腐朽0.8，0.8便是折扣")]),v._v(" "),_("p",[v._v("当折扣越大，即"),_("code",[v._v("λ")]),v._v("越小，agent将变得越贪婪，越在意眼前的价值，而不是以后获得更大的利益")]),v._v(" "),_("p",[_("strong",[v._v("Preferences")])]),v._v(" "),_("p",[v._v("假设偏好是固定的")]),v._v(" "),_("p",[v._v("two ways to define utilities")]),v._v(" "),_("ul",[_("li",[v._v("additive utility")]),v._v(" "),_("li",[v._v("discounted utility")])]),v._v(" "),_("p",[v._v("如何处理无限的问题")]),v._v(" "),_("ul",[_("li",[v._v("Finite horizen：similar to depth-limited search，即限定树的深度")]),v._v(" "),_("li",[v._v("Discounting：价值总是贬值，将无限接近于0")]),v._v(" "),_("li",[v._v("Absorbing state：使用一系列终止状态，即")])]),v._v(" "),_("p",[v._v("Markov decision processes：")]),v._v(" "),_("ul",[_("li",[v._v("状态集")]),v._v(" "),_("li",[v._v("初始状态")]),v._v(" "),_("li",[v._v("行为集")]),v._v(" "),_("li",[v._v("过渡函数：提供的是概率")]),v._v(" "),_("li",[v._v("奖惩机制")])]),v._v(" "),_("p",[v._v("它的输出是每个state上对应的action，他实际上并没有真正在试错，而是去给每个状态分配最佳的行动，这就是MDP")]),v._v(" "),_("h3",{attrs:{id:"solving-mdps"}},[v._v("Solving MDPs")]),v._v(" "),_("p",[v._v("Quantities：")]),v._v(" "),_("ul",[_("li",[v._v("Policy：map of states of actions")]),v._v(" "),_("li",[v._v("Utility：sum of discounted reward")]),v._v(" "),_("li",[v._v("Values：expected future utility from a state（max node）")]),v._v(" "),_("li",[v._v("Q Values：expected future from a q-state（chance node）")])]),v._v(" "),_("p",[v._v("Optimal Quantities")]),v._v(" "),_("ul",[_("li",[v._v("V(s)*：状态的期望值（或许是平均值）")]),v._v(" "),_("li",[v._v("Q*(s, a)：在状态s执行动作a后起的最佳作用")]),v._v(" "),_("li",[v._v("P*(s)：当前状态的最佳策略（算法产出）")])]),v._v(" "),_("p",[v._v("expectimax search可以解决这一问题，估算价值，选出最大价值，赋值")]),v._v(" "),_("p",[v._v("考虑一下其他的算法")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("V*(s) = maxQ*(s, a)")])]),v._v(" "),_("p",[v._v("虽然Q*(s, a)还不知道怎么算")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Q*(s, a) = avg(sum(R(s, a, s') + λV*(s'))")])]),v._v(" "),_("p",[v._v("这是一个递归的定义，因为你并不知道V*(s')直到搜索到终点")])])]),v._v(" "),_("p",[v._v("此之谓贝尔曼方程：Bellman Equations")]),v._v(" "),_("ul",[_("li",[v._v("take correct first action")]),v._v(" "),_("li",[v._v("kepp being optimal")])]),v._v(" "),_("p",[v._v("回顾一下Racing Search Tree")]),v._v(" "),_("p",[v._v("他是无限的，并且只有三种状态，如果用expectimax search，将会有指数级的重复工作（子树）")]),v._v(" "),_("h4",{attrs:{id:"value-iteration"}},[v._v("Value Iteration")]),v._v(" "),_("p",[v._v("价值迭代算法")]),v._v(" "),_("ul",[_("li",[v._v("from the bottom（deep enough）, recur the top")]),v._v(" "),_("li",[_("code",[v._v("V*(s) = maxΣT(s,a,s')[R(s,a,s') + λV*(s')]")])])]),v._v(" "),_("p",[v._v("利用贝尔曼方程确实可以搜索到底部并且递归回顶部，在这个递归过程中，各节点的值是不断更新的，且更加准确，直到保持稳定，即递归完毕")]),v._v(" "),_("ul",[_("li",[v._v("这个收敛的过程称作"),_("code",[v._v("bellman update")])])]),v._v(" "),_("p",[_("strong",[v._v("Computing Time-Limited Values")])]),v._v(" "),_("p",[v._v("对于一颗无限树，采用时间限制其递归深度，令V*(s)尽可能准确")]),v._v(" "),_("p",[v._v("因为条件有限，我们无法完整进行贝尔曼算法，即只能尽可能的接近V*(s)")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Vk(s) = avg(sum(R(s, a, s') + λVk(s')))")])])]),v._v(" "),_("p",[v._v("其中"),_("code",[v._v("Vk(s)、Vk(s')")]),v._v("都取其均值")]),v._v(" "),_("ul",[_("li",[v._v("take average")]),v._v(" "),_("li",[v._v("像一个单层的expectimax搜索，但不同的是，他会由于递归深度的增加不断调整Vk值")])]),v._v(" "),_("p",[_("strong",[v._v("Convergence")])]),v._v(" "),_("p",[v._v("VK compute")]),v._v(" "),_("p",[v._v("一个k层树和一个k+1层树")]),v._v(" "),_("p",[v._v("由于搜索深度增加，对于未来某节点的折扣也增加，也就是说越往后对总值的影响应是越小，细微调整")]),v._v(" "),_("p",[v._v("当discount>=1，没有趋同保证")]),v._v(" "),_("h4",{attrs:{id:"policy-evaluation"}},[v._v("Policy Evaluation")]),v._v(" "),_("p",[v._v("策略评估方法")]),v._v(" "),_("h5",{attrs:{id:"fixed-policies"}},[v._v("fixed Policies")]),v._v(" "),_("p",[v._v("固定的策略")]),v._v(" "),_("ul",[_("li",[v._v("do the optimal action")]),v._v(" "),_("li",[v._v("do what Pi says")]),v._v(" "),_("li",[v._v("easier than the optimal")])]),v._v(" "),_("p",[v._v("假设你的固定策略选出的后继节点是最佳的")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("VΠ(s) = ΣT(s,Π(s),s')[R(s,Π(s),s') + λVΠ(s')]")])])]),v._v(" "),_("p",[v._v("固定策略例如：一直向右走；一直向前走")]),v._v(" "),_("p",[v._v("列举所有策略，评估所有策略，选择得分最高的策略")]),v._v(" "),_("h5",{attrs:{id:"policy-evaluation-2"}},[v._v("policy evaluation")]),v._v(" "),_("p",[v._v("输入一个策略，执行策略，得到该策略的值向量")]),v._v(" "),_("p",[_("code",[v._v("VΠ = ΣT(s,Π(s),s')[R(s,Π(s),s') + λVΠ(s')]")])]),v._v(" "),_("h5",{attrs:{id:"policy-extraction"}},[v._v("Policy Extraction")]),v._v(" "),_("p",[v._v("即使当找到了相邻的最佳值，仍然要做一次expectimax去找到导致这个最佳值的行动")]),v._v(" "),_("ul",[_("li",[v._v("从值中找出行动，以更新策略")])]),v._v(" "),_("p",[v._v("价值驱动决策")]),v._v(" "),_("p",[v._v("Computing Actions from Q-Values")]),v._v(" "),_("h4",{attrs:{id:"policy-iteration"}},[v._v("Policy Iteration")]),v._v(" "),_("p",[v._v("价值迭代的问题")]),v._v(" "),_("ul",[_("li",[v._v("每次迭代将会耗费"),_("code",[v._v("O(s^2*A)")]),v._v("，这很慢")]),v._v(" "),_("li",[v._v("每个状态的最大值很少改变，这意味着做了很多低效工作")])]),v._v(" "),_("p",[v._v("正确策略下的无用选择 ——> 错误的策略试错")]),v._v(" "),_("p",[v._v("我们采用策略迭代")]),v._v(" "),_("ul",[_("li",[v._v("首先选择一些策略，并执行他们，估算状态价值")]),v._v(" "),_("li",[v._v("改善你的策略，再次考虑之前的行动，重复估值")]),v._v(" "),_("li",[v._v("直到策略收敛")])]),v._v(" "),_("p",[v._v("可以证明它是最佳且收敛的，并且在很多情况比价值迭代收敛得更快")]),v._v(" "),_("p",[v._v("VΠ是由当前策略得到的当前“最佳值”")]),v._v(" "),_("p",[_("code",[v._v("VΠ = ΣT(s,Π(s),s')[R(s,Π(s),s') + λVΠ(s')]")])]),v._v(" "),_("p",[v._v("根据这个当前最佳值，更新上一步的策略，比如我上一步策略原来是往北走，但这个最佳值得往东走，那么我更新上一步的策略为向东走")]),v._v(" "),_("ul",[_("li",[v._v("MDPs本质上便是找到每步的最佳策略，值迭代同时考虑策略和价值，在每步做出最佳选择；策略迭代通过值去找到更优的策略")]),v._v(" "),_("li",[v._v("二者都是迭代，从叶子回溯到顶部")])]),v._v(" "),_("p",[v._v("通常根据最后值的变化来确定是否已经收敛")]),v._v(" "),_("h3",{attrs:{id:"summary"}},[v._v("Summary")]),v._v(" "),_("ul",[_("li",[v._v("compute optimal values：both can")]),v._v(" "),_("li",[v._v("compute values for partivular policy：policy evaluation（策略评估）")]),v._v(" "),_("li",[v._v("turn your values into policy：use policy extraction（策略抽取）")])]),v._v(" "),_("p",[v._v("通常Policy Iteration是policy evaluation和policy improvement交替执行直到收敛")]),v._v(" "),_("p",[v._v("Value Iteration是寻找Optimal value function和执行一次policy extraction")]),v._v(" "),_("ul",[_("li",[v._v("均属于动态规划算法")])]),v._v(" "),_("p",[_("strong",[v._v("Double-Bandit MDP")])]),v._v(" "),_("p",[v._v("两台老虎机，一台（blue）拉一次给一块钱；另一台（red）拉一次给0元或2元。共拉一百次")]),v._v(" "),_("p",[v._v("更优的策略？")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("red one")]),v._v("获得2元的概率为0.75")])]),v._v(" "),_("p",[v._v("平均上")]),v._v(" "),_("ul",[_("li",[v._v("blue：100元")]),v._v(" "),_("li",[v._v("red：150元")])]),v._v(" "),_("p",[v._v("当获得2元的概率未知，尝试red one去获得信息")]),v._v(" "),_("p",[v._v("core of reinfocement Learning：exploraton")]),v._v(" "),_("p",[v._v("只能探索才能获取更多信息")]),v._v(" "),_("p",[v._v("pay for the infomation and get return")]),v._v(" "),_("p",[v._v("甚至不需要MDP算法，只需要不断探索和基本的数学直觉，试出概率")]),v._v(" "),_("h2",{attrs:{id:"rl"}},[v._v("RL")]),v._v(" "),_("blockquote",[_("p",[v._v("Reinforcement learning：强化学习")]),v._v(" "),_("p",[v._v("It's about how to learn behaviors")])]),v._v(" "),_("ul",[_("li",[v._v("Agent —actions—> Environment")]),v._v(" "),_("li",[v._v("Environment —state/reward—> Agent")])]),v._v(" "),_("p",[v._v("Agent和Environment都是动态变化的")]),v._v(" "),_("p",[v._v("Basic idea：")]),v._v(" "),_("ul",[_("li",[v._v("agent接收奖惩反馈")]),v._v(" "),_("li",[v._v("奖惩函数决定agent的效用")]),v._v(" "),_("li",[v._v("为了最大化奖励，必须去学习最优行动")]),v._v(" "),_("li",[v._v("所有的学习基于观察样例后的结果")])]),v._v(" "),_("p",[v._v("learning rather than plan")]),v._v(" "),_("p",[v._v("Examples：")]),v._v(" "),_("ul",[_("li",[v._v("Robot dog learning to Walk")]),v._v(" "),_("li",[v._v("Snake rebot sidewingding（爬墙）")])]),v._v(" "),_("p",[v._v("因为真实世界的规则并不是确定的，难以建模，这时让程序根据概率学习正确的行为显得更加高效")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Toddler Robot（幼儿机器人）")]),v._v(" "),_("p",[v._v("know how to stand after fall down")])])]),v._v(" "),_("p",[v._v("机器学习的最开始，他是不知道怎么做的，只是来回摆动，因为他不知道怎么获取奖励，于是开始瞎几把试，当偶然获取奖励后，他将根据奖惩制度完善自己的行动策略，从而行动得更加高效")]),v._v(" "),_("p",[v._v("Still assume a Markov decision process")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("a set of states")])]),v._v(" "),_("li",[_("p",[v._v("a set of actions")])]),v._v(" "),_("li",[_("p",[v._v("a model T(s,a,s')")]),v._v(" "),_("p",[v._v("原为 a successor function T(s,a,s')")])]),v._v(" "),_("li",[_("p",[v._v("a reward function R(s,a,s')")])])]),v._v(" "),_("p",[v._v("Still looking for a policy")]),v._v(" "),_("p",[v._v("The defference：We don't know T or R")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("不知道哪个状态是好的或哪个动作是好的")]),v._v(" "),_("p",[v._v("就像那个老虎机不知道掉落概率")])]),v._v(" "),_("li",[_("p",[v._v("必须真正去行动和访问状态去学习，去获取必要信息")])])]),v._v(" "),_("p",[v._v("Offline（MDPs） vs. Online（RL）")]),v._v(" "),_("ul",[_("li",[v._v("Offline Solution")]),v._v(" "),_("li",[v._v("Online Learning")])]),v._v(" "),_("h3",{attrs:{id:"model-based-learning"}},[v._v("Model-Based Learning")]),v._v(" "),_("p",[v._v("Basic idea：")]),v._v(" "),_("ul",[_("li",[v._v("learn an approximate model based on experiences")]),v._v(" "),_("li",[v._v("solve for values as if the learned model were correct")])]),v._v(" "),_("p",[v._v("现根据经验构建模型，再使用问题求解方法去计算当前模型")]),v._v(" "),_("p",[v._v("就像一个CSP问题我们不知道联系，得先建立相邻状态联系")]),v._v(" "),_("p",[v._v("step1：learn empirical MDP model")]),v._v(" "),_("ul",[_("li",[v._v("为每个状态和动作做产出（outcomes）统计")]),v._v(" "),_("li",[v._v("常态化评估函数T(s,a,s')")]),v._v(" "),_("li",[v._v("每当经历"),_("code",[v._v("s—a—>s'")]),v._v("时计算回报函数R(s,a,s')")])]),v._v(" "),_("p",[v._v("step2：solve the learned MDP（近似的MDP问题）")]),v._v(" "),_("ul",[_("li",[v._v("use value iteration")]),v._v(" "),_("li",[v._v("use policy iteration")]),v._v(" "),_("li",[v._v("......")])]),v._v(" "),_("p",[v._v("T和R是未知的，但状态空间和行为空间被分配了，要做的就是收集更多数据，动态改善你的模型，估计T和R函数")]),v._v(" "),_("p",[v._v("where the reward function come from")]),v._v(" "),_("ul",[_("li",[v._v("depend on the human designer")])]),v._v(" "),_("p",[v._v("how to calculate T function")]),v._v(" "),_("ul",[_("li",[v._v("in a simple example, may just looking at the frequencies（频率）")])]),v._v(" "),_("p",[v._v("计算概率权值：E（概率x值）")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Known P(A)：E(A) = ΣP(a)*a")])]),v._v(" "),_("li",[_("p",[v._v("Unknown P(A)")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Model Based：E(A) = avg(sum(P(a)*a))")]),v._v(" "),_("p",[v._v("以某种策略重新计算概率")])]),v._v(" "),_("li",[_("p",[v._v("Model free：E(A) = (1/N)*sum(a)")]),v._v(" "),_("p",[v._v("我们认为各种可能概率是相等的，因为尚未总结出规律")])]),v._v(" "),_("li",[_("p",[v._v("二者区别在于是否按概率加权计算均值")])])])])]),v._v(" "),_("h3",{attrs:{id:"model-free-learning"}},[v._v("Model-Free Learning")]),v._v(" "),_("h4",{attrs:{id:"value-learning"}},[v._v("Value Learning")]),v._v(" "),_("blockquote",[_("p",[v._v("Passive Reinforcement Learning")]),v._v(" "),_("p",[v._v("我们不担心如何在世界模型中行动，只是观察行动并视图估计此代理的状态值")])]),v._v(" "),_("p",[v._v("Simplified task：policy evaluation")]),v._v(" "),_("ul",[_("li",[v._v("input：a fixed policy（遵循某一策略）")]),v._v(" "),_("li",[v._v("don't know T(s,a,s')")]),v._v(" "),_("li",[v._v("don't know R(s,a,s')")]),v._v(" "),_("li",[v._v("goal：learn the state values")])]),v._v(" "),_("p",[v._v("Direct & Indirect Evaluation")]),v._v(" "),_("blockquote",[_("p",[v._v("直接估值和间接估值")])]),v._v(" "),_("p",[v._v("直接估值平均观察到的样本值，直接问这一步会有多少"),_("code",[v._v("reward")]),v._v("，仅仅依据实验出的结果的各状态值")]),v._v(" "),_("p",[v._v("如直接对于个节点的可能取值求均值作为其状态值，如对C节点使用四次策略")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("C向D -1，D退出+10")]),v._v(" "),_("p",[v._v("C向D -1，D退出+10")]),v._v(" "),_("p",[v._v("C向D -1，D退出+10")]),v._v(" "),_("p",[v._v("C向A -1，A退出-10")]),v._v(" "),_("p",[v._v("那么取均值则为"),_("code",[v._v("(9+9+9-11)/4=4")])])])]),v._v(" "),_("p",[v._v("不需要对T/R做任何事，求均值就行了，只关注值；这不能达到超精确，但随着数据增加总会愈加接近")]),v._v(" "),_("p",[v._v("要做的事很明确：")]),v._v(" "),_("ul",[_("li",[v._v("选择一个节点")]),v._v(" "),_("li",[v._v("多次使用策略进行扩展")]),v._v(" "),_("li",[v._v("对扩展结果进行分析取均")]),v._v(" "),_("li",[v._v("对该节点赋值得到"),_("code",[v._v("V(s)")])]),v._v(" "),_("li",[v._v("更新值和策略")])]),v._v(" "),_("p",[v._v("这一过程始终没用到T/R函数")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("VΠ(s) <-- (1/n)Σsample(i)")])])]),v._v(" "),_("p",[v._v("注意这里所有的"),_("code",[v._v("V(s')")]),v._v("都应乘上一个"),_("code",[v._v("λ(<=1)")]),v._v("作为时间惩罚（贬值）")]),v._v(" "),_("p",[v._v("Temporal difference learning：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("sample = R(s,Π(s), s') + λV(s')")])]),v._v(" "),_("li",[_("code",[v._v("VΠ(s) <-- (1-a)VΠ(s) + (a)sample")])])]),v._v(" "),_("p",[v._v("以上为更新已走过节点的方法")]),v._v(" "),_("p",[v._v("每次获得新的sample，都对刚走过的状态"),_("code",[v._v("s")]),v._v("进行更新，以接近精确值")]),v._v(" "),_("p",[v._v("在这一过程中，我们从未建立世界模型，即T/R函数，只是根据样例值不断更新状态值，随着时间的推移，将得到精确值")]),v._v(" "),_("p",[v._v("优化求均值的方法，让越接近的经历比以前的经历更重要，因为我们后来计算的结果总是更加准确")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("xn = (xn + (1-a)*xn-1 + (1-a)^2*xn-2+...) / 1+(1-a)+(1-a)^2+...")])]),v._v(" "),_("p",[v._v("xn为第n个样例")])]),v._v(" "),_("li",[_("p",[v._v("这里的a为学习率，应用于迭代方程中")])])]),v._v(" "),_("p",[v._v("由于我们从未构建模型，也没有T/R函数，根本无从进行策略迭代")]),v._v(" "),_("p",[v._v("为什么不学习"),_("code",[v._v("Q-Value")]),v._v("而是"),_("code",[v._v("V-Value")]),v._v("？")]),v._v(" "),_("p",[v._v("没有理由，他不仅同样能实现更新Value，而且可以用于策略更新，属于积极的学习")]),v._v(" "),_("h4",{attrs:{id:"q-learning"}},[v._v("Q-Learning")]),v._v(" "),_("blockquote",[_("p",[v._v("Active Reinforcement Learning")]),v._v(" "),_("p",[v._v("担心数据从何处收集，担心采取行动")])]),v._v(" "),_("p",[v._v("also")]),v._v(" "),_("ul",[_("li",[v._v("don't know the transitions T")]),v._v(" "),_("li",[v._v("don't know the reward R")]),v._v(" "),_("li",[v._v("choose the actions now（当前做的）")]),v._v(" "),_("li",[v._v("goal：learn the optimal policy/values")])]),v._v(" "),_("p",[v._v("不同于MDPs，这不是离线测试（毕竟不知道T/R，无法进行推测），而是真切地采取行动")]),v._v(" "),_("p",[v._v("iteration")]),v._v(" "),_("ul",[_("li",[v._v("从一个确定状态值开始")]),v._v(" "),_("li",[v._v("计算该状态值下一层每个状态的Q-Value和Value")]),v._v(" "),_("li",[v._v("通过下一层的Q-Value/Value更新该层的Q-Value/Value")]),v._v(" "),_("li",[v._v("迭代这一过程，更新所有Q-Value/Value")])]),v._v(" "),_("p",[v._v("Value Iteration")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Vk+1(s) <-- maxΣT(s,a,s')[R(s,a,s') + λVk(s')]")])])]),v._v(" "),_("p",[v._v("Q-Value Iteration")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Qk+1(s,a) <-- ΣT(s,a,s')[R(s,a,s') + λmaxQk(s',a')]")])])]),v._v(" "),_("p",[v._v("在这里使用的样例和更新策略")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("sample = R(s,a,s') + λmaxQk(s',a')")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Q(s,a) <-- (1-a)Q(s,a) + (a)sample")])]),v._v(" "),_("p",[v._v("这个常量a称为学习率")])])]),v._v(" "),_("p",[v._v("举例：crawler bot（爬虫机器人）")]),v._v(" "),_("p",[v._v("Q-Learning is called off-policy learning")]),v._v(" "),_("p",[v._v("Caveats（警告）")]),v._v(" "),_("ul",[_("li",[v._v("have to explore enough")]),v._v(" "),_("li",[v._v("have to eventually make the learning rate small enough（收敛）")]),v._v(" "),_("li",[v._v("...but not decrease it too quickly")]),v._v(" "),_("li",[v._v("it doesn't matter how you select actions")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("Problem")]),v._v(" "),_("th",[v._v("Goal")]),v._v(" "),_("th",[v._v("Technique")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("Known MDP")]),v._v(" "),_("td",[v._v("Compute"),_("code",[v._v("V*,Q*,Π*")]),v._v("; Evaluate a fixed policy")]),v._v(" "),_("td",[v._v("Value/Policy iteration; Policy evaluation")])]),v._v(" "),_("tr",[_("td",[v._v("Unknown MDP: Model-Based")]),v._v(" "),_("td",[v._v("Compute"),_("code",[v._v("V*,Q*,Π*")]),v._v("; Evaluate a fixed policy")]),v._v(" "),_("td",[v._v("VI/PI on approximate MDP; PE on approximate MDP")])]),v._v(" "),_("tr",[_("td",[v._v("Unknown MDP: Model-Free")]),v._v(" "),_("td",[v._v("Compute"),_("code",[v._v("V*,Q*,Π*")]),v._v("; Evaluate a fixed policy")]),v._v(" "),_("td",[v._v("Q-learning; Value learning")])])])]),v._v(" "),_("p",[v._v("均使用贝尔曼方程进行递归计算")]),v._v(" "),_("p",[v._v("Exploration（探索）vs. exploitation（开发）")]),v._v(" "),_("p",[_("strong",[v._v("Epsilon Greedy")])]),v._v(" "),_("p",[v._v("Exploration function")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("探索未知节点，收集更多经验：random actions（ε epsilon-greedy）")]),v._v(" "),_("p",[v._v("当ε越大，随机度越高，当为0，策略确定")])]),v._v(" "),_("li",[_("p",[v._v("探索方程将根据一个节点的“经验”，如访问过多少次，来给予相应的奖励（访问越多，奖励越低）")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("f(u,n) = u + k/n")]),v._v("（基数+奖励/访问次数）")])]),v._v(" "),_("li",[_("p",[v._v("这样能有效腐烂一些无用的节点（越多访问奖励越少）")])])]),v._v(" "),_("p",[v._v("Q-Update：加入探索方程")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Regular Q-Update:")]),v._v(" "),_("p",[_("code",[v._v("Q(s,a) <-- ΣT(s,a,s')[R(s,a,s') + λmaxQ(s',a')]")])])]),v._v(" "),_("li",[_("p",[v._v("Modified Q-Update:")]),v._v(" "),_("p",[_("code",[v._v("Q(s,a) <-- ΣT(s,a,s')[R(s,a,s') + λmaxf(Q(s',a'),N(s',a'))]")])])])]),v._v(" "),_("p",[v._v("Regret")]),v._v(" "),_("h4",{attrs:{id:"approximate-q-learning"}},[v._v("Approximate Q-Learning")]),v._v(" "),_("p",[v._v("在实际问题中，状态数、动作会很多很多，很难在Q-Table中去储存每一个Q-Value，这个时候只能做估计")]),v._v(" "),_("p",[v._v("w为权重，f为特征值（features）")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("V(s) = w1*f1(s)+w2*f2(s)+...+wn*fn(s)")])]),v._v(" "),_("li",[_("code",[v._v("Q(s,a) = w1*f1(s,a)+w2*f2(s,a)+...+wn*fn(s,a)")])])]),v._v(" "),_("p",[v._v("你的Q值将是很多经验的加权和，如f1为跳楼的特征值，f2为纵火的特征值，Q将这些情况的经验汇总以某些权重组合")]),v._v(" "),_("p",[v._v("当特征值"),_("code",[v._v(">1")]),v._v("说明他鼓励这种差异，反之对差异持消极态度")]),v._v(" "),_("p",[v._v("a仍是学习率")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("Q(s,a) <-- Q(s,a) + a[diff]")])]),v._v(" "),_("p",[v._v("准确的Q值")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("wi <-- wi + a[diff]f(s,a)")])]),v._v(" "),_("p",[v._v("近似的Q值")])])]),v._v(" "),_("p",[v._v("当权重降低，其对应的多项式变低，Q得到调整，那么更新权重成为现在的问题")]),v._v(" "),_("p",[v._v("这么做的目的无非是想用相对少的数据得到一个相对好的Q函数")]),v._v(" "),_("p",[_("strong",[v._v("Optimization")])]),v._v(" "),_("p",[v._v("最小二乘法处理特征值"),_("code",[v._v("features")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("Q(s,a) = w1*f1(s,a)+w2*f2(s,a)+...+wn*fn(s,a)")])]),v._v(" "),_("li",[_("code",[v._v("Q(s,a)=w0 + w1f1(s,a)")])])]),v._v(" "),_("p",[v._v("Minimizing Error")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("error(w) = (1/2)*(y-Σwk*fk(x))½")])])]),v._v(" "),_("p",[v._v("对该函数对w求导得")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-(y-Σwk*fk(x))fm(x)")])])]),v._v(" "),_("p",[v._v("Why limiting capacity can help?")]),v._v(" "),_("p",[v._v("功能越多并不一定越好，这意味着更高阶的多项式，在函数曲线上更加符合")]),v._v(" "),_("p",[v._v("这有可能造成过度拟合（overfitting），即为了满足一些离谱的数据，做出疯狂的拟合")]),v._v(" "),_("h4",{attrs:{id:"policy-search"}},[v._v("Policy Search")]),v._v(" "),_("p",[v._v("尝试不同的策略，看哪一个更好")]),v._v(" "),_("p",[_("code",[v._v("Q-Learning")]),v._v("：Q值接近，无法确定这是最好的行动")]),v._v(" "),_("p",[v._v("让我们关注行动")]),v._v(" "),_("p",[v._v("我们有一些Qvalue，向上向下调整特征值权重，看看有什么变化，好则接收，坏则丢弃，然后继续调整，就像CSP的本地搜索")]),v._v(" "),_("blockquote",[_("p",[v._v("直升飞机倒挂着飞会省四倍阻力")]),v._v(" "),_("p",[v._v("ai vs. ai and train each other")])])])}),[],!1,null,null,null);_.default=l.exports}}]);