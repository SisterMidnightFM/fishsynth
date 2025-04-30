// Fish Particle Magnet Configuration
const CONFIG = {
  // Particle settings
  particles: {
    count: 90,                  // Number of fish particles
    damping: 0.95,               // Velocity damping (0-1)
    randomMotionStrength: 0.02,  // Strength of random motion (0-1)
    repelDistance: 1000,         // Max distance for particle repulsion
    repelStrength: 0.08,         // Strength of repulsion between particles
    closeDistance: 25,           // Distance to trigger sound and flash
    edgeForce: 70,               // Edge repulsion strength
    edgeThreshold: 50,           // Distance from edge to start repulsion

    // Explosion settings
    explosionThreshold: 18,      // Number of fish in an area to trigger an explosion
    explosionRadius: 80,         // Radius of the explosion effect
    explosionForce: 15.0,        // Strength of the explosion repulsion
    explosionDuration: 2         // Duration of the explosion effect in seconds
  },
  
  // Fish appearance
  fish: {
    bodyLength: 10,              // Length of fish body
    bodyWidth: 5,                // Width of fish body
    tailLength: 5,               // Length of tail
    tailWidth: 5,                // Width of tail
  },
  
  // Path settings
  paths: {
    lineWidth: 8,                // Width of drawn paths
    lineColor: 'rgba(34, 255, 9, 0.5)', // Color of paths
    fadeDuration: 30,             // Time in seconds for lines to fade and be wiped
  },
  
  // Visual effects
  effects: {
    trailOpacity: 0.1,           // Opacity of trail effect (0-1)
    flashRadius: 25,             // Radius of flash circles
    flashFadeSpeed: 0.2,        // How quickly flashes fade out
    backgroundColorStart: '#000000', // Background color start (gradient)
    backgroundColorEnd: '#000000',   // Background color end (gradient)
  },
  
  // Audio settings
  audio: {
    toneType: 'sine',            // Oscillator type: sine, square, sawtooth, triangle
    toneVolume: 0.2,             // Maximum volume of tones (0-1)
    toneDuration: 0.2,           // Duration of tones in seconds
    minInterval: 300,            // Minimum time between tones (ms)
    reverbDuration: 2,           // Duration of reverb in seconds

    // ADSR envelope settings
    attack: 0.01,                // Time for the sound to reach full volume (seconds)
    decay: 0.08,                 // Time for the sound to decay to sustain level (seconds)
    sustain: 0.9,                // Sustain level as a fraction of max volume (0-1)
    release: 0.9,                // Time for the sound to fade out after release (seconds)

    // Continuous sine wave settings
    continuousToneBaseFrequency: 200, // Base frequency for the continuous tone (Hz)
    continuousToneMaxFrequency: 1000, // Maximum frequency for the continuous tone (Hz)
    tremoloDepth: 0.5,                // Depth of the tremolo effect (0-1)
    tremoloSpeedFactor: 0.01,         // Factor to scale the tremolo speed based on x movement

    // Frequencies for the D minor 7 chord (D2, F2, A2, C3 to D6)
    dMinor7Frequencies: [73.42, 87.31, 110.00, 130.81, 146.83, 174.62, 220.00, 261.63, 293.66, 349.23, 440.00, 523.25, 587.32, 698.46, 880.00, 1046.50],

    // Frequencies for the C major scale (C2 to C6)
    cMajorFrequencies: [65.41, 73.42, 82.41, 87.31, 98.00, 110.00, 123.47, 130.81, 146.83, 164.81, 174.61, 196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.32, 659.25, 698.46, 783.99, 880.00, 987.77],

    // Frequencies for G major chord (G2, B2, D3 to G6)
    gMajorFrequencies: [98.00, 123.47, 146.83, 196.00, 246.94, 293.66, 392.00, 493.88, 587.32, 783.99, 987.77, 1174.66],
    
    // Frequencies for A minor chord (A2, C3, E3 to A6)
    aMinorFrequencies: [110.00, 130.81, 164.81, 220.00, 261.63, 329.63, 440.00, 523.25, 659.25, 880.00, 1046.50, 1318.51],
    
    // Frequencies for F major chord (F2, A2, C3 to F6)
    fMajorFrequencies: [87.31, 110.00, 130.81, 174.61, 220.00, 261.63, 349.23, 440.00, 523.25, 698.46, 880.00, 1046.50],
    
    // Which scale to use (options: 'dMinor7', 'cMajor', 'gMajor', 'aMinor', 'fMajor')
    activeScale: 'dMinor7', // Default scale

    // Updated toggleScale method to cycle through all chords
    toggleScale() {
      const scales = ['dMinor7', 'cMajor', 'gMajor', 'aMinor', 'fMajor'];
      const currentIndex = scales.indexOf(this.activeScale);
      this.activeScale = scales[(currentIndex + 1) % scales.length];
    }
  },
  
  // UI settings
  ui: {
    resetButtonSize: 40,         // Size of reset button in pixels
    resetButtonColor: 'white',   // Color of reset button
    resetButtonTextColor: 'black' // Color of reset button text
  }
};
