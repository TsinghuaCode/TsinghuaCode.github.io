const wineProfiles = [
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 13.5 / 52.0, aromaComplexity: 0.8, name: "wine0" },
    { sweetness: 0.0, acidity: 0.5, body: 0.9, tannins: 0.8, alcoholContent: 13.5 / 52.0, aromaComplexity: 0.9, name: "wine1" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 14.0 / 52.0, aromaComplexity: 0.8, name: "wine2" },
    { sweetness: 0.0, acidity: 0.5, body: 0.9, tannins: 0.8, alcoholContent: 15.0 / 52.0, aromaComplexity: 0.9, name: "wine3" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 15.0 / 52.0, aromaComplexity: 0.8, name: "wine4" },
    { sweetness: 0.0, acidity: 0.5, body: 0.9, tannins: 0.8, alcoholContent: 15.0 / 52.0, aromaComplexity: 0.9, name: "wine5" },
    { sweetness: 0.2, acidity: 0.6, body: 0.6, tannins: 0.4, alcoholContent: 12.0 / 52.0, aromaComplexity: 0.7, name: "wine6" },
    { sweetness: 0.7, acidity: 0.4, body: 0.5, tannins: 0.2, alcoholContent: 12.0 / 52.0, aromaComplexity: 0.6, name: "wine7" },
    { sweetness: 0.2, acidity: 0.6, body: 0.6, tannins: 0.4, alcoholContent: 0.5 / 52.0, aromaComplexity: 0.6, name: "wine8" },
    { sweetness: 0.4, acidity: 0.4, body: 0.4, tannins: 0.3, alcoholContent: 4.0 / 52.0, aromaComplexity: 0.5, name: "wine9" },
    { sweetness: 0.6, acidity: 0.3, body: 0.5, tannins: 0.2, alcoholContent: 13.5 / 52.0, aromaComplexity: 0.8, name: "wine10" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 14.0 / 52.0, aromaComplexity: 0.8, name: "wine11" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 14.0 / 52.0, aromaComplexity: 0.8, name: "wine12" },
    { sweetness: 0.0, acidity: 0.0, body: 0.5, tannins: 0.0, alcoholContent: 52.0 / 52.0, aromaComplexity: 0.7, name: "wine13" },
    { sweetness: 0.0, acidity: 0.0, body: 0.5, tannins: 0.0, alcoholContent: 52.0 / 52.0, aromaComplexity: 0.8, name: "wine14" },
    { sweetness: 0.0, acidity: 0.5, body: 0.9, tannins: 0.8, alcoholContent: 14.5 / 52.0, aromaComplexity: 0.9, name: "wine15" },
    { sweetness: 0.0, acidity: 0.5, body: 0.9, tannins: 0.8, alcoholContent: 14.0 / 52.0, aromaComplexity: 0.9, name: "wine16" },
    { sweetness: 0.0, acidity: 0.5, body: 0.9, tannins: 0.8, alcoholContent: 14.5 / 52.0, aromaComplexity: 0.9, name: "wine17" },
    { sweetness: 0.0, acidity: 0.5, body: 0.9, tannins: 0.8, alcoholContent: 15.0 / 52.0, aromaComplexity: 0.9, name: "wine18" },
    { sweetness: 0.6, acidity: 0.4, body: 0.6, tannins: 0.3, alcoholContent: 52.0 / 52.0, aromaComplexity: 0.9, name: "wine19" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 13.0 / 52.0, aromaComplexity: 0.8, name: "wine20" },
    { sweetness: 0.0, acidity: 0.5, body: 0.6, tannins: 0.3, alcoholContent: 12.5 / 52.0, aromaComplexity: 0.7, name: "wine21" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 13.0 / 52.0, aromaComplexity: 0.8, name: "wine22" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 13.0 / 52.0, aromaComplexity: 0.8, name: "wine23" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 13.0 / 52.0, aromaComplexity: 0.8, name: "wine24" },
    { sweetness: 0.0, acidity: 0.5, body: 0.6, tannins: 0.3, alcoholContent: 13.0 / 52.0, aromaComplexity: 0.8, name: "wine25" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 14.5 / 52.0, aromaComplexity: 0.9, name: "wine26" },
    { sweetness: 0.0, acidity: 0.5, body: 0.8, tannins: 0.7, alcoholContent: 14.0 / 52.0, aromaComplexity: 0.8, name: "wine27" }
];


