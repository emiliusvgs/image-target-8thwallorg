const onxrloaded = () => {
    XR8.XrController.configure({
        imageTargetData: [
            require('../image-targets/taget.json'),

        ],
    })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)

