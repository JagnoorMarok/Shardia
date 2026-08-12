import { useEffect, useRef } from 'react';

interface ShardCanvasProps {
  route?: string;
}

const ShardCanvas = (props: ShardCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

    const routeRef = useRef(props.route || '/');
  useEffect(() => { routeRef.current = props.route || '/'; }, [props.route]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouse = { x: width / 2, y: height / 2, active: false };
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;
    let time = 0;

    let modeWeights = {
      HOME: 1,
      WORK: 0,
      STUDIO: 0,
      INSIGHTS: 0
    };


    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      
      const cx = width / 2;
      const cy = height / 2;
      // Reduce rotation multiplier from 0.002 to 0.0005 to prevent extreme shifting to one side
      targetRotationY = (mouse.x - cx) * 0.0005;
      targetRotationX = (mouse.y - cy) * 0.0005;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      targetRotationX = 0;
      targetRotationY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    type Point3D = { x: number, y: number, z: number };
    
    const rotateX = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x,
        y: p.y * cos - p.z * sin,
        z: p.y * sin + p.z * cos
      };
    };

    const rotateY = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x * cos + p.z * sin,
        y: p.y,
        z: -p.x * sin + p.z * cos
      };
    };

    const rotateZ = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x * cos - p.y * sin,
        y: p.x * sin + p.y * cos,
        z: p.z
      };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    type Face3D = number[];
    class Shard3D {
baseCenter: Point3D;
      gridPosition: Point3D;
      circuitPosition: Point3D;
      cardPosition: Point3D;
      nodePosition: Point3D;
      vertices: Point3D[];
      faces: Face3D[];
      baseHue: number;
      orbitSpeed: number;
      scale: number;
      rotX: number;
      rotY: number;
      rotZ: number;
      spinX: number;
      spinY: number;
      spinZ: number;
      mouseOffsetX: number;
      mouseOffsetY: number;
      mouseOffsetZ: number;

      constructor(index: number) {
        const phi = Math.acos(-1 + (2 * Math.random()));
        const theta = Math.sqrt(Math.PI * 150) * phi;
        
        const r = 150 + Math.random() * 80;
        this.baseCenter = {
          x: r * Math.cos(theta) * Math.sin(phi),
          y: r * Math.sin(theta) * Math.sin(phi),
          z: r * Math.cos(phi)
        };

        // Grid position for "Cloud" phase
        const cols = 5;
        const rows = 4;
        const col = index % cols;
        const row = Math.floor((index % (cols * rows)) / cols);
        const depth = Math.floor(index / (cols * rows));
        this.gridPosition = {
          x: (col - (cols - 1) / 2) * 200,
          y: (row - (rows - 1) / 2) * 200,
          z: (depth - 1) * 200 - 300 // Push slightly back
        };

        // Circuit Board Position (Work)
        // Rigid, orthogonal lines
        this.circuitPosition = {
          x: (Math.floor(Math.random() * 5) - 2) * 250,
          y: (Math.floor(Math.random() * 5) - 2) * 150,
          z: (Math.floor(Math.random() * 3) - 1) * 200 - 400
        };

        // Cards Position (Studio)
        // Grouped into 3 rectangular clusters
        const cluster = index % 3;
        const clusterX = (cluster - 1) * 400;
        this.cardPosition = {
          x: clusterX + (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 300,
          z: (Math.random() - 0.5) * 50 - 300
        };

        // Node Position (Insights)
        // All converged at center
        this.nodePosition = {
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50,
          z: (Math.random() - 0.5) * 50 - 200
        };

        this.orbitSpeed = (Math.random() - 0.5) * 0.04;
        
        this.rotX = Math.random() * Math.PI * 2;
        this.rotY = Math.random() * Math.PI * 2;
        this.rotZ = Math.random() * Math.PI * 2;
        
        this.spinX = (Math.random() - 0.5) * 0.05;
        this.spinY = (Math.random() - 0.5) * 0.05;
        this.spinZ = (Math.random() - 0.5) * 0.05;

        this.scale = Math.random() * 15 + 10;

        this.vertices = [];
        
        // Asymmetric Top Tip
        const topY = -this.scale * (1.0 + Math.random());
        const topX = (Math.random() - 0.5) * this.scale * 0.8;
        const topZ = (Math.random() - 0.5) * this.scale * 0.8;
        this.vertices.push({ x: topX, y: topY, z: topZ }); 
        
        // Asymmetric Bottom Tip
        const botY = this.scale * (1.0 + Math.random());
        const botX = (Math.random() - 0.5) * this.scale * 0.8;
        const botZ = (Math.random() - 0.5) * this.scale * 0.8;
        this.vertices.push({ x: botX, y: botY, z: botZ });  
        
        // Irregular jagged waist
        const numEquator = 3 + Math.floor(Math.random() * 3); // 3 to 5 sides
        for (let i = 0; i < numEquator; i++) {
           const a = (i / numEquator) * Math.PI * 2 + (Math.random() * 0.5 - 0.25);
           const rad = this.scale * (0.5 + Math.random() * 1.0);
           this.vertices.push({
             x: Math.cos(a) * rad,
             y: (Math.random() - 0.5) * this.scale * 1.2, 
             z: Math.sin(a) * rad
           });
        }
        
        this.faces = [];
        for (let i = 0; i < numEquator; i++) {
           const next = (i + 1) % numEquator;
           this.faces.push([0, 2 + i, 2 + next]);
           this.faces.push([1, 2 + next, 2 + i]);
        }

        this.baseHue = 15 + Math.random() * 30; // Amber/Orange
        
        this.mouseOffsetX = 0;
        this.mouseOffsetY = 0;
        this.mouseOffsetZ = 0;
      }

      getRenderData(time: number, scrollProgress: number, mouse: any, cx: number, cy: number, rotationX: number, rotationY: number, modeWeights: any, activeMode: string) {
        // scrollProgress is 0 to 1 over the 300vh spacer.
        // Phase 1 (Hero): 0 to 0.3 (fades out at 0.3)
        // Phase 2 (DB): 0.3 to 0.6
        // Phase 3 (Cloud): 0.6 to 1.0
        
        // p3 tracks the morphing into the cloud grid
        const p3 = Math.min(Math.max((scrollProgress - 0.6) / 0.3, 0), 1);

        // Base orbit
        const orbitP = rotateY(this.baseCenter, time * this.orbitSpeed);
        
        // HOME morphology
        let homeCenter = orbitP;
        if (p3 > 0) {
           const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
           const t = easeInOutQuad(p3);
           homeCenter = {
             x: lerp(orbitP.x, this.gridPosition.x, t),
             y: lerp(orbitP.y, this.gridPosition.y, t),
             z: lerp(orbitP.z, this.gridPosition.z, t)
           };
        }

        // Blend all modes based on weights
        let targetCenter = {
          x: homeCenter.x * modeWeights.HOME + this.circuitPosition.x * modeWeights.WORK + this.cardPosition.x * modeWeights.STUDIO + this.nodePosition.x * modeWeights.INSIGHTS,
          y: homeCenter.y * modeWeights.HOME + this.circuitPosition.y * modeWeights.WORK + this.cardPosition.y * modeWeights.STUDIO + this.nodePosition.y * modeWeights.INSIGHTS,
          z: homeCenter.z * modeWeights.HOME + this.circuitPosition.z * modeWeights.WORK + this.cardPosition.z * modeWeights.STUDIO + this.nodePosition.z * modeWeights.INSIGHTS
        };

        // Mode-specific rotations (flatten in non-HOME modes)
        const nonHomeWeight = modeWeights.WORK + modeWeights.STUDIO + modeWeights.INSIGHTS;
        
        // If in Cloud phase (p3) OR non-home mode, align rotations to face forward
        const flattenFactor = Math.min(p3 * modeWeights.HOME + nonHomeWeight, 1);
        
        this.rotX += this.spinX * (1 - flattenFactor);
        this.rotY += this.spinY * (1 - flattenFactor);
        this.rotZ += this.spinZ * (1 - flattenFactor);
        
        const targetRotX = lerp(this.rotX, 0, flattenFactor);
        const targetRotY = lerp(this.rotY, 0, flattenFactor);
        const targetRotZ = lerp(this.rotZ, 0, flattenFactor);


        // Expansion (Deploy explosion at the very end of the narrative)
        const explodeFactor = activeMode === 'HOME' ? Math.min(Math.max((scrollProgress - 0.9) / 0.1, 0), 1) : 0;
        
        // Use baseCenter to determine explosion direction, so it explodes uniformly in all directions
        const distToOrigin = Math.sqrt(this.baseCenter.x**2 + this.baseCenter.y**2 + this.baseCenter.z**2);
        const dir = distToOrigin > 0 ? { x: this.baseCenter.x/distToOrigin, y: this.baseCenter.y/distToOrigin, z: this.baseCenter.z/distToOrigin } : {x:0,y:0,z:1};

        // Per-shard mouse collision
        let targetMouseOffsetX = 0;
        let targetMouseOffsetY = 0;
        let targetMouseOffsetZ = 0;
        
        if (mouse.active) {
            let centerRot = { ...targetCenter };
            centerRot = rotateY(centerRot, rotationY);
            centerRot = rotateX(centerRot, rotationX);
            const fov = 1000;
            const projX = cx + centerRot.x * (fov / (fov + centerRot.z));
            const projY = cy + centerRot.y * (fov / (fov + centerRot.z));
            
            const dx = projX - mouse.x;
            const dy = projY - mouse.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            const radius = 250; // Interaction radius
            if (dist < radius && dist > 0.1) {
                const force = Math.pow((radius - dist) / radius, 2);
                targetMouseOffsetX = (dx / dist) * force * 150;
                targetMouseOffsetY = (dy / dist) * force * 150;
                targetMouseOffsetZ = force * 200; // push backwards
            }
        }
        
        // Lerp the offset for smooth collision
        this.mouseOffsetX += (targetMouseOffsetX - this.mouseOffsetX) * 0.15;
        this.mouseOffsetY += (targetMouseOffsetY - this.mouseOffsetY) * 0.15;
        this.mouseOffsetZ += (targetMouseOffsetZ - this.mouseOffsetZ) * 0.15;

        const currentCenter = {
          x: targetCenter.x + dir.x * (Math.pow(explodeFactor, 2) * 8.0) * 300 + this.mouseOffsetX,
          y: targetCenter.y + dir.y * (Math.pow(explodeFactor, 2) * 8.0) * 300 + this.mouseOffsetY,
          z: targetCenter.z + dir.z * (Math.pow(explodeFactor, 2) * 8.0) * 300 + this.mouseOffsetZ
        };



        const globalVertices = this.vertices.map(v => {
           let vt = rotateZ(v, targetRotZ);
           vt = rotateY(vt, targetRotY);
           vt = rotateX(vt, targetRotX);
           
           vt = {
             x: vt.x + currentCenter.x,
             y: vt.y + currentCenter.y,
             z: vt.z + currentCenter.z
           };
           
           vt = rotateY(vt, rotationY);
           vt = rotateX(vt, rotationX);
           return vt;
        });
        
        // Hue shifts to Blue/Cyan in Phase 3
        const targetHue = lerp(this.baseHue, 200, p3);
        const currentHue = (targetHue + Math.sin(time + this.baseCenter.x) * 10) % 360;

        return { globalVertices, faces: this.faces, hue: currentHue, center: currentCenter };
      }
    }

    const shards: Shard3D[] = [];
    const numShards = 40;
    for (let i = 0; i < numShards; i++) {
      shards.push(new Shard3D(i));
    }


    const animate = () => {
      if (!ctx || !canvas) return;
      time += 1;

      // Determine active mode based on route
      const activeMode = routeRef.current === '/work' ? 'WORK' :
                         routeRef.current === '/studio' ? 'STUDIO' :
                         routeRef.current === '/insights' ? 'INSIGHTS' : 'HOME';

      // Lerp weights
      modeWeights.HOME += ((activeMode === 'HOME' ? 1 : 0) - modeWeights.HOME) * 0.05;
      modeWeights.WORK += ((activeMode === 'WORK' ? 1 : 0) - modeWeights.WORK) * 0.05;
      modeWeights.STUDIO += ((activeMode === 'STUDIO' ? 1 : 0) - modeWeights.STUDIO) * 0.05;
      modeWeights.INSIGHTS += ((activeMode === 'INSIGHTS' ? 1 : 0) - modeWeights.INSIGHTS) * 0.05;

      // Calculate narrative progress (0 to 1 over the first 300vh)
      const vh = window.innerHeight;
      const rawScrollProgress = Math.min(Math.max(window.scrollY / (3 * vh), 0), 1);
      const scrollProgress = activeMode === 'HOME' ? rawScrollProgress : 1.0;

      // p3 tracks the morphing to cloud grid
      const p3 = Math.min(Math.max((scrollProgress - 0.6) / 0.3, 0), 1);
      
      // textOpacity fades out as DB phase starts
      const textOpacity = Math.max(1 - (scrollProgress / 0.3) * 2, 0);

      // explodeFactor for the final deployment transition (only on HOME)
      const explodeFactor = activeMode === 'HOME' ? Math.min(Math.max((scrollProgress - 0.9) / 0.1, 0), 1) : 0;
      const parallaxDampener = 1 - explodeFactor;

      // Background
      ctx.globalAlpha = 1.0;

      // Background
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);
      
      // Parallax rotation (dampened during explosion so shards fly straight)
      rotationX += ((targetRotationX * parallaxDampener) - rotationX) * 0.05;
      rotationY += ((targetRotationY * parallaxDampener) - rotationY) * 0.05;
      
      // Constant slow rotation if mouse inactive
      if (!mouse.active) {
        targetRotationY += 0.005 * parallaxDampener;
        targetRotationX += 0.002 * parallaxDampener;
      }

      const fov = 1000;
      const cx = width / 2;
      const cy = height / 2;
      const renderList: any[] = [];
      const shardCenters: Point3D[] = [];

      // Collect rendering data for shards
      for (let shard of shards) {
        const data = shard.getRenderData(time, scrollProgress, mouse, cx, cy, rotationX, rotationY, modeWeights, activeMode);
        shardCenters.push(data.center);
        
        for (let faceIndices of data.faces) {
           const v1 = data.globalVertices[faceIndices[0]];
           const v2 = data.globalVertices[faceIndices[1]];
           const v3 = data.globalVertices[faceIndices[2]];
           
           const avgZ = (v1.z + v2.z + v3.z) / 3;
           
           const dx1 = v2.x - v1.x;
           const dy1 = v2.y - v1.y;
           const dz1 = v2.z - v1.z;
           const dx2 = v3.x - v1.x;
           const dy2 = v3.y - v1.y;
           const dz2 = v3.z - v1.z;
           
           const nx = dy1*dz2 - dz1*dy2;
           const ny = dz1*dx2 - dx1*dz2;
           const nz = dx1*dy2 - dy1*dx2;
           
           const nlen = Math.sqrt(nx*nx + ny*ny + nz*nz);
           const normal = { x: nx/nlen, y: ny/nlen, z: nz/nlen };
           
           // Backface culling
           if (normal.z > 0.15) continue;
           
           renderList.push({
             isText: false,
             vertices: [v1, v2, v3],
             avgZ,
             normal,
             hue: data.hue
           });
        }
      }

      // Collect Networking Lines
      const baseLineOpacity = scrollProgress > 0.3 && scrollProgress < 0.65 
        ? (scrollProgress < 0.4 ? (scrollProgress - 0.3) * 10 : scrollProgress > 0.55 ? 1 - (scrollProgress - 0.55) * 10 : 1)
        : 0;
        
      const lineOpacity = Math.max(baseLineOpacity * modeWeights.HOME, modeWeights.WORK);
        
      if (lineOpacity > 0.01) {
          for (let i = 0; i < shardCenters.length; i++) {
            for (let j = i + 1; j < shardCenters.length; j++) {
              const c1 = shardCenters[i];
              const c2 = shardCenters[j];
              const dist = Math.sqrt(Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2) + Math.pow(c1.z - c2.z, 2));
              
              // In WORK mode, we only draw lines between nodes that share an axis (orthogonal circuit lines)
              let isOrthogonal = true;
              if (activeMode === 'WORK') {
                const diffX = Math.abs(c1.x - c2.x) > 10;
                const diffY = Math.abs(c1.y - c2.y) > 10;
                const diffZ = Math.abs(c1.z - c2.z) > 10;
                // If they differ in more than one axis, they are diagonal
                if ((diffX && diffY) || (diffY && diffZ) || (diffX && diffZ)) {
                  isOrthogonal = false;
                }
              }

              if (dist < 350 && (activeMode !== 'WORK' || isOrthogonal)) {
                const avgZ = (c1.z + c2.z) / 2;
                renderList.push({
                  isLine: true,
                  vertices: [c1, c2],
                  avgZ,
                  opacity: lineOpacity * (1 - dist / 350)
                });
              }
            }
          }
        }
      // Collect SHARDIA Text (Hero Phase)
      if (textOpacity > 0.01) {
        renderList.push({
          isText: true,
          avgZ: 0,
          text: "SHARDIA",
          opacity: textOpacity
        });
      }

      // Sort everything back-to-front
      renderList.sort((a, b) => b.avgZ - a.avgZ);


      // Core glowing orb (Amber/Orange to Blue in Phase 3, Cyan in Insights)
      const p3Target = p3 * modeWeights.HOME + modeWeights.WORK + modeWeights.STUDIO; // 200 hue
      const hue = modeWeights.INSIGHTS > 0.5 ? lerp(200, 180, modeWeights.INSIGHTS) : lerp(30, 200, p3Target); 
      
      const insightsGlow = modeWeights.INSIGHTS * 500;
      const coreR = 60 + (explodeFactor * 200) + insightsGlow;
      const coreOpacity = Math.max(0, 0.4 - explodeFactor + modeWeights.INSIGHTS * 0.4);
      
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
      gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, ${coreOpacity})`);
      gradient.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fill();

      // Render loop
      for (let item of renderList) {
        if (item.avgZ < -fov + 10) continue; // Behind camera

        if (item.isText) {
          const px = cx;
          const py = cy;
          const baseSize = Math.max(60, Math.min(width, height) * 0.15);
          const globalScale = baseSize + ((1 - textOpacity) * baseSize * 0.1); // Slight grow as it fades out
          const textStr = item.text as string;
          
          ctx.globalAlpha = item.opacity;
          ctx.font = `900 ${globalScale}px var(--font-display)`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          const letterSpacing = 15;
          const baseWidths = [];
          for (let i = 0; i < textStr.length; i++) {
             baseWidths.push(ctx.measureText(textStr[i]).width);
          }

          let totalWidth = baseWidths.reduce((a,b)=>a+b,0) + letterSpacing * (textStr.length - 1);
          let startX = px - totalWidth / 2;

          for (let i = 0; i < textStr.length; i++) {
             const char = textStr[i];
             const charW = baseWidths[i];
             const charX = startX + (charW / 2);
             const charY = py;

             ctx.font = `900 ${globalScale}px var(--font-display)`;
             ctx.shadowBlur = 30;
             ctx.shadowColor = 'rgba(255, 120, 0, 0.6)';
             
             const textGrad = ctx.createLinearGradient(charX - 50, charY - 50, charX + 50, charY + 50);
             textGrad.addColorStop(0, 'rgba(255, 240, 200, 0.9)');
             textGrad.addColorStop(0.4, 'rgba(255, 140, 0, 0.5)');
             textGrad.addColorStop(1, 'rgba(150, 40, 0, 0.7)');
             
             ctx.fillStyle = textGrad;
             ctx.globalCompositeOperation = 'lighter';
             ctx.fillText(char, charX, charY);
             ctx.globalCompositeOperation = 'source-over';
             
             ctx.shadowBlur = 0;
             ctx.lineWidth = 1;
             ctx.strokeStyle = 'rgba(255, 200, 100, 0.8)';
             ctx.strokeText(char, charX, charY);
             
             startX += charW + letterSpacing;
          }
          
          ctx.globalAlpha = 1.0;
          continue;
        }

        if (item.isLine) {
          const v1 = item.vertices[0];
          const v2 = item.vertices[1];
          
          let p1Rot = rotateZ(v1, 0); p1Rot = rotateY(p1Rot, rotationY); p1Rot = rotateX(p1Rot, rotationX);
          let p2Rot = rotateZ(v2, 0); p2Rot = rotateY(p2Rot, rotationY); p2Rot = rotateX(p2Rot, rotationX);

          const px1 = cx + p1Rot.x * (fov / (fov + p1Rot.z));
          const py1 = cy + p1Rot.y * (fov / (fov + p1Rot.z));
          const px2 = cx + p2Rot.x * (fov / (fov + p2Rot.z));
          const py2 = cy + p2Rot.y * (fov / (fov + p2Rot.z));

          ctx.beginPath();
          ctx.moveTo(px1, py1);
          ctx.lineTo(px2, py2);
          ctx.strokeStyle = `rgba(255, 140, 0, ${item.opacity * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          continue;
        }

        const v1 = item.vertices[0];
        const v2 = item.vertices[1];
        const v3 = item.vertices[2];
        
        const px1 = cx + v1.x * (fov / (fov + v1.z));
        const py1 = cy + v1.y * (fov / (fov + v1.z));
        const px2 = cx + v2.x * (fov / (fov + v2.z));
        const py2 = cy + v2.y * (fov / (fov + v2.z));
        const px3 = cx + v3.x * (fov / (fov + v3.z));
        const py3 = cy + v3.y * (fov / (fov + v3.z));
        
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.lineTo(px3, py3);
        ctx.closePath();
        
        const light = { x: -0.5, y: -0.5, z: -0.7 };
        const dot = item.normal.x * light.x + item.normal.y * light.y + item.normal.z * light.z;
        const intensity = Math.max(0, dot);
        
        const lightness = 20 + intensity * 60; 
        // Fade out shards significantly as narrative ends to not distract from content
        const baseOpacity = 0.5 + intensity * 0.4; 
        const explodeFactorOpacity = activeMode === 'HOME' ? Math.min(Math.max((scrollProgress - 0.9) / 0.1, 0), 1) : 0.5; // On other pages, keep some transparency so content is readable
        const opacity = baseOpacity * (1.0 - explodeFactorOpacity * 0.8);
        
        ctx.fillStyle = `hsla(${item.hue}, 90%, ${lightness}%, ${opacity})`;
        
        ctx.globalCompositeOperation = 'lighter';
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
        
        ctx.strokeStyle = `hsla(${item.hue}, 100%, ${lightness + 20}%, ${opacity * 0.7})`;
        ctx.lineWidth = Math.max(0.5, (fov / (fov + item.avgZ)) * 1.5);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ShardCanvas;
