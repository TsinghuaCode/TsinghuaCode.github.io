const questions = [
    {
        text: "当你遇到一个陌生人时，你通常会如何？",
        options: [
            "保持距离，观察对方",
            "热情地与他们交谈",
            "有礼貌地打招呼，但不深入交流",
            "感到紧张，尽量避免交流"
        ]
    },
    {
        text: "你通常如何规划你的时间？",
        options: [
            "严格按照计划进行",
            "有大致的计划，但会灵活调整",
            "很少规划，随心所欲",
            "总是拖延，最后一刻才行动"
        ]
    },
    {
        text: "在团队工作中，你倾向于扮演什么角色？",
        options: [
            "领导者，指挥团队",
            "协调者，帮助团队顺利合作",
            "执行者，专注于自己的任务",
            "观察者，提供意见和建议"
        ]
    },
    {
        text: "当你遇到困难时，你通常会怎么做？",
        options: [
            "独自解决问题",
            "寻求朋友的帮助",
            "查找资料，自己研究 ",
            "逃避问题，希望它自己解决"
        ]
    },
    {
        text: "你如何看待冒险？",
        options: [
            "非常喜欢，认为这是成长的机会",
            "可以接受，但要在可控范围内",
            "不太喜欢，更喜欢稳定",
            "完全不喜欢，认为风险太大"
        ]
    },
    {
        text: "你在社交场合通常是如何表现的？",
        options: [
            "积极参与，成为焦点",
            "轻松自然，与人交流",
            "比较安静，观察他人",
            "感到不自在，尽量避开"
        ]
    },
    {
        text: "你如何处理批评？",
        options: [
            "接受并反思",
            "感到受伤，但尝试理解",
            "忽略批评，继续做自己",
            "反击，为自己辩护"
        ]
    },
    {
        text: "你更喜欢以下哪种工作环境？",
        options: [
            "竞争激烈，挑战性强",
            "团队合作，氛围和谐",
            "独立工作，自由度高",
            "规律性强，按部就班"
        ]
    },
    {
        text: "你如何看待变化？",
        options: [
            "欣然接受，认为变化是好事",
            "可以适应，但需要时间",
            "有些抗拒，担心不确定性",
            "完全不接受，喜欢维持现状"
        ]
    },
    {
        text: "你在做出重要决定时，通常会依赖什么？",
        options: [
            "逻辑分析和事实",
            "直觉和感觉",
            "他人的意见和反馈",
            "传统和经验"
        ]
    },
    {
        text: "你如何看待自己的情绪？",
        options: [
            "经常控制不住情绪",
            "情绪稳定，偶尔波动",
            "情绪波动较大，但能自我调节",
            "很少表露情绪，总是保持冷静"
        ]
    },
    {
        text: "你如何处理压力？",
        options: [
            "勇往直前，正面应对",
            "寻找放松的方式，如运动或娱乐",
            "与人分享，寻求支持",
            "忽略压力，直到它消失"
        ]
    },
    {
        text: "你如何看待自己的未来？",
        options: [
            "充满期待，有很多计划",
            "持乐观态度，顺其自然",
            "有些担忧，但相信会好转",
            "担忧未来，感到不确定"
        ]
    },
    {
        text: "你在购物时，通常会更注重以下哪个方面？",
        options: [
            "商品的质量",
            "商品的性价比",
            "商品的品牌",
            "商品的独特性"
        ]
    },
    {
        text: "你如何看待自己的个性？",
        options: [
            "坚强独立",
            "热情友好",
            "谨慎细心",
            "开放创新"
        ]
    },
    {
        text: "你认为自己的优点是什么？",
        options: [
            "有责任心",
            "有同情心",
            "有创造力",
            "有领导力"
        ]
    },
    
];

let currentQuestion = 0;
let userSelections = new Array(16).fill(null);

function updateProgressBar() {
    const totalQuestions = questions.length;
    const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = progressPercentage + '%';
}


function updateQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.text;

    const optionTexts = ['textA', 'textB', 'textC', 'textD'];
    question.options.forEach((option, index) => {
        document.getElementById(optionTexts[index]).innerText = option;
    });

    for (let i = 0; i < optionTexts.length; i++) {
        if (i >= question.options.length) {
            document.getElementById(optionTexts[i]).parentElement.style.display = 'none';
        } else {
            document.getElementById(optionTexts[i]).parentElement.style.display = 'block';
        }
    }

    // Clear previous selection
    document.querySelectorAll('input[name="option"]').forEach(radio => radio.checked = false);

    // Load saved selection
    if (userSelections[currentQuestion] !== null) {
        document.querySelector(`input[name="option"][value="${userSelections[currentQuestion]}"]`).checked = true;
    }

    document.getElementById('prev').disabled = currentQuestion === 0;
    document.getElementById('next').style.display = (currentQuestion === questions.length - 1) ? 'none' : 'block';
    document.getElementById('prev').style.display = (currentQuestion === 0) ? 'none' : 'block';

    const showResultButton = document.getElementById('showResultButton');
    if (currentQuestion === questions.length - 1) {
        showResultButton.style.display = 'block';
    } else {
        showResultButton.style.display = 'none';
    }

    updateProgressBar(); 
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('请先选择一个选项');
        return;
    }

    userSelections[currentQuestion] = parseInt(selectedOption.value, 10);

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
    }
    // Debugging info
    // alert('userSelections after nextQuestion: ' + JSON.stringify(userSelections));
}

function prevQuestion() {
    // Save the current selection
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userSelections[currentQuestion] = parseInt(selectedOption.value, 10);
    }

    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
    }

    // Debugging info
    // alert('userSelections after prevQuestion: ' + JSON.stringify(userSelections));
}

updateQuestion();

document.getElementById('prev').addEventListener('click', prevQuestion);
document.getElementById('next').addEventListener('click', nextQuestion);


document.getElementById('showResultButton').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (currentQuestion === questions.length - 1 && !selectedOption) {
        alert('请先选择最后一个问题的选项');
        return;
    }

    if (selectedOption) {
        userSelections[currentQuestion] = parseInt(selectedOption.value, 10);
    }

    const result = recommendWine(userSelections);
    localStorage.setItem('wineRecommendation', result);
    window.location.href = 'result.html';
});
    
