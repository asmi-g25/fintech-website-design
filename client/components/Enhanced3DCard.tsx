import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';

function DebitCard({ isFlipped, deviceRotation }: { isFlipped: boolean; deviceRotation: { x: number; y: number } }) {
  const cardRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (cardRef.current) {
      // Smooth flip transition
      const targetRotation = isFlipped ? Math.PI : 0;
      cardRef.current.rotation.y += (targetRotation - cardRef.current.rotation.y) * 0.1;
      
      // Device orientation effects
      const deviceInfluence = 0.3;
      cardRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.02 + deviceRotation.x * deviceInfluence;
      cardRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.01 + deviceRotation.y * deviceInfluence;
      
      // Floating animation
      cardRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      
      // Scale based on viewport
      const scale = Math.min(viewport.width / 6, viewport.height / 4);
      cardRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={cardRef}>
      {/* Card Front */}
      <group visible={!isFlipped}>
        {/* Main Card Body */}
        <Box args={[4, 2.5, 0.1]} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={0.8}
          />
        </Box>
        
        {/* Gold Accent Stripe */}
        <Box args={[4, 0.4, 0.12]} position={[0, 0.8, 0]}>
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0}
            emissive="#D4AF37"
            emissiveIntensity={0.3}
            clearcoat={1}
          />
        </Box>

        {/* EMV Chip */}
        <Box args={[0.5, 0.35, 0.03]} position={[-1.2, 0.3, 0.051]}>
          <meshPhysicalMaterial
            color="#FFD700"
            metalness={1}
            roughness={0.1}
            clearcoat={1}
          />
        </Box>

        {/* XEXON Branding */}
        <Text
          position={[-1.5, -0.2, 0.051]}
          fontSize={0.35}
          color="#D4AF37"
          fontWeight="bold"
          letterSpacing={0.1}
          font="/fonts/inter-bold.woff"
        >
          XEXON
        </Text>

        {/* Card Number */}
        <Text
          position={[0, -0.6, 0.051]}
          fontSize={0.16}
          color="#ffffff"
          fontWeight="500"
          letterSpacing={0.05}
        >
          •••• •••• •••• 1234
        </Text>

        {/* Cardholder Name */}
        <Text
          position={[-1.5, -1, 0.051]}
          fontSize={0.12}
          color="#ffffff"
          fontWeight="400"
        >
          CARDHOLDER NAME
        </Text>

        {/* Expiry */}
        <Text
          position={[0, -1, 0.051]}
          fontSize={0.12}
          color="#ffffff"
          fontWeight="400"
        >
          12/28
        </Text>

        {/* Visa Logo */}
        <Text
          position={[1.5, -0.8, 0.051]}
          fontSize={0.22}
          color="#ffffff"
          fontWeight="bold"
        >
          VISA
        </Text>

        {/* Contactless Symbol */}
        <mesh position={[1.2, 0.3, 0.051]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
      </group>

      {/* Card Back */}
      <group visible={isFlipped} rotation={[0, Math.PI, 0]}>
        <Box args={[4, 2.5, 0.1]} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
          />
        </Box>
        
        {/* Magnetic Stripe */}
        <Box args={[4, 0.4, 0.12]} position={[0, 0.5, 0]}>
          <meshBasicMaterial color="#333333" />
        </Box>

        {/* Signature Panel */}
        <Box args={[2, 0.4, 0.12]} position={[1, -0.2, 0]}>
          <meshBasicMaterial color="#ffffff" />
        </Box>

        {/* CVV */}
        <Text
          position={[1, -0.2, 0.051]}
          fontSize={0.14}
          color="#000000"
          fontWeight="500"
        >
          123
        </Text>

        {/* Bank Info */}
        <Text
          position={[0, -0.8, 0.051]}
          fontSize={0.1}
          color="#ffffff"
          fontWeight="400"
        >
          XEXON GLOBAL BANKING
        </Text>
      </group>
    </group>
  );
}

export function Enhanced3DCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [deviceRotation, setDeviceRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Auto-flip interval
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 6000);

    // Device orientation listener
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta !== null && event.gamma !== null) {
        setDeviceRotation({
          x: (event.beta * Math.PI) / 180 / 10, // Convert to radians and scale down
          y: (event.gamma * Math.PI) / 180 / 10
        });
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      clearInterval(interval);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div 
      className="w-full h-96 cursor-pointer transition-transform duration-500 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.6} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1.5}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#D4AF37" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} />
        
        <DebitCard isFlipped={isFlipped} deviceRotation={deviceRotation} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={isHovered}
          autoRotate={!isHovered}
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400 mb-2">Click to flip • Hover to control</p>
        <div className="flex items-center justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${!isFlipped ? 'bg-xexon-gold' : 'bg-gray-400'}`}></div>
          <div className={`w-2 h-2 rounded-full ${isFlipped ? 'bg-xexon-gold' : 'bg-gray-400'}`}></div>
        </div>
      </div>
    </div>
  );
}
