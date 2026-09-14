import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

interface ShardCanvasProps {
  route?: string;
}

const numShards = 40;

function ShardInstancedMesh({ route }: { route: string }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < numShards; i++) {
      const phi = Math.acos(-1 + (2 * Math.random()));
      const theta = Math.sqrt(Math.PI * numShards) * phi;
      const r = 10 + Math.random() * 5;
      
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      const rotX = Math.random() * Math.PI;
      const rotY = Math.random() * Math.PI;
      const rotZ = Math.random() * Math.PI;
      
      const scale = Math.random() * 0.8 + 0.4;

      temp.push({
        position: new THREE.Vector3(x, y, z),
        rotation: new THREE.Euler(rotX, rotY, rotZ),
        scale,
        currentScale: scale,
        charge: 0, // Used for progressive hover effect
        color: new THREE.Color("#ff8c00"),
        speed: (Math.random() - 0.5) * 0.8,
        targetPos: new THREE.Vector3(),
      });
    }
    return temp;
  }, []);

  const baseColor = useMemo(() => new THREE.Color("#ff8c00"), []);
  const hoverColor = useMemo(() => new THREE.Color(12, 12, 12), []);

  const [hovered, setHovered] = useState<number | undefined>();

  useEffect(() => {
    if (meshRef.current) {
      particles.forEach((p, i) => {
        meshRef.current!.setColorAt(i, p.color);
      });
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true;
      }
    }
  }, [particles]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Determine layout mode
    const isWork = route === '/work';
    const isStudio = route === '/studio';
    const isInsights = route === '/insights';
    
    const time = state.clock.elapsedTime;

    // CAMERA PARALLAX:
    // Move the camera smoothly based on mouse position
    // We store the target camera position
    const targetCameraX = (state.mouse.x * 2); 
    const targetCameraY = (state.mouse.y * 2);
    
    // Lerp the camera position for smooth motion
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCameraX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCameraY, 0.05);
    
    // Always look at the center of the scene to create depth pivoting
    state.camera.lookAt(0, 0, -10);

    // Calculate 3D mouse position for repel effect
    // Since camera moves, we must re-project carefully
    const vec = new THREE.Vector3(state.mouse.x, state.mouse.y, 0.5);
    vec.unproject(state.camera);
    const dir = vec.sub(state.camera.position).normalize();
    // Use an average depth (-10) for interaction plane
    const distance = (-10 - state.camera.position.z) / dir.z; 
    const mousePos = state.camera.position.clone().add(dir.multiplyScalar(distance));
    
    particles.forEach((particle, i) => {
      // Calculate target based on route
      if (isWork) {
        // Grid / Circuit layout
        const col = i % 8;
        const row = Math.floor(i / 8);
        particle.targetPos.set((col - 3.5) * 3, (row - 2) * 3, -15);
      } else if (isStudio) {
        // Cluster layout
        const cluster = i % 3;
        particle.targetPos.set((cluster - 1) * 8 + Math.random() - 0.5, (Math.random() - 0.5) * 8, -10 + (Math.random() - 0.5) * 2);
      } else if (isInsights) {
        // Central node
        particle.targetPos.set((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, -5);
      } else {
        // Home - Spinning Circle
        const r = 12; // Fixed radius for a clean circle
        const theta = (i / numShards) * Math.PI * 2 + time * 0.2; // Distribute evenly and spin
        particle.targetPos.set(
          Math.cos(theta) * r,
          Math.sin(i * 0.5 + time) * 2, // Gentle vertical wave
          Math.sin(theta) * r - 10
        );
      }
      // Mouse Repel Effect
      const distToMouse = particle.position.distanceTo(mousePos);
      if (distToMouse < 6) {
        const repelForce = particle.position.clone().sub(mousePos).normalize().multiplyScalar((6 - distToMouse) * 0.2);
        particle.targetPos.add(repelForce);
      }
      
      // Always smoothly interpolate position towards target
      particle.position.lerp(particle.targetPos, 0.05);

      dummy.position.copy(particle.position);
      
      // Add floating motion
      dummy.position.y += Math.sin(time * particle.speed * 2) * 0.5;
      
      // Progressive Interaction specific changes
      const isHovered = hovered === i;
      
      // Charge mechanic: builds up when hovered, dissipates when not
      if (isHovered) {
        particle.charge = Math.min((particle.charge || 0) + delta * 1.5, 1);
      } else {
        particle.charge = Math.max((particle.charge || 0) - delta * 3.0, 0);
      }

      // Scale based on charge
      const targetScale = particle.scale * (1 + particle.charge * 1.2);
      particle.currentScale = THREE.MathUtils.lerp(particle.currentScale, targetScale, 0.1);
      
      // Color interpolation based on charge
      particle.color.copy(baseColor).lerp(hoverColor, particle.charge);
      meshRef.current!.setColorAt(i, particle.color);
      
      dummy.rotation.copy(particle.rotation);
      dummy.rotation.x += time * particle.speed * (1 + particle.charge * 3);
      dummy.rotation.y += time * particle.speed * (1 + particle.charge * 3);
      
      dummy.scale.setScalar(particle.currentScale);
      dummy.updateMatrix();
      
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh 
      ref={meshRef} 
      args={[undefined, undefined, numShards]}
      onPointerMove={(e) => { e.stopPropagation(); setHovered(e.instanceId); }}
      onPointerOut={() => setHovered(undefined)}
    >
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial 
        roughness={0.2} 
        metalness={0.9} 
        transparent 
        opacity={0.8}
        wireframe={true}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

const DynamicEffects = ({ route }: { route: string }) => {
  const [bokeh, setBokeh] = useState(route === '/' ? 0 : 4);

  useEffect(() => {
    if (route !== '/') {
      setBokeh(4);
      return;
    }
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          // Ramp up bokeh from 0 to 4 as scroll goes from 200px to 600px
          let target = 0;
          if (sy > 200) {
            target = Math.min(4, ((sy - 200) / 400) * 4);
          }
          setBokeh(target);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Init
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [route]);

  return (
    <EffectComposer multisampling={4}>
      <DepthOfField target={[0, 0, -10]} focalLength={0.5} bokehScale={bokeh} height={700} />
      <Bloom 
        luminanceThreshold={1.5} 
        luminanceSmoothing={0.9} 
        intensity={1.5} 
        mipmapBlur 
      />
    </EffectComposer>
  );
};

const ShardCanvas = (props: ShardCanvasProps) => {
  return (
      <Canvas
        camera={{ position: [0, 0, 25], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: false }} // Better performance for post-processing
        eventSource={document.getElementById('root') as HTMLElement}
        eventPrefix="client"
      >
      <color attach="background" args={['#050508']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#ff8c00" />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <ShardInstancedMesh route={props.route || '/'} />
      </Float>
      
      <Sparkles count={150} scale={25} size={2.5} speed={0.4} color="#ff8c00" opacity={0.6} />
      
      <DynamicEffects route={props.route || '/'} />
    </Canvas>
  );
};

export default ShardCanvas;
