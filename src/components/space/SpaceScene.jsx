import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Mouse-reactive camera ─── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const handlePointer = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x * 0.8 - target.current.x) * 0.02;
    target.current.y += (mouse.current.y * 0.5 - target.current.y) * 0.02;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, 0);
  });

  // Attach via native event to avoid R3F pointer quirks
  if (typeof window !== 'undefined') {
    window.__spaceCamMove = handlePointer;
  }

  return null;
}

/* ─── Rotating star field ─── */
function RotatingStars() {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.012;
  });
  return (
    <group ref={ref}>
      <Stars radius={80} depth={60} count={3500} factor={4} saturation={0.1} fade speed={0.4} />
    </group>
  );
}

/* ─── Central planet with distorted surface ─── */
function CentralPlanet() {
  const ref = useRef();
  const glowRef = useRef();
  useFrame((s) => {
    const t = s.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.06;
      ref.current.rotation.x = Math.sin(t * 0.02) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.8 + Math.sin(t * 0.5) * 0.06);
    }
  });

  return (
    <group>
      {/* Glow sphere behind */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshBasicMaterial color="#AC6AFF" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
      {/* Main planet */}
      <mesh ref={ref}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <MeshDistortMaterial
          color="#4A1A7A"
          emissive="#8B3CC4"
          emissiveIntensity={0.5}
          distort={0.28}
          speed={1.2}
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

/* ─── Single orbit ring (torus) ─── */
function OrbitRing({ radius, tilt = [0, 0, 0], color, opacity = 0.35, pulseSpeed = 1 }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) {
      const pulse = 1 + Math.sin(s.clock.getElapsedTime() * pulseSpeed) * 0.08;
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 16, 200]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

/* ─── Orbiting small body ─── */
function OrbitingBody({ radius, size, color, speed, offset = 0, tilt = [0, 0, 0] }) {
  const ref = useRef();

  useFrame((s) => {
    const t = s.clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      // Apply orbit tilt by calculating position, then rotating
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      // Simple tilt: rotate around X and Z axis
      const cosT = Math.cos(tilt[0]);
      const sinT = Math.sin(tilt[0]);
      ref.current.position.set(x, z * sinT, z * cosT);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

/* ─── Nebula dust in orbital distribution ─── */
function OrbitalDust() {
  const ref = useRef();
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 2.5 + Math.random() * 8;
      const y = (Math.random() - 0.5) * 2;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    return pos;
  }, []);

  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#C084FC" transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

/* ─── Decorative planets in the background ─── */
function BackgroundPlanet({ position, size, color }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.02;
  });
  return (
    <Float speed={0.8} floatIntensity={0.4} rotationIntensity={0.05}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

/* ─── Main exported scene ─── */
export default function SpaceScene() {
  return (
    <div
      className="absolute inset-0 z-0"
      onPointerMove={(e) => window.__spaceCamMove?.(e.nativeEvent)}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <CameraRig />

        {/* Lighting */}
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 8]} intensity={1.5} color="#AC6AFF" />
        <pointLight position={[-6, -4, -3]} intensity={0.6} color="#FF98E2" />
        <pointLight position={[0, 3, 3]} intensity={0.4} color="#ffffff" />

        <RotatingStars />

        {/* Central planet */}
        <CentralPlanet />

        {/* Concentric orbit rings - like the original design */}
        <OrbitRing radius={3.0} tilt={[0.25, 0, 0.1]} color="#AC6AFF" opacity={0.5} pulseSpeed={0.3} />
        <OrbitRing radius={4.5} tilt={[-0.15, 0.2, -0.05]} color="#8B5CF6" opacity={0.3} pulseSpeed={0.5} />
        <OrbitRing radius={6.2} tilt={[0.1, -0.1, 0.15]} color="#7C3AED" opacity={0.2} pulseSpeed={0.7} />
        <OrbitRing radius={8.0} tilt={[-0.2, 0.15, 0]} color="#6D28D9" opacity={0.12} pulseSpeed={0.4} />

        {/* Orbiting bodies on rings */}
        <OrbitingBody radius={3.0} size={0.12} color="#FF98E2" speed={0.4} offset={0} tilt={[0.25, 0, 0]} />
        <OrbitingBody radius={3.0} size={0.07} color="#C084FC" speed={0.4} offset={3.14} tilt={[0.25, 0, 0]} />
        <OrbitingBody radius={4.5} size={0.18} color="#e981d8" speed={0.25} offset={1.2} tilt={[-0.15, 0, 0]} />
        <OrbitingBody radius={4.5} size={0.08} color="#A78BFA" speed={0.25} offset={4.0} tilt={[-0.15, 0, 0]} />
        <OrbitingBody radius={6.2} size={0.25} color="#f369be" speed={0.15} offset={2.5} tilt={[0.1, 0, 0]} />
        <OrbitingBody radius={6.2} size={0.1} color="#8B5CF6" speed={0.15} offset={5.5} tilt={[0.1, 0, 0]} />
        <OrbitingBody radius={8.0} size={0.14} color="#c2b0d6" speed={0.08} offset={0.8} tilt={[-0.2, 0, 0]} />

        {/* Orbital dust */}
        <OrbitalDust />

        {/* Background atmosphere planets */}
        <BackgroundPlanet position={[-12, 4, -18]} size={2.0} color="#1E0D35" />
        <BackgroundPlanet position={[14, -3, -20]} size={1.5} color="#2D1450" />
      </Canvas>
    </div>
  );
}
