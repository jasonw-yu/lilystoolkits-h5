// 工具列表数据
const toolsData = [
    {
        id: 'converter',
        name: '进制转换器',
        description: '支持十进制、十六进制、二进制之间的相互转换,实时显示转换结果',
        icon: '🔢',
        path: '../converter/converter.html',
        tags: ['进制', '转换', '数字']
    },
    {
        id: 'hexascii',
        name: 'Hex/ASCII转换器',
        description: '十六进制与ASCII码之间的双向转换,支持批量字符处理',
        icon: '🔤',
        path: '../hexascii/hexascii.html',
        tags: ['Hex', 'ASCII', '编码']
    },
    {
        id: 'optical',
        name: '光模块计算器',
        description: '光模块参数计算工具,支持DDM参数、BER/SNR、功率单位转换',
        icon: '💡',
        path: '../optical/optical.html',
        tags: ['光模块', '计算', 'DDM']
    }
];

// 初始化页面
function initPage() {
    const toolsGrid = document.getElementById('toolsGrid');

    // 生成工具卡片
    toolsData.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.setAttribute('data-id', tool.id);

        toolCard.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <h2 class="tool-title">${tool.name}</h2>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
            </div>
        `;

        // 添加点击事件
        toolCard.addEventListener('click', () => {
            navigateToTool(tool.path);
        });

        // 添加键盘支持
        toolCard.setAttribute('tabindex', '0');
        toolCard.setAttribute('role', 'button');
        toolCard.setAttribute('aria-label', `打开${tool.name}`);
        toolCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigateToTool(tool.path);
            }
        });

        toolsGrid.appendChild(toolCard);
    });
}

// 页面导航
function navigateToTool(path) {
    window.location.href = path;
}

// 当DOM加载完成后初始化页面
document.addEventListener('DOMContentLoaded', initPage);
