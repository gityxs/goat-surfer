/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Join the Discord!": "加入 Discord!",
    "(Tick:": "(Tick:",
    "Energy": "精力",
    "Main": "首页",
    "MAIN": "主线",
    "Load": "加载",
    "Jobs": "工作",
    "Locations": "位置",
    "Next": "下一个",
    "Money": "金钱",
    "Mediterranean": "地中海",
    "Marina di Pietrasanta": "皮特拉桑塔码头",
    "Skills": "技能",
    "Story": "故事",
    "Surf": "冲浪",
    "Surf Level": "冲浪等级",
    "Surf Skill": "冲浪技能",
    "v": "v",
    "Upgrades": "升级",
    "Work": "工作",
    "Requirements:": "要求:",
    "In location:": "当前位置:",
    "Real:": "实际:",
    "Game:": "游戏:",
    "Game Speed:": "游戏速度:",
    "Time:": "时间:",
    "Rewards:": "奖励:",
    "Whitewater Riding": "激流骑行",
    "The Surf Lesson": "冲浪课程",
    "Rest": "休息",
    "Quests": "任务",
    "It's the summer of his 20th birthday. Enzo, a lanky, aimless kid from a small town in Italy, spends his days lounging around, helping his mom at the local café, and dreaming of something more—though he doesn't quite know what. University didn't feel right, and he has no clear career in mind. The Italian coastline has always been home, but he's never considered its waves as a call to adventure.": "这是他20岁生日的夏天。恩佐，一个来自意大利小镇的瘦长、漫无目的的孩子，每天都在闲逛，在当地的咖啡馆帮妈妈做事，梦想着更多的东西——尽管他不太清楚是什么。大学感觉不合适，他也没有明确的职业规划。意大利的海岸线一直是他的家，但他从不认为那里的海浪会召唤他去冒险。",
    "Next Goal 🎯": "下一个目标 🎯",
    "Income": "收入",
    "Fitness": "健身",
    "FIT": "健身",
    "PAD": "划水",
    "Paddling": "划水",
    "POP": "弹跳",
    "Popup": "弹跳",
    "Debug Tools": "调试工具",
    "All skills": "全部技能",
    "Purchase First Surf Lesson": "购买第一节冲浪课",
    "Resting (Energy Full)": "休息（精力充沛）",
    "Enzo's 20th birthday gift is a surf lesson at Marina di Pietrasanta. His instructor Marco teaches him the basics—popping up, riding whitewater, and dealing with wipeouts.": "恩佐的20岁生日礼物是在 皮特拉桑塔码头 上冲浪课。他的教练马可教他一些基本的技巧——跳起来，骑在激流中，以及如何应对落水。",
    "🏄‍♂️ Main": "🏄‍♂️ 首页",
    "✅ Quest": "✅ 任务",
    "Close": "关闭",
    "the gift": "礼物",
    "Then came": "然后是",
    "On his birthday, Enzo's parents hand him an envelope. Inside is a weekend surf lesson on the Mediterranean coast. They have no idea what they're setting in motion with that simple gesture. Enzo had never even considered surfing; the idea seemed as distant as California's golden beaches.": "生日那天，恩佐的父母递给他一个信封。里面是地中海沿岸的周末冲浪课。他们完全不知道这个简单的动作会引发什么。恩佐从未考虑过冲浪；这个想法就像加利福尼亚的金色海滩一样遥远。",
    "Crowd Skill:": "人群技能:",
    "Crowd:": "人群:",
    "Current": "当前",
    "Fast": "快",
    "Crumbling": "摇摇欲坠",
    "Green Wave": "绿色海浪",
    "Intermediates": "媒介",
    "Points:": "点数:",
    "No ride": "未骑行",
    "Session": "会话",
    "Slow": "慢",
    "Skill Points": "技能点",
    "Small Crowd": "小人群",
    "Stop Surfing": "停止冲浪",
    "Surf Spot": "冲浪胜地",
    "Wave": "海浪",
    "Waist High": "腰高",
    "Wave Height:": "浪高:",
    "Wave Type:": "海浪类型:",
    "Waves:": "海浪:",
    "White Water": "白色海浪",
    "Wipeout": "被浪打翻",
    "You couldn't catch it": "你没能抓住它",
    "Wave Speed": "海浪速度",
    "Wave Time - defines how many maneuvers you can perform on a wave": "波浪时间 - 定义了你可以在一个波上执行多少动作",
    "Waiting Time - defines how many waves you can have in surf session": "等待时间 - 定义了你在冲浪会话中可以遇到多少波浪",
    "Last": "最近",
    "Easy": "简单",
    "🌊 Surf": "🌊 冲浪",
    "Beginners": "初学者",
    "Catch Probability": "捕获概率",
    "Knee High": "膝盖高度",
    "Damage": "伤害",
    "Hazards:": "危险性:",
    "Small": "小",
    "Uncrowded": "宽敞",
    "Quests 🎯": "任务 🎯",
    "Show": "显示",
    "Hide": "隐藏",
    "SIDE": "支线",
    "Wave Reading": "海浪解读",
    "Completed Quests": "已完成任务",
    "Embrace the gentle Mediterranean breeze and learn to read its subtle cues for better wave riding.": "拥抱温和的地中海微风，学会阅读它的微妙线索，以更好地驾驭海浪。",
    "Blessing of the Mediterranean Breeze": "地中海微风的祝福",
    "Active Quests": "可用任务",
    "(current)": "(当前)",
    "🌊 Later locations offer better conditions but also more challenging waves - you'll need to improve your skills to master them.": "🌊 较晚的地点提供更好的条件，但也更具挑战性的海浪-你需要提高你的技能，以掌握它们。",
    "🌍 Each location has unique characteristics shown in the charts: wave heights, types, maximum ride times, and crowd levels.": "🌍 每个地点都有独特的特征，在图表中显示：波浪高度，类型，最长乘坐时间和人群等级。",
    "🌍 Locations": "🌍 位置",
    "💰 Each surf spot provides specific skill bonuses. Travel costs money, especially between locations, so plan your trips carefully!": "💰 每个冲浪点提供特定的技能奖励。旅行是要花钱的，尤其是在不同地点之间，所以要仔细计划你的旅行！",
    "Big Crowd": "大人群",
    "Big Wave": "大浪",
    "Crowd": "人群",
    "Less Than 1": "少于1",
    "Max Ride Time (seconds)": "最大骑行时间（秒）",
    "More Than Forty": "多于40",
    "Overhead": "开销",
    "Packed": "拥挤",
    "Punchy": "强力",
    "Six To Ten": "6到10",
    "Slab": "平缓",
    "Travel To": "旅行到",
    "Wave Height": "波浪高度",
    "Wave Type": "波浪类型",
    "🗃️ Inventory": "🗃️ 库存",
    "🛍️ Shop": "🛍️ 商店",
    "🛍️ Upgrades": "🛍️ 升级",
    "Apps": "应用",
    "A classic board with unique characteristics.": "独具特色的经典冲浪板。",
    "Coaching": "指导",
    "First Surf Lesson": "第一节冲浪课",
    "Gear": "装备",
    "Gym": "健身房",
    "Old 70's Mal": "70年代的老马",
    "Quest": "任务",
    "Surfboards": "冲浪板",
    "What got you started.": "你是怎么开始的。",
    "Back at his parents' house, Enzo can't think about anything else. Surfing has unlocked a restlessness he's never felt before. But he has no money for a board, no steady job, and certainly no experience. Determined not to let this taste of surfing be his last, Enzo starts working to save up for his first surfboard.": "回到父母家，恩佐什么都不能想。冲浪释放了他从未有过的不安。但是，他没有钱买一个冲浪板，没有稳定的工作，当然也没有经验。恩佐决定不让这次冲浪成为他的最后一次体验，开始为他的第一块冲浪板存钱。",
    "inside. The waves—small and gentle by global standards—roll under him like an invitation. He wipes out more than he stands up, but the stoke is undeniable. By the end of the weekend, he's hooked.": "在里面。海浪——以全球标准来看是小而温和的——在他身下翻滚，就像在发出邀请。他被淘汰的次数比他站起来的次数要多，但他的失败是不可否认的。到周末结束时，他就迷上了。",
    "Enzo falls hard, but the thrill of riding his first small wave leaves him eager for more. Marco sees Enzo's stoke from surfing and decides to give him an old beaten surfobard from 70's to keep.": "恩佐摔得很重，但第一次冲浪的快感让他渴望更多。马可看到恩佐在冲浪时的表现，决定给他一个70年代的老旧的冲浪板。",
    "Enzo soon finds work as a dishwasher at a nearby café, scrubbing plates and saving money. On weekends, he rents a board and heads out to the local breaks, pushing through wipeouts to practice his popup and whitewater riding.": "恩佐很快在附近的一家咖啡馆找到了一份洗碗工的工作，一边刷盘子，一边省钱。周末的时候，他会租一辆冲浪板，去当地的休息区，努力练习弹跳和激流骑行。",
    "Enzo wants his own board but lacks the money. He starts working at a local café as a Dishwasher, slowly saving for his first surfboard. Marco continues to support him as he practices in his free time, slowly improving his paddling and balance.": "恩佐想拥有自己的董事会，但缺钱。他开始在当地一家咖啡馆做洗碗工，慢慢攒钱买他的第一块冲浪板。当他在空闲时间练习时，马可继续支持他，慢慢地提高他的划水和平衡。",
    "Skills 🏆": "技能 🏆",
    "Skill": "技能",
    "skill": "技能",
    "Level": "等级",
    "energy": "精力",
    "Current Job": "当前工作",
    "clicks": "点击",
    "Locked": "未解锁",
    "Damage Total": "总计伤害",
    "Unknown Job": "未知工作",
    "💵 Jobs": "💵 工作",
    "🏆 Skills": "🏆 技能",
    "🏄‍♂️ Surf Level": "🏄‍♂️ 冲浪等级",
    "🌍 Global Stats": "🌍 全局统计",
    "⚡ Skill Multipliers": "⚡ 技能乘数",
    "📊 Statistics": "📊 统计",
    "📍 Local Stats": "📍 本地统计",
    "Start Working": "开始工作",
    "Capo Mannu": "卡波·曼诺",
    "Complete Quest": "完成任务",
    "Crit Multiplier": "暴击乘数",
    "Crit Probability": "暴击概率",
    "Critical Moves Total": "关键动作总数",
    "Currency Multipliers": "货币乘数",
    "Dishwasher": "洗碗工",
    "Entry-level jobs available in all locations.": "所有地点都提供入门级工作。",
    "First Steps to Independence": "迈向独立的第一步",
    "Game Days Total": "累计游戏天数",
    "Injuries Total": "受伤总数",
    "Local Labor": "本地劳工",
    "Purchase Bike": "购买自行车",
    "Respect Total": "天赋总数",
    "Riding Wave Seconds Total": "骑浪总秒数",
    "Something magical happens that weekend. As soon as his feet touch the sand and he feels the weight of the board under him, something": "那个周末，神奇的事情发生了。当他的脚一接触到沙子，他就感觉到脚下冲浪板的重量",
    "Surf Session Minutes Total": "冲浪会话分钟总计",
    "Surf Sessions Total": "冲浪会话总计",
    "The First Taste of Saltwater": "第一次尝到咸水",
    "Total Skill Points": "技能点总计",
    "Unemployed": "失业",
    "Waiting For Wave Minutes Total": "等待波浪分钟总数",
    "Waves Total": "总波浪数",
    "Whitewater Warrior": "激流勇士",
    "Wipeouts Total": "出局总数",
    "Work 10 hours as Dishwasher": "做10小时的洗碗工",
    "You're just starting out. The surfboard feels more like a slippery diving board than a wave-riding vehicle.": "你才刚刚开始。冲浪板感觉更像是滑溜溜的跳水板，而不是冲浪工具。",
    "You've mastered the art of catching broken waves and can occasionally stand up in the whitewater.": "你已经掌握了捕捉破碎波浪的艺术，偶尔也能在激流中站起来。",
    "base": "基础",
    "Can barely paddle out past the whitewater": "能勉强划过激流吗",
    "Can get up on small waves, but slow": "可以掀起小浪，但速度慢吗",
    "Can stand up in whitewater but unsteady": "能在激流中站立却不稳",
    "Constant wipeouts": "连续淘汰",
    "Green Wave Beginner": "绿波新手",
    "Higher levels increase Energy recovery rate and Max Energy. During surfing, increases wave catch probability and decreases wave waiting time.": "等级越高，精力恢复速度和最大精力增加。冲浪时，增加抓浪概率，减少等待浪的时间。",
    "How fast and consistently can you pop up. Higher levels increase wave catch probability": "你能以多快的速度持续出现？更高的水位增加捕获波的概率",
    "How fast you can get out to the lineup and paddle in to waves. Higher levels increase wave catch probability and decrease wave waiting time.": "你能以多快的速度排好队，划进浪里。较高的水位增加了波浪捕获概率，减少了波浪等待时间。",
    "Manage 1-2 waves before exhaustion": "在精疲力竭前完成1-2波",
    "Mastery of small, broken waves.": "精通小的、破碎的波浪。",
    "Out of breath after paddling out": "划水后上气不接下气",
    "Paddling improves, but still struggle in currents": "划水技术提高了，但仍在水流中挣扎",
    "Struggling to get up": "挣扎着站起来",
    "To unlock new skills, complete main quests of the story": "要解锁新技能，完成故事的主要任务",
    "white": "白色",
    "You're starting to venture into unbroken waves, though they still win most of the battles.": "你开始冒险进入不间断的海浪，尽管他们仍然赢得了大部分的战斗。",
    "Basic entry-level job available in any location.": "基本的入门级工作，可在任何地点。",
    "Hours worked:": "已工作时间:",
    "Select Jo": "选择工作",
    "Stop Working": "停止工作",
    "You need a job first": "首先你需要一份工作",
    "A faster way to get around.": "一种更快的出行方式。",
    "Bike": "自行车",
    "Bottom Turn Front": "下转弯前",
    "Foamie": "泡沫冲浪板",
    "Great for beginners and whitewater riding.": "非常适合初学者和激流骑行。",
    "Top Turn Front": "上转弯前",
    "🔥 CRITICAL 🔥": "🔥 暴击 🔥",
    "Food Delivery": "送餐",
    "Select Job": "选择工作",
    "Work 20 hours as Food Delivery": "做20小时的送餐员",
    "Slightly higher pay with small energy cost. Requires a bike (small investment).": "略高的工资和小的精力成本。需要一辆自行车（小投资）。",
    ". Both can be improved by finishing story quests.": "．两者都可以通过完成故事任务而得到提升。",
    "⚡ Energy allows 1 hour of surfing per 20 points. You can replenish it by resting. Min. energy to start a session:": "⚡ 每20点精力可以让你冲浪1小时。你可以通过休息来补充它。启动会话所需的最小精力：",
    "⚡️ Work requires energy so you need to make hard decisions (as in real life) if you want to spend time working or surfing.": "⚡️ 工作需要精力，所以如果你想花时间工作或冲浪，你需要做出艰难的决定（就像在现实生活中一样）。",
    "🌊 Surf conditions like wave type, height, speed and crowd levels are based on your current location. Your catch probability depends on these conditions and is improved by skills like Fitness, Paddling, Wave Reading and Forecasting & Observing.": "🌊 冲浪条件，如波浪类型，高度，速度和人群等级是基于您当前的位置。你的捕获概率取决于这些条件，并提高技能，如健身，划水，海浪阅读和预测和观察。",
    "and multiplier is": "和乘数是",
    "Resting (+20 Energy/day)": "休息（+20 精力/天）",
    "This is where you go surfing! Each session costs money (reflecting living, food, and travel expenses in your current location) and requires energy.": "这是你冲浪的地方！每次会话都要花钱（反映你当前位置的生活、食物和旅行费用），并需要精力。",
    "💵 Here is the place to earn money. You can start and stop your current work. First you need to select a job.": "💵 这里是赚钱的地方。你可以开始和停止当前的工作。首先，你需要选择一份工作。",
    "💵 Cost for current location": "💵 当前位置的成本",
    "💪 Increase your Fitness level to unlock higher energy limits!": "💪提升体能等级，解锁更高的精力上限！",
    "🏄‍♂️ As you progress through the game and travel to new locations, more lucrative career paths await you so you can spend less time working and more surfing": "🏄‍♂️ 当你在游戏中取得进展并前往新的地点时，更多有利可图的职业道路等待着你，这样你就可以花更少的时间工作，更多的时间冲浪",
    "🏆 Each surfing session earns skill points which improve your skill levels. Critical maneuvers earn extra points and 👏 Respect. Critical probability is": "🏆每次冲浪都会获得技能点，提高你的技能等级。暴击操作可以获得额外的点数和👏天赋。暴击几率为",
    "🏆 Better paid jobs usually require certain amount of hours worked in previous jobs and eventually some other requirements.": "🏆 薪水更高的工作通常需要在以前的工作中工作一定的时间，最终还有一些其他要求。",
    "Street Vendor Helper": "街头小贩助手",
    "Work 35 hours as Street Vendor Helper": "做35个小时的街头小贩助手",
    "Assist local vendors selling goods. Available in tourist-heavy spots.": "协助当地小贩销售商品。在游客较多的地方可以找到。",
    "Green Wave Riding": "绿色波浪骑行",
    "Lessons from the Locals": "当地人的经验教训",
    "Varazze": "瓦拉泽",
    "As Enzo spends more time at the beach, he starts working part-time as a Street Vendor Helper. Locals like him for his willingness to help, but they're not impressed by his surfing yet. He earns respect by helping tourists and learning about the ocean from older local surfers who tell him how to read waves and to travel to Varazze where he can finally learn to surf green waves.": "随着恩佐在海滩上的时间越来越长，他开始兼职做街头小贩。当地人喜欢他乐于助人，但他们还不喜欢他的冲浪。他帮助游客，从年长的当地冲浪者那里了解海洋，他们告诉他如何读懂海浪，并前往瓦拉泽，在那里他终于可以学会在绿色的海浪上冲浪，从而赢得了天赋。",
    "As Enzo grows more confident, he begins spending more time at the beach, hoping to earn respect among the locals and learn from the more seasoned surfers. One day, he strikes up a conversation with a group of surfers at the rental shack, who invite him to help out in exchange for lessons on wave reading and paddling techniques. Enzo tries spending every spare moment in the water.": "随着恩佐越来越自信，他开始花更多的时间在海滩上，希望赢得当地人的尊重，并向更有经验的冲浪者学习。一天，他在出租的小屋里和一群冲浪者聊了起来，他们邀请他帮忙，交换条件是教他读浪和划桨技巧。恩佐试着把所有空闲时间都花在水里。",
    "Shoulder High": "肩膀高度",
    "The Mediterranean Farewell": "地中海告别",
    "Enzo's arrival in Hossegor is a humbling experience. The waves are faster and more powerful than anything he's faced. He meets Thierry, a local surf guide who offers advice, but Jacques, a competitive surfer, mocks him. Enzo struggles but rides his first powerful waves at Hossegor, gaining confidence despite Jacques' antagonism.": "恩佐来到霍塞格尔是一次令人羞愧的经历。海浪比他遇到的任何海浪都更快更强大。他遇到了当地冲浪向导蒂埃里（Thierry），蒂埃里为他提供建议，但好强的冲浪运动员雅克（Jacques）嘲笑他。恩佐挣扎着，但他在霍塞格尔第一次掀起了巨浪，尽管雅克的反对，他还是获得了信心。",
    "The Challenge of Hossegor": "霍塞戈的挑战",
    "Biarritz": "比亚里茨",
    "Bottom Turn (Frontside)": "下转弯（前侧）",
    "BTF": "BTF",
    "Cancel": "取消",
    "France": "法国",
    "Hossegor": "霍塞戈",
    "in france": "在法国",
    "The cost to travel is:": "旅行费用是：",
    "Travel": "旅行",
    "Travel to": "前往",
    "You decided to travel to the new surf spot": "你决定去新的冲浪地点旅行",
    "🏄‍♂️ Reached new surf level": "🏄‍♂️ 达到新的冲浪等级",
    "🏆 Reached new skill level": "🏆 达到新的技能等级",
    "Advanced": "高级",
    "Embrace the power of the Atlantic swell and learn to harness its energy for better paddling and speed.": "拥抱大西洋海浪的力量，学习利用它的精力来更好地划桨和速度。",
    "level increased to": "等级提升至",
    "Overall skill level increased to": "整体技能等级提升至",
    "Speed Generation": "速度生成",
    "Spirit of the Atlantic Swell": "大西洋波涛之魂",
    "Marco encourages Enzo to head to France if he wants to improve his surfing. With more consistent and bigger waves, France offers more opportunities for growth. Enzo spends a few more weeks working at a café, saving just enough to make the journey. He leaves the Mediterranean behind, excited but nervous for what's ahead.": "如果恩佐想提高冲浪技术，马可鼓励他去法国。法国的浪潮更持久、更大，提供了更多的增长机会。恩佐又花了几周时间在咖啡馆打工，攒够了旅途所需的钱。他离开了地中海，对即将到来的一切既兴奋又紧张。",
    "Determined to shake off the mocking, Enzo returns to the water daily, though he wipes out as often as he rides. One afternoon, exhausted and low on funds, Enzo reaches Biarritz, a lively surf town buzzing with tourists. Here, he's hit by the financial reality of his new lifestyle.": "为了摆脱嘲笑，恩佐每天都回到水里，尽管他骑马的时候也会擦干净。一天下午，恩佐筋疲力尽，手头拮据，来到比亚里茨，一个充满活力的冲浪小镇，游客络绎不绝。在这里，他受到了新生活方式的财务现实的打击。",
    "Enzo runs out of money in Biarritz, a tourist-heavy surf town. He meets Sophie, a friendly local who offers him a job as a Tour Guide Helper. Sophie helps him understand the tides and conditions, and Enzo slowly learns to predict perfect surf days. There's no villain here—just the harsh reality of needing money to survive.": "恩佐在比亚里茨（Biarritz）用光了钱，比亚里茨是一个游客众多的冲浪小镇。他遇到了苏菲，一个友好的当地人，她给了他一份导游助手的工作。苏菲帮助他了解潮汐和条件，恩佐慢慢学会预测完美的冲浪日。这里没有坏人，只有需要钱才能生存的残酷现实。",
    "Broke in Biarritz": "闯入比亚里茨",
    "Closeouts": "清算",
    "days out": "剩余天数",
    "Forecasting and Observing": "预测与观察",
    "Forecasting And Observing": "预测与观察",
    "Head High": "头高",
    "Hollow": "空心",
    "Injury": "受伤",
    "La Gravière": "La Gravière",
    "Purchase First Aid Training": "购买首个急救培训",
    "Surfboard Rental Assistant": "冲浪板租赁助理",
    "Work 40 hours as Surfboard Rental Assistant": "做40个小时的冲浪板租赁助理",
    "Work at surfboard rental shacks. Offers perks like free boards (energy-saving).": "在冲浪板租赁处工作。提供免费食宿（节能）等福利。",
    "Working with Sophie allows Enzo to keep surfing while learning about the conditions he needs for success. But just as he starts feeling at home in the waves, Jacques reappears. Though he'd rather avoid Jacques' attitude, Enzo can't help taking the bait when Jacques questions his skills, boasting that Enzo wouldn't last a minute at one of the busier breaks. Enzo, irked, accepts the challenge.": "和索菲一起工作可以让恩佐一边冲浪一边了解成功所需的条件。但就在他开始在海浪中感到自在时，雅克又出现了。虽然他宁愿避免雅克的态度，但当雅克质疑他的技能时，恩佐还是忍不住上当了，他吹嘘说，在繁忙的休息时间，恩佐连一分钟都坚持不了。恩佐被激怒了，他接受了挑战。",
    "Jacques continues to taunt Enzo, claiming he'll never be able to handle the heavy barrels at La Gravière. Determined to prove Jacques wrong, Enzo trains with Thierry and Sophie to build his fitness and paddling power. The surf-off at La Gravière is grueling, but Enzo finally earns Jacques' reluctant respect after beating him in the challenge.": "雅克继续嘲笑恩佐，声称他永远无法在La Gravière处理这些沉重的桶。为了证明雅克是错的，恩佐与蒂埃里和索菲一起训练，以增强他的体能和划水能力。在La Gravière的冲浪是艰苦的，但恩佐最终赢得了雅克不情愿的尊重，在挑战中击败了他。",
    "A versatile board for various conditions.": "适用于各种条件的多功能板。",
    "Access to wave reading tutorials.": "获得波浪阅读教程。",
    "Bottom Turn (Backside)": "下转弯（背面）",
    "Bottom Turn Back": "底部转回",
    "First Aid Training": "急救训练",
    "Learn how to save a life.": "学习如何拯救生命。",
    "Mini-Mal": "小恶魔",
    "One And Half Overhead": "一个半开销",
    "Prepaid Phone with Internet": "预付费上网电话",
    "Resting (+25 Energy/day)": "休息（+25精力/天）",
    "Rivalry at La Gravière": "La graviires的竞争",
    "After proving himself in France, Enzo is ready to move on. Sophie, now a close friend, encourages him to head to Portugal. With bigger waves and cheaper living costs, it's the perfect place for Enzo to continue improving. Jacques, now grudgingly respectful, gives Enzo some parting advice: \"Portugal's waves are a different beast—be careful.\"": "在法国证明了自己之后，恩佐准备继续前进。苏菲现在是他的好朋友，她鼓励他去葡萄牙。海浪更大，生活成本更低，是恩佐继续进步的理想之地。雅克，现在勉强恭敬地给了恩佐一些临别建议：“葡萄牙的海浪是另一种野兽——小心点。”",
    "Thank you for playing the demo of the GOAT Surfer! The game is in development, and more content is coming soon. Join the Discord to brag about your surf skill progress and to be first to know about the next updates:": "感谢您玩《史上最佳冲浪手》演示版本！这款游戏还在开发中，更多内容很快就会出来。加入Discord来吹嘘你的冲浪技术进步，并第一个知道下一个更新：",
    "Barista/Waiter at Beach Cafe": "海滩咖啡馆的咖啡师/服务员",
    "Beach Lifeguard Assistant": "海滩救生员助理",
    "Help lifeguards and manage beach safety.": "协助救生员及管理海滩安全。",
    "Peniche": "盘尼希",
    "Portugal": "葡萄牙",
    "Reach Wave Reading level 2": "达到波浪阅读 2 级",
    "The Journey Continues": "旅程还在继续",
    "With gratitude for his time in France, Enzo sets out for Portugal, looking forward to new challenges, friendships, and his next steps in surfing.": "带着对在法国度过的时光的感激，恩佐启程前往葡萄牙，期待着新的挑战、友谊和冲浪的下一步。",
    "Work 50 hours as Beach Lifeguard Assistant": "作为海滩救生员助理工作50小时",
    "Work 60 hours as Barista/Waiter at Beach Cafe": "在海滩咖啡馆当60小时的咖啡师/服务员",
    "Work at a popular beach cafe. Tips add to the base income.": "在一家受欢迎的海滩咖啡馆工作。小费会增加基本收入。",
    "All quests completed! Join our Discord to be first to know about the next updates.": "所有任务完成！加入我们的Discord，以便第一时间了解下次更新。",
    "Enzo has finally saved enough for his own surfboard. The Mediterranean was just the beginning; now, he's ready for something bigger. With his beat-up board strapped to a rented car, he sets out for France, where the waves are rumored to be faster and the surf culture more intense.": "恩佐终于攒够钱买了自己的冲浪板。地中海仅仅是个开始；现在，他准备迎接更大的挑战。他把破旧的冲浪板绑在租来的车上，出发去法国，据说那里的海浪更快，冲浪文化也更激烈。",
    "Page": "页数",
    "So, with a beat-up board and a dream, Enzo says goodbye to the familiar shores of the Mediterranean, setting out to chase bigger waves and greater adventures in France.": "于是，带着破旧的冲浪板和梦想，恩佐告别了熟悉的地中海海岸，开始在法国追逐更大的海浪和更大的冒险。",
    "": "",
    "With each new wave he catches, Enzo's skills improve, and he feels a sense of belonging in the surf community. Yet, he yearns for bigger challenges. A few weeks later, Marco, his surf instructor, pulls him aside and encourages him to pursue his newfound passion on a larger scale.": "随着每一次新海浪的到来，恩佐的技术都在提高，他在冲浪社区中有了归属感。然而，他渴望更大的挑战。几周后，他的冲浪教练马可把他拉到一边，鼓励他在更大的范围内追求他新发现的激情。",
    "Skill Multipliers": "技能乘数",
    "Line Rider": "线路骑手",
    "You can catch green waves and ride them straight to the beach. Time to learn some turns!": "你可以抓住绿色的波浪，骑着它们直奔海滩。是时候学习一些转身了！",
    "of": "/",
    "A backside turn to set up for waves, trickier because you're facing away from the wave.": "一个后转身为波浪做准备，因为你背对着波浪，所以更棘手。",
    "A frontside turn at the base of the wave to generate speed and set up maneuvers.": "在波浪底部的正面转弯，以产生速度和设置动作。",
    "Ability to read the ocean and predict good surf conditions. Higher levels decrease wave waiting time.": "能够读懂海洋和预测良好的冲浪条件。更高的能级减少波的等待时间。",
    "Awkward but functional backside bottom turns": "笨拙但功能的后底转弯",
    "Basic frontside bottom turns, occasionally slow": "基本的前底转弯，偶尔缓慢",
    "Can occasionally spot a decent wave": "偶尔能发现一个像样的波浪吗",
    "Can tell when waves are too small to surf": "能分辨出海浪小到不能冲浪吗",
    "Can't catch green waves": "抓不到绿色的波浪",
    "Can't hold balance on a backside turn": "后转弯时不能保持平衡",
    "Can't perform a proper bottom turn": "不能做正确的底转",
    "Catch small green waves occasionally": "偶尔捕捉绿色的小波浪",
    "Easier time paddling out, avoid some wipeouts": "更容易划水，避免一些淘汰",
    "Faster popup, but still awkward": "更快的弹出，但仍然笨拙",
    "How well you can judge which waves to take and avoid. Higher levels increase wave catch probability.": "你能很好地判断哪些浪该走，哪些浪该避。更高的水位增加捕获波的概率。",
    "knowledge": "知识",
    "maneuver": "机动",
    "More energy, surf 3-4 waves": "更多的精力，冲浪3-4波",
    "No clue about wave conditions": "对海浪情况一无所知",
    "Pick out some rideable waves": "挑选一些可以骑乘的海浪",
    "Ride small green waves confidently": "自信地驾驭绿色的小波浪",
    "Ride whitewater consistently": "始终如一地驾驭激流",
    "Surfing on the unbroken face of a wave.": "在波涛汹涌的海面上冲浪。",
    "Take every wave, good or bad": "抓住每一波，不管是好是坏",
    "(not logged in)": "(未登录)",
    "⚠️ Warning: Deleting game data cannot be undone!": "⚠️警告：删除游戏数据无法撤销！",
    "💡 Tip: Export your game data regularly to avoid losing progress.": "💡提示：定期导出游戏数据以避免丢失进度。",
    "💾 Last saved:": "💾 最后保存:",
    "Failed to save game to cloud": "未能将游戏保存到云端",
    "Game data imported successfully!": "游戏数据导入成功！",
    "Import / Export Game save": "导入/导出游戏存档",
    "Join Discord": "加入 Discord",
    "Join our community to be first to know about updates and share your feedback!": "加入我们的社区，第一时间了解更新并分享您的反馈！",
    "Settings ⚙️": "设置 ⚙️",
    "Quicksave (Local Storage)": "快速保存（本地存储）",
    "📖 Story": "📖 故事",
    "Ancient Sea Wisdom": "古老的海洋智慧",
    "Learn from the ancient wisdom of Mediterranean sailors to better predict and observe surf conditions.": "学习地中海水手的古老智慧，更好地预测和观察海浪状况。",
    "Master the art of reading tides and predicting perfect surf conditions in the challenging waters of France.": "掌握在法国充满挑战的水域中阅读潮汐和预测完美冲浪条件的艺术。",
    "Quickly reach the lineup": "快速到达队列",
    "Regular surfing sessions possible": "可以定期冲浪",
    "Reliable popup on most waves": "可靠的弹出在大多数波浪",
    "Turn on whitewater": "开启激流",
    "Whisperer of Tides": "潮汐低语者",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "TTF": "TTF",
    "SPG": "SPG",
    "FOB": "FOB",
    "BTB": "BTB",
    "WRD": "WRD",
    "GWR": "GWR",
    "WWR": "WWR",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "s": "s",
    "$": "$",
    "📖": "📖",
    "💵": "💵",
    "🏆": "🏆",
    "🏄‍♂️": "🏄‍♂️",
    "🏄": "🏄",
    "": "",
    "crit_multiplier": "crit_multiplier",
    "crit_probability": "crit_probability",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Go Surfing": "去冲浪",
    "Save ": "赚取 ",
    "Work at least 30 hours as a Street Vendor Helper ": "做至少30个小时的街头小贩助手 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "/day": "/天",
    "First Timer": "初次登场",
    "Whitewater Warrior": "激流勇士",
    "Green Wave Beginner": "绿色波浪新手",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^\+([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^GOAT(.+)Surfer$/, '史上最佳冲浪手'],
    [/^Need 2.14 more energy$/, '还需要 $1 精力'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Surfing (.+) \- ([\d\.,]+) waves$/, '冲浪 $1 - $2 波浪'],
    [/^Catch at least (.+) waves (.+)$/, '至少捕捉 $1 波浪 $2'],
    [/^Surf for at least (.+) days (.+)$/, '至少冲浪 $1 天 $2'],
    [/^Wipe out at least (.+) times (.+)$/, '淘汰至少 $1 次 $2'],
    [/^Earn (.+) respect points (.+)$/, '获得 $1 天赋点 $2'],
    [/^Work at least (.+) hours as a Beach Lifeguard Assistant (.+)$/, '做至少 $1 小时的海滩救生员助理 $2'],
    [/^Work at least (.+) hours as a Surfboard Rental Assistant (.+)$/, '做至少 $1 小时的冲浪板租赁助理 $2'],
    [/^Work at least (.+) hours as a Tour Guide Helper (.+)$/, '做至少 $1 小时的导游助理 $2'],
    [/^Work at least (.+) hours as a Surf Guide (.+)$/, '做至少 $1 小时的冲浪指导 $2'],
    [/^Work at least (.+) hours as a Dishwasher (.+)$/, '做至少 $1 小时的洗碗工 $2'],
    [/^Points: (.+) \(base\) x (.+) \(\(Overall skill level \- (.+) \(effects\)$/, '点数: $1 (基础) x $2 ((综合技能等级 - $3 (效果)'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^Need ([\d\.]+) more energy$/, '还需要 $1 精力'],
    [/^requires ([\d\.]+) more research points$/, '还需要 $1 研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^([\d\.,]+) minutes$/, '$1 分钟'],
    [/^([\d\.,]+) minutes ago$/, '$1 分钟前'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) per page$/, '$1 每页'],
    [/^📖 Story ([\d\.,]+)$/, '📖 故事 $1'],
    [/^Reach Level ([\d\.,]+) in Forecasting And Observing$/, '预测和观察达到 $1 级'],
    [/^Reach Fitness level ([\d\.,]+)$/, '达到健身等级 $1'],
    [/^Reach Surf level ([\d\.,]+)$/, '达到冲浪等级 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);