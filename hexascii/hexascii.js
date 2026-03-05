// DOM元素
const asciiInput = document.getElementById('asciiInput');
const hexInput = document.getElementById('hexInput');
const asciiToHexBtn = document.getElementById('asciiToHexBtn');
const hexToAsciiBtn = document.getElementById('hexToAsciiBtn');
const clearAsciiBtn = document.getElementById('clearAsciiBtn');
const clearHexBtn = document.getElementById('clearHexBtn');

// ASCII文本转Hex
asciiToHexBtn.addEventListener('click', () => {
    const asciiText = asciiInput.value;
    if (!asciiText) {
        showToast('请输入ASCII文本', 'error');
        showError(asciiInput);
        return;
    }

    try {
        let hexResult = '';
        for (let i = 0; i < asciiText.length; i++) {
            hexResult += asciiText.charCodeAt(i).toString(16).toUpperCase().padStart(2, '0') + ' ';
        }

        hexInput.value = hexResult.trim();
        clearError(asciiInput);
        clearError(hexInput);
        showToast('转换成功');
    } catch (error) {
        console.error('转换错误:', error);
        showToast('转换失败，请检查输入', 'error');
        showError(asciiInput);
    }
});

// Hex转ASCII文本
hexToAsciiBtn.addEventListener('click', () => {
    const hexText = hexInput.value.replace(/\s+/g, '');
    if (!hexText) {
        showToast('请输入HEX文本', 'error');
        showError(hexInput);
        return;
    }

    // 验证hex格式
    if (!/^[0-9A-Fa-f]+$/.test(hexText)) {
        showToast('请输入有效的HEX字符', 'error');
        showError(hexInput);
        return;
    }

    // 检查字符数量是否为偶数
    if (hexText.length % 2 !== 0) {
        showToast('HEX字符数量必须为偶数', 'error');
        showError(hexInput);
        return;
    }

    try {
        let asciiResult = '';
        for (let i = 0; i < hexText.length; i += 2) {
            const charCode = parseInt(hexText.substr(i, 2), 16);
            asciiResult += String.fromCharCode(charCode);
        }

        asciiInput.value = asciiResult;
        clearError(asciiInput);
        clearError(hexInput);
        showToast('转换成功');
    } catch (error) {
        console.error('转换错误:', error);
        showToast('转换失败，请检查输入', 'error');
        showError(hexInput);
    }
});

// 清空ASCII输入
clearAsciiBtn.addEventListener('click', () => {
    asciiInput.value = '';
    clearError(asciiInput);
    showToast('已清空');
});

// 清空Hex输入
clearHexBtn.addEventListener('click', () => {
    hexInput.value = '';
    clearError(hexInput);
    showToast('已清空');
});

// ASCII输入框实时验证
asciiInput.addEventListener('input', () => {
    clearError(asciiInput);
});

// Hex输入框实时验证和格式化
hexInput.addEventListener('input', (e) => {
    clearError(hexInput);

    // 自动格式化：确保每两个字符后有一个空格
    const cursorPos = e.target.selectionStart;
    const value = e.target.value.replace(/[^0-9A-Fa-f\s]/g, ''); // 移除非法字符
    const unformatted = value.replace(/\s+/g, ''); // 移除所有空格
    const formatted = unformatted.match(/.{1,2}/g)?.join(' ') || '';

    if (value !== e.target.value) {
        e.target.value = formatted;
    }
});

// 显示错误状态
function showError(element) {
    element.classList.add('error');
}

// 清除错误状态
function clearError(element) {
    element.classList.remove('error');
}

// 显示提示消息
function showToast(message, type = 'success') {
    // 移除已存在的toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // 创建toast元素
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: fadeInUp 0.3s ease;
        font-size: 14px;
        font-weight: 500;
    `;

    document.body.appendChild(toast);

    // 3秒后移除
    setTimeout(() => {
        toast.style.animation = 'fadeOutDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('已复制到剪贴板');
    }).catch(err => {
        console.error('复制失败:', err);
        showToast('复制失败', 'error');
    });
}

// 初始化
function init() {
    // 清空输入框
    asciiInput.value = '';
    hexInput.value = '';

    // 清除可能的错误状态
    clearError(asciiInput);
    clearError(hexInput);

    // 添加复制按钮事件
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            const text = targetElement.value.trim();
            if (text) {
                copyToClipboard(text);
            } else {
                showToast('内容为空', 'error');
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
