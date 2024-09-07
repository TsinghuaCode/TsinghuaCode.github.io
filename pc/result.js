document.addEventListener('DOMContentLoaded', function() {
    const wineNames = [
    "尼雅传奇混酿干红 Blend",
    "尼雅传奇马瑟兰混酿干红 M5",
    "尼雅传奇赤霞珠混酿干红 C5",
    "尼雅传奇年份马瑟兰混酿干红 2019",
    "尼雅传奇年份赤霞珠混酿干红 2019",
    "尼雅2020年份粒选赤霞珠干红葡萄酒",
    "尼雅清风西拉桃红",
    "尼雅清凉小芒森甜白",
    "尼雅脱醇葡萄酒",
    "Suntime Hi啤",
    "Suntime果味白兰地酒",
    "西域典藏葡萄酒",
    "西域圣裔葡萄酒",
    "西域烈焰葡萄蒸馏酒 · 夜色",
    "西域烈焰葡萄蒸馏酒 2012",
    "西域5700赤霞珠干红",
    "西域 · 06赤霞珠干红",
    "西域 · 97赤霞珠干红",
    "西域圣裔赤霞珠干红-王",
    "天方夜谭葡萄富集酒",
    "尼雅 · 五星东方窖藏精酿干红",
    "尼雅 · 五星东方干白",
    "尼雅 · 五星东方优酿干红",
    "尼雅 · 五星东方特酿干红",
    "尼雅 · 五星东方珍藏干红",
    "尼雅 · 五星东方霞多丽干白（年份酒）",
    "尼雅 · 五星东方赤霞珠干红（年份酒）",
    "中信大厦 · 尼雅联名款赤霞珠干红"
    ];
    
    const result = localStorage.getItem('wineRecommendation');
    if (result) {
        const index = parseInt(result.replace('wine', ''));
        const wineName = wineNames[index];
        
        if (wineName) {
            document.getElementById('result').innerText = `为你量身定制的酒:\n${wineName}`;
            
            const img = document.createElement('img');
            img.src = `images/${index}.png`;
            img.alt = wineName;
            img.style.maxWidth = '100%'; 
            
            document.querySelector('.container').appendChild(img);
        } else {
            document.getElementById('result').innerText = '未找到推荐的酒品';
        }
        
        localStorage.removeItem('wineRecommendation');
    }
    });