import React, { Suspense, useMemo, useState, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import './ModelViewer.css';

// Loading fallback
function Loading() {
  return (
    <div className="model-loading">
      <div className="loading-spinner"></div>
      <p>Loading 3D Model...</p>
    </div>
  );
}

// 3D Model Component for GLB/GLTF files
function GLBModel({ url, position = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      position={position}
      scale={scale}
    />
  );
}

// 3D Model Component for FBX files
function FBXModel({ url, position = [0, 0, 0], scale = 1 }) {
  const fbx = useLoader(FBXLoader, url);
  const modelRef = useRef();

  const clonedScene = useMemo(() => fbx.clone(), [fbx]);

  return (
    <primitive 
      ref={modelRef}
      object={clonedScene} 
      position={position}
      scale={scale}
    />
  );
}

// Main Model Component that detects file type
function Model({ url, position = [0, 0, 0], scale = 1 }) {
  const isFBX = url.toLowerCase().endsWith('.fbx');
  
  if (isFBX) {
    return <FBXModel url={url} position={position} scale={scale} />;
  }
  
  return <GLBModel url={url} position={position} scale={scale} />;
}

// Error Boundary Component
function ModelError({ error }) {
  return (
    <div className="model-error">
      <p>⚠️ Unable to load 3D model</p>
      <p className="error-message">{error}</p>
      <p className="error-suggestion">
        {error.includes('FBX') 
          ? 'FBX format may require conversion to GLB for optimal web performance.'
          : 'Please check if the model file exists and is in a supported format (GLB/GLTF).'
        }
      </p>
    </div>
  );
}

// Main Model Viewer Component
const ModelViewer = ({ modelPath, title, description, className = '' }) => {
  const [error, setError] = useState(null);

  // Error handler for Canvas
  const handleCanvasError = (error) => {
    console.error('Canvas error:', error);
    setError(error.message || 'Failed to load 3D model');
  };

  // Model load error handler
  const handleModelError = (error) => {
    console.error('Model load error:', error);
    setError('Model file not found or unsupported format');
  };

  if (!modelPath) {
    return (
      <div className={`model-viewer-container ${className}`}>
        {title && <h3 className="model-title">{title}</h3>}
        {description && <p className="model-description">{description}</p>}
        <div className="model-canvas-wrapper">
          <div className="model-error">
            <p>No model path provided</p>
            <p className="error-suggestion">Please provide a valid GLB or FBX model URL.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`model-viewer-container ${className}`}>
      {title && <h3 className="model-title">{title}</h3>}
      {description && <p className="model-description">{description}</p>}
      <div className="model-canvas-wrapper">
        {error ? (
          <ModelError error={error} />
        ) : (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ 
              antialias: true,
              toneMapping: 1003, // ACESFilmic
              outputEncoding: 3001 // sRGBEncoding
            }}
            onError={handleCanvasError}
            style={{ width: '100%', height: '100%' }}
          >
            <Suspense fallback={<Loading />}>
              {/* Better lighting setup */}
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[10, 10, 5]} 
                intensity={1.2}
                castShadow
              />
              <pointLight 
                position={[-10, -10, -5]} 
                intensity={0.6} 
              />
              <hemisphereLight intensity={0.3} />
              
              {/* Model with error boundary */}
              <Model 
                url={modelPath} 
                scale={1}
                onError={handleModelError}
              />
              
              {/* Smooth Orbit Controls */}
              <OrbitControls 
                enableZoom={true}
                enablePan={false}
                minDistance={2}
                maxDistance={15}
                autoRotate
                autoRotateSpeed={0.5}
                dampingFactor={0.05}
                rotateSpeed={0.8}
              />
              
              {/* Enhanced Environment */}
              <Environment preset="studio" />
            </Suspense>
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default ModelViewer;
