/*!
audiocontext-polyfill.js v0.1.1
(c) 2013 - 2014 Shinnosuke Watanabe
Licensed under the MIT license
*/

(function() {
    // 1. Parchear la función Dos para forzar opciones
    const originalDos = window.Dos;
    window.Dos = function(element, options) {
        options = options || {};
        options.noSideBar = true;
        options.noSocialLinks = true;
        options.style = "none";  // ← Esto desactiva toda la UI
        return originalDos.call(this, element, options);
    };
    
    // 2. Observador que elimina elementos no deseados cuando aparecen
    const observer = new MutationObserver(function(mutations) {
        // Buscar y eliminar sidebar
        const sidebars = document.querySelectorAll([
            '.emulator-sidebar',
            '[class*="SideBar"]',
            '[class*="sidebar"]',
            '.absolute.bg-gray-500.bg-opacity-80', // Tips overlay
            '.z-50.rounded',                       // Modal de tips
            '.emulator-options',
            '.action-bar',
            '.hg-candidate-box'
        ].join(','));
        
        sidebars.forEach(el => {
            if (el && el.remove) {
                console.log('🗑️ Eliminando UI:', el.className);
                el.remove();
            }
        });
        
        // También buscar por contenido de texto (tips)
        const allDivs = document.querySelectorAll('div');
        allDivs.forEach(div => {
            const text = div.innerText || '';
            if (text.includes('Mouse lock') || 
                text.includes('Mobile Controls') ||
                text.includes('Sidebar') ||
                text.includes('Save/Load')) {
                console.log('🗑️ Eliminando tips por texto');
                div.remove();
            }
        });
    });
    
    // Iniciar observación cuando el DOM esté listo
    window.addEventListener('load', () => {
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
        
        // Limpieza inicial
        setTimeout(() => {
            const tips = document.querySelectorAll('.absolute.bg-gray-500.bg-opacity-80');
            tips.forEach(t => t.remove());
        }, 100);
    });
})();


(function(window, undefined) {
  'use strict';

  window.AudioContext = window.AudioContext ||
                        window.webkitAudioContext;

  window.OfflineAudioContext = window.OfflineAudioContext ||
                               window.webkitOfflineAudioContext;

  var Proto = AudioContext.prototype;

  var tmpctx = new AudioContext();

  // Support alternate names
  // start (noteOn), stop (noteOff), createGain (createGainNode), etc.
  var isStillOld = function(normative, old) {
    return normative === undefined && old !== undefined;
  };

  var bufProto = tmpctx.createBufferSource().constructor.prototype;

  if (isStillOld(bufProto.start, bufProto.noteOn) ||
  isStillOld(bufProto.stop, bufProto.noteOff)) {
    var nativeCreateBufferSource = Proto.createBufferSource;

    Proto.createBufferSource = function createBufferSource() {
      var returnNode = nativeCreateBufferSource.call(this);
      returnNode.start = returnNode.start || returnNode.noteOn;
      returnNode.stop = returnNode.stop || returnNode.noteOff;

      return returnNode;
    };
  }

  // Firefox 24 doesn't support OscilatorNode
  if (typeof tmpctx.createOscillator === 'function') {
    var oscProto = tmpctx.createOscillator().constructor.prototype;

    if (isStillOld(oscProto.start, oscProto.noteOn) ||
    isStillOld(oscProto.stop, oscProto.noteOff)) {
      var nativeCreateOscillator = Proto.createOscillator;

      Proto.createOscillator = function createOscillator() {
        var returnNode = nativeCreateOscillator.call(this);
        returnNode.start = returnNode.start || returnNode.noteOn;
        returnNode.stop = returnNode.stop || returnNode.noteOff;

        return returnNode;
      };
    }
  }

  if (Proto.createGain === undefined && Proto.createGainNode !== undefined) {
    Proto.createGain = Proto.createGainNode;
  }

  if (Proto.createDelay === undefined && Proto.createDelayNode !== undefined) {
    Proto.createDelay = Proto.createGainNode;
  }

  if (Proto.createScriptProcessor === undefined &&
  Proto.createJavaScriptNode !== undefined) {
    Proto.createScriptProcessor = Proto.createJavaScriptNode;
  }

  // Black magic for iOS
  var is_iOS = (navigator.userAgent.indexOf('like Mac OS X') !== -1);
  if (is_iOS) {
    var OriginalAudioContext = AudioContext;
    window.AudioContext = function AudioContext() {
      var iOSCtx = new OriginalAudioContext();

      var body = document.body;
      var tmpBuf = iOSCtx.createBufferSource();
      var tmpProc = iOSCtx.createScriptProcessor(256, 1, 1);

      body.addEventListener('touchstart', instantProcess, false);

      function instantProcess() {
        tmpBuf.start(0);
        tmpBuf.connect(tmpProc);
        tmpProc.connect(iOSCtx.destination);
      }

      // This function will be called once and for all.
      tmpProc.onaudioprocess = function() {
        tmpBuf.disconnect();
        tmpProc.disconnect();
        body.removeEventListener('touchstart', instantProcess, false);
        tmpProc.onaudioprocess = null;
      };

      return iOSCtx;
    };
  }
}(window));

// Guardado automático cada 5 minutos
setInterval(async () => {
  const saveFunction = emulator.layers.getOnSave();
  if (saveFunction) {
    console.log("Guardado automático...");
    await saveFunction();
  }
}, 300000); // 5 minutos
