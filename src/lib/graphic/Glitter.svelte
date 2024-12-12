<script>
    import { onMount } from 'svelte';
    import confetti from 'canvas-confetti';
  
    export let duration = 3000; // Total duration of the effect in ms
    export let colors = [
        '#FFE400', // Bright yellow
        '#FFBD00', // Golden yellow
        '#E89400', // Orange
        '#FFCA6C', // Light orange
        '#FDFFB8'  // Pale yellow
    ];
    export let shapes = ['star'];
    export let origin = { 
        y: 0, 
        x: 0.5,
    };

    // Total number of particles to use
    const count = 5000;

    function fire(particleRatio, opts) {
        // All options merged to one
        const mergedOpts = {
            origin,
            colors,
            shapes,
            ...opts
        };

        // Calculate particle count based on ratio
        const particleCount = Math.floor(count * particleRatio);

        confetti({
            particleCount,
            ...mergedOpts
        });
    }

    function glitter() {
        const stages = [
            // First big burst at the top
            {
                timing: 0,
                configs: [
                    { ratio: 0.1, spread: 180, startVelocity: 80, scalar: 2.2 },
                    { ratio: 0.3, spread: 170, startVelocity: 70, scalar: 2 }
                ]
            },
            // Middle with thick and varied confetti
            {
                timing: duration * 0.3,
                configs: [
                    { ratio: 0.3, spread: 160, startVelocity: 80, scalar: 1.8 },
                    { ratio: 0.2, spread: 140, startVelocity: 50, scalar: 1.6 }
                ]
            },
            // End stage with less confetti
            {
                timing: duration * 0.7,
                configs: [
                    { ratio: 0.1, spread: 100, startVelocity: 40, scalar: 1.4 },
                    { ratio: 0.05, spread: 80, startVelocity: 30, scalar: 1.2 }
                ]
            }
        ];

        // Fire the multiple stages
        stages.forEach(stage => {
            setTimeout(() => {
                stage.configs.forEach(particleConfig => {
                    const { ratio, ...opts } = particleConfig;
                    fire(ratio, opts);
                });
            }, stage.timing);
        });

        setTimeout(() => {
            fire(0.05, { 
                spread: 360, 
                startVelocity: 20, 
                decay: 0.9,
                scalar: 1 
            });
        }, duration - 200);
    }

    onMount(() => {
        glitter();
    });
</script>
