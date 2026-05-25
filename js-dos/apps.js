// === PARCHE: Joystick siempre visibles ===
(function() {
    // Forzar estilo
    const style = document.createElement('style');
    style.textContent = `
        .nipple-collection, .nipple, [class*="Nipple"], [class*="nipple"] {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            transition: none !important;
            animation: none !important;
        }
        .nipple .back, .nipple .front {
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Forzar inline styles
    const keepVisible = () => {
        document.querySelectorAll('.nipple-collection, .nipple, [class*="Nipple"]').forEach(el => {
            if (el.style.opacity !== '1') {
                el.style.setProperty('opacity', '1', 'important');
                el.style.setProperty('visibility', 'visible', 'important');
                if (el.style.transition) el.style.transition = 'none';
            }
        });
    };
    
    setInterval(keepVisible, 50);
    new MutationObserver(keepVisible).observe(document.body, { childList: true, subtree: true });
    
    console.log('🎮 Joystick siempre visibles');
})();