function recommendWine(Ans) {
    // 创建一个16x4x6的张量，所有元素初始化为0
    let x = Array.from({ length: 16 }, () => 
        Array.from({ length: 4 }, () => 
            Array(6).fill(0)
        )
    );
    
    console.log('x:', x);
    console.log('Ans:', Ans);

    // 问题一：当你遇到一个陌生人时，你通常会如何？
    x[0][0] = [-1, -1, -1, -1, -1, -1]; // 保持距离，观察对方
    x[0][1] = [1, 0, 1, 0, 1, 1];       // 热情地与他们交谈
    x[0][2] = [0, 0, 0, 0, 0, 0];       // 有礼貌地打招呼，但不深入交流
    x[0][3] = [-1, -1, -1, -1, -1, -1]; // 感到紧张，尽量避免交流

    // 问题二：你通常如何规划你的时间？
    x[1][0] = [0, 1, -1, 1, -1, 0]; // 严格按照计划进行
    x[1][1] = [0, 0, 0, 0, 0, 0];   // 有大致的计划，但会灵活调整
    x[1][2] = [-1, -1, 1, -1, 1, -1]; // 很少规划，随心所欲
    x[1][3] = [-1, -1, 1, -1, 1, -1]; // 总是拖延，最后一刻才行动

    // 问题三：在团队工作中，你倾向于扮演什么角色？
    x[2][0] = [1, 0, 1, 0, 1, 1]; // 领导者，指挥团队
    x[2][1] = [0, 1, 0, 1, 0, 0]; // 协调者，帮助团队顺利合作
    x[2][2] = [-1, -1, -1, -1, -1, -1]; // 执行者，专注于自己的任务
    x[2][3] = [0, 0, 0, 0, 0, 0]; // 观察者，提供意见和建议

    // 问题四：当你遇到困难时，你通常会怎么做？
    x[3][0] = [1, 1, 1, 1, 1, 1]; // 独自解决问题
    x[3][1] = [0, 0, 0, 0, 0, 0]; // 寻求朋友的帮助
    x[3][2] = [-1, 1, -1, 1, -1, 1]; // 查找资料，自己研究
    x[3][3] = [-1, -1, -1, -1, -1, -1]; // 逃避问题，希望它自己解决

    // 问题五：你如何看待冒险？
    x[4][0] = [1, -1, 1, -1, 1, 1]; // 非常喜欢，认为这是成长的机会
    x[4][1] = [0, 0, 0, 0, 0, 0];   // 可以接受，但要在可控范围内
    x[4][2] = [-1, 1, -1, 0, 0, -1]; // 不太喜欢，更喜欢稳定
    x[4][3] = [-1, 1, -1, 1, -1, -1]; // 完全不喜欢，认为风险太大

    // 问题六：你在社交场合通常是如何表现的？
    x[5][0] = [1, -1, 1, -1, 1, 1]; // 积极参与，成为焦点
    x[5][1] = [0, 0, 0, 0, 0, 0];   // 轻松自然，与人交流
    x[5][2] = [-1, 1, -1, 0, 0, -1]; // 比较安静，观察他人
    x[5][3] = [-1, 1, -1, 1, -1, -1]; // 感到不自在，尽量避开

    // 问题七：你如何处理批评？
    x[6][0] = [1, 1, 1, 1, 1, 1]; // 接受并反思
    x[6][1] = [0, 0, 0, 0, 0, 0];   // 感到受伤，但尝试理解
    x[6][2] = [-1, 1, 0, 0, -1, -1]; // 忽略批评，继续做自己
    x[6][3] = [-1, -1, -1, -1, -1, -1]; // 反击，为自己辩护

    // 问题八：你更喜欢以下哪种工作环境？
    x[7][0] = [1, -1, 1, -1, 1, 1]; // 竞争激烈，挑战性强
    x[7][1] = [0, 0, 0, 0, 0, 0];   // 团队合作，氛围和谐
    x[7][2] = [-1, 1, -1, 1, -1, -1]; // 独立工作，自由度高
    x[7][3] = [1, -1, 1, -1, 1, -1]; // 规律性强，按部就班

    // 问题九：你如何看待变化？
    x[8][0] = [1, -1, 1, -1, 1, 1]; // 欣然接受，认为变化是好事
    x[8][1] = [0, 0, 0, 0, 0, 0];   // 可以适应，但需要时间
    x[8][2] = [-1, 1, -1, 1, -1, -1]; // 有些抗拒，担心不确定性
    x[8][3] = [-1, 1, -1, 1, -1, -1]; // 完全不接受，喜欢维持现状

    // 问题十：你在做出重要决定时，通常会依赖什么？
    x[9][0] = [1, -1, 1, -1, 1, 1]; // 逻辑分析和事实
    x[9][1] = [-1, 1, -1, 1, -1, -1]; // 直觉和感觉
    x[9][2] = [0, 0, 0, 0, 0, 0];   // 他人的意见和反馈
    x[9][3] = [-1, 1, -1, 1, -1, -1]; // 传统和经验

    // 问题十一：你如何看待自己的情绪？
    x[10][0] = [-1, 1, -1, 1, -1, -1]; // 经常控制不住情绪
    x[10][1] = [0, 0, 0, 0, 0, 0];   // 情绪稳定，偶尔波动
    x[10][2] = [1, -1, 1, -1, 1, 1]; // 情绪波动较大，但能自我调节
    x[10][3] = [-1, 1, -1, 1, -1, -1]; // 很少表露情绪，总是保持冷静

    // 问题十二：你如何处理压力？
    x[11][0] = [1, -1, 1, -1, 1, 1]; // 勇往直前，正面应对
    x[11][1] = [0, 0, 0, 0, 0, 0];   // 寻找放松的方式，如运动或娱乐
    x[11][2] = [-1, 1, -1, 1, -1, -1]; // 与人分享，寻求支持
    x[11][3] = [-1, 1, -1, 1, -1, -1]; // 忽略压力，直到它消失

    // 问题十三：你在购物时，通常会更注重以下哪个方面？
    x[12][0] = [1, 0, 1, 0, 1, 1]; // 商品的质量
    x[12][1] = [0, 1, 0, 1, 0, 0]; // 商品的性价比
    x[12][2] = [-1, 0, -1, 0, -1, -1]; // 商品的品牌
    x[12][3] = [0, 0, 0, 0, 0, 0]; // 商品的独特性

    // 问题十四：你如何看待自己的个性？
    x[13][0] = [1, -1, 1, -1, 1, 1]; // 坚强独立
    x[13][1] = [0, 0, 0, 0, 0, 0]; // 热情友好
    x[13][2] = [-1, 1, -1, 1, -1, -1]; // 谨慎细心
    x[13][3] = [-1, 1, -1, 1, -1, -1]; // 开放创新

    // 问题十五：你认为自己的优点是什么？
    x[14][0] = [1, -1, 1, -1, 1, 1]; // 有责任心
    x[14][1] = [0, 0, 0, 0, 0, 0]; // 有同情心
    x[14][2] = [-1, 1, -1, 1, -1, -1]; // 有创造力
    x[14][3] = [-1, 1, -1, 1, -1, -1]; // 有领导力

    // 问题十六：你如何处理批评？
    x[15][0] = [1, 1, 1, 1, 1, 1]; // 接受并反思
    x[15][1] = [0, 0, 0, 0, 0, 0]; // 感到受伤，但尝试理解
    x[15][2] = [-1, -1, -1, -1, -1, -1]; // 忽略批评，继续做自己
    x[15][3] = [-1, -1, -1, -1, -1, -1]; // 反击，为自己辩护

    console.log('running recommendWine function 1');

    // 计算每个维度的得分
    let score = Array(6).fill(0);
    for (let i = 0; i < 16; i++) {
        if (Ans[i] >= 0 && Ans[i] < 4) {
            for (let j = 0; j < 6; j++) {
                score[j] += x[i][Ans[i]][j];
            }
        } else {
            console.error(`Invalid index Ans[${i}] = ${Ans[i]}`);
        }
        console.log(`Score after iteration ${i + 1}: ${score}`);
    }
    console.log('running recommendWine function 2');

    // score归一化
    let maxScore = 0;
    for (let i = 0; i < 6; i++) {
        if (score[i] > maxScore) {
            maxScore = score[i];
        }
    }
    
    for (let i = 0; i < 6; i++) {
        score[i] /= maxScore;
    }
    
    console.log('Normalized scores:', score);

    // 计算与28种酒的欧几里得距离
    let distance = Array(28).fill(0);
    for (let i = 0; i < 28; i++) {
        distance[i] = 0;
        distance[i] += Math.pow(score[0] - wineProfiles[i].sweetness, 2);
        distance[i] += Math.pow(score[1] - wineProfiles[i].acidity, 2);
        distance[i] += Math.pow(score[2] - wineProfiles[i].body, 2);
        distance[i] += Math.pow(score[3] - wineProfiles[i].tannins, 2);
        distance[i] += Math.pow(score[4] - wineProfiles[i].alcoholContent, 2);
        distance[i] += Math.pow(score[5] - wineProfiles[i].aromaComplexity, 2);
    }

    // 找出距离最小的酒
    let minIndex = 0;
    let minDistance = distance[0];
    for (let i = 1; i < 28; i++) {
        if (distance[i] < minDistance) {
            minDistance = distance[i];
            minIndex = i;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));
    const recommendedWine = wineProfiles[minIndex].name;
    return recommendedWine;
}
