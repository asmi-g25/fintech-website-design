import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';

function DebitCard({ isFlipped }: { isFlipped: boolean }) {
  const cardRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cardRef.current) {
      // Smooth flip transition
      const targetRotation = isFlipped ? Math.PI : 0;
      cardRef.current.rotation.y += (targetRotation - cardRef.current.rotation.y) * 0.1;

      // Gentle floating animation
      cardRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      cardRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.01;
      cardRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={cardRef}>
      {/* Card Front */}
      <group visible={Math.abs(cardRef.current?.rotation.y || 0) < Math.PI / 2}>
        {/* Card Base */}
        <Box args={[4, 2.5, 0.05]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
        
        {/* Gold Accent */}
        <Box args={[4, 0.3, 0.06]} position={[0, 0.8, 0]}>
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0}
            emissive="#D4AF37"
            emissiveIntensity={0.2}
          />
        </Box>

        {/* Chip */}
        <Box args={[0.4, 0.3, 0.02]} position={[-1.2, 0.3, 0.026]}>
          <meshStandardMaterial
            color="#FFD700"
            metalness={1}
            roughness={0.1}
          />
        </Box>

        {/* XEXON Text */}
        <Text
          position={[-1.5, -0.2, 0.026]}
          fontSize={0.3}
          color="#D4AF37"
          fontWeight="bold"
          letterSpacing={0.1}
        >
          XEXON
        </Text>

        {/* Card Number */}
        <Text
          position={[0, -0.6, 0.026]}
          fontSize={0.15}
          color="#ffffff"
          fontWeight="500"
          letterSpacing={0.05}
        >
          •••• •••• •••• 1234
        </Text>

        {/* Visa Logo */}
        <Text
          position={[1.5, -0.8, 0.026]}
          fontSize={0.2}
          color="#ffffff"
          fontWeight="bold"
        >
          VISA
        </Text>
      </group>

      {/* Card Back */}
      <group visible={Math.abs(cardRef.current?.rotation.y || 0) >= Math.PI / 2} rotation={[0, Math.PI, 0]}>
        <Box args={[4, 2.5, 0.05]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
        
        {/* Magnetic Stripe */}
        <Box args={[4, 0.3, 0.06]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#333333" />
        </Box>

        {/* CVV Area */}
        <Box args={[1.5, 0.3, 0.06]} position={[1, -0.2, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>

        <Text
          position={[1, -0.2, 0.026]}
          fontSize={0.12}
          color="#000000"
          fontWeight="500"
        >
          123
        </Text>
      </group>
    </group>
  );
}

export function Card3D() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 5000); // Slightly longer interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="w-full h-80 cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <DebitCard isFlipped={isFlipped} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={isHovered}
          autoRotate={!isHovered}
          autoRotateSpeed={1}
        />
      </Canvas>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-400">Click or hover to interact</p>
      </div>
    </div>
  );
}
