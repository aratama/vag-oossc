import createVirtualAudioGraph, * as V from 'virtual-audio-graph';

document.getElementById("start").addEventListener("click", () => {
    const virtualAudioGraph = createVirtualAudioGraph();
    const currentTime = virtualAudioGraph.currentTime;
    setInterval(() => {
        virtualAudioGraph.update({
            0: V.gain('output', {
                gain: [
                    ['setValueAtTime', 1, currentTime + 1],
                    ['exponentialRampToValueAtTime', 0.0001, currentTime + 2]
                ]
            }),
            1: V.oscillator(0, { stopTime: currentTime + 2 })
        });
    }, 100);
});


