// DOM元素
const decimalInput = document.getElementById('decimalInput');
const hexInput = document.getElementById('hexInput');
const binaryInput = document.getElementById('binaryInput');

// 最大输入长度
const MAX_INPUT_LENGTH = 32;

// 初始化
function init() {
    // 十进制输入事件
    decimalInput.addEventListener('input', (e) => {
        handleDecimalInput(e);
    });

    // 十六进制输入事件
    hexInput.addEventListener('input', (e) => {
        handleHexInput(e);
    });

    // 二进制输入事件
    binaryInput.addEventListener('input', (e) => {
        handleBinaryInput(e);
    });

    // 键盘事件 - 限制输入字符
    decimalInput.addEventListener('keydown', (e) => {
        if (!/^[0-9]$|Backspace|Delete|Arrow|Tab|Control|Meta/.test(e.key)) {
            e.preventDefault();
        }
    });

    hexInput.addEventListener('keydown', (e) => {
        if (!/^[0-9A-Fa-f]$|Backspace|Delete|Arrow|Tab|Control|Meta/.test(e.key)) {
            e.preventDefault();
        }
    });

    binaryInput.addEventListener('keydown', (e) => {
        if (!/^[01]$|Backspace|Delete|Arrow|Tab|Control|Meta/.test(e.key)) {
            e.preventDefault();
        }
    });

    // 复制按钮事件
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            const text = targetElement.value.trim();
            if (text) {
                copyToClipboard(text);
            }
        });
    });
}

// 处理十进制输入
function handleDecimalInput(e) {
    let value = e.target.value;
    
    // 移除所有非数字字符
    value = value.replace(/[^0-9]/g, '');
    
    // 限制长度
    if (value.length > MAX_INPUT_LENGTH) {
        value = value.slice(0, MAX_INPUT_LENGTH);
    }
    
    // 更新当前输入框
    e.target.value = value;
    
    // 转换并更新其他输入框
    if (value) {
        try {
            const decimal = BigInt(value);
            
            // 转换为十六进制
            let hexStr = decimal.toString(16).toUpperCase();
            if (hexStr.length % 2 !== 0) {
                hexStr = '0' + hexStr;
            }
            hexInput.value = hexStr.replace(/([0-9A-F]{2})(?=.)/g, '$1 ');
            
            // 转换为二进制
            let binaryStr = decimal.toString(2);
            while (binaryStr.length % 4 !== 0) {
                binaryStr = '0' + binaryStr;
            }
            binaryInput.value = binaryStr.replace(/(\d{4})(?=.)/g, '$1 ');
            
        } catch (error) {
            console.error('转换错误:', error);
            hexInput.value = '';
            binaryInput.value = '';
        }
    } else {
        hexInput.value = '';
        binaryInput.value = '';
    }
}

// 处理十六进制输入
function handleHexInput(e) {
    let value = e.target.value.toUpperCase();
    
    // 移除所有非十六进制字符
    value = value.replace(/[^0-9A-F]/g, '');
    
    // 限制长度
    if (value.length > MAX_INPUT_LENGTH) {
        value = value.slice(0, MAX_INPUT_LENGTH);
    }
    
    // 格式化显示（每2位一组）
    let formattedValue = value;
    if (value.length % 2 !== 0 && value.length > 0) {
        formattedValue = '0' + value;
    }
    formattedValue = formattedValue.replace(/([0-9A-F]{2})(?=.)/g, '$1 ');
    
    // 更新当前输入框
    e.target.value = formattedValue;
    
    // 转换并更新其他输入框
    if (value) {
        try {
            const decimal = BigInt('0x' + value);
            
            // 转换为十进制
            decimalInput.value = decimal.toString(10);
            
            // 转换为二进制
            let binaryStr = decimal.toString(2);
            while (binaryStr.length % 4 !== 0) {
                binaryStr = '0' + binaryStr;
            }
            binaryInput.value = binaryStr.replace(/(\d{4})(?=.)/g, '$1 ');
            
        } catch (error) {
            console.error('转换错误:', error);
            decimalInput.value = '';
            binaryInput.value = '';
        }
    } else {
        decimalInput.value = '';
        binaryInput.value = '';
    }
}

// 处理二进制输入
function handleBinaryInput(e) {
    let value = e.target.value;
    
    // 移除所有非二进制字符
    value = value.replace(/[^01]/g, '');
    
    // 限制长度
    if (value.length > MAX_INPUT_LENGTH) {
        value = value.slice(0, MAX_INPUT_LENGTH);
    }
    
    // 格式化显示（每4位一组）
    let formattedValue = value;
    while (formattedValue.length % 4 !== 0 && formattedValue.length > 0) {
        formattedValue = '0' + formattedValue;
    }
    formattedValue = formattedValue.replace(/(\d{4})(?=.)/g, '$1 ');
    
    // 更新当前输入框
    e.target.value = formattedValue;
    
    // 转换并更新其他输入框
    if (value) {
        try {
            const decimal = BigInt('0b' + value);
            
            // 转换为十进制
            decimalInput.value = decimal.toString(10);
            
            // 转换为十六进制
            let hexStr = decimal.toString(16).toUpperCase();
            if (hexStr.length % 2 !== 0) {
                hexStr = '0' + hexStr;
            }
            hexInput.value = hexStr.replace(/([0-9A-F]{2})(?=.)/g, '$1 ');
            
        } catch (error) {
            console.error('转换错误:', error);
            decimalInput.value = '';
            hexInput.value = '';
        }
    } else {
        decimalInput.value = '';
        hexInput.value = '';
    }
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

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
