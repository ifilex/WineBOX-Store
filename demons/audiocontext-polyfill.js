/*!
audiocontext-polyfill.js v0.1.1
(c) 2013 - 2014 Shinnosuke Watanabe
Licensed under the MIT license
*/

// ============================================
// CLEAN-DOS.JS - Elimina UI pero mantiene eventos
// ============================================



(function() {
    console.log('🧹 Clean-DOS: Iniciando parche');
    
    // Guardar referencia original
    const originalDos = window.Dos;
    if (!originalDos) {
        console.error('Clean-DOS: Dos no encontrado');
        return;
    }
    
    // Reemplazar Dos
    window.Dos = function(element, userOptions) {
        // Configuración limpia
        const options = userOptions || {};
//        options.noSideBar = true;
//        options.noSocialLinks = true;
        options.style = "none"; 
        
        console.log('🧹 Clean-DOS: Creando emulador sin UI');
        const emulator = originalDos.call(this, element, options);
        
        // Guardar referencia global
        window.__currentEmulator = emulator;
        
        return emulator;
    };

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
    
    // Copiar propiedades
    Object.assign(window.Dos, originalDos);

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
