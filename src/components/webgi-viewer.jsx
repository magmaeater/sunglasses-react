import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck,
    FileTransferPlugin,
    CanvasSnipperPlugin,
    AssetManagerBasicPopupPlugin, 
     


} from "webgi";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './web.css';
import { ScrollAnimation } from "./scroll-animation";

gsap.registerPlugin(ScrollTrigger);


function WebgiViewer() {

    const canvasRef = useRef(null);

    const memoizedScrollAnimation = useCallback(
        (position, target, onUpdate) => {

            if(position && target && onUpdate) {
                ScrollAnimation(position, target, onUpdate);
            }
        }

        , []);

    const setupViewer = useCallback(async () => {

                // Initialize the viewer
                const viewer = new ViewerApp({
                    canvas: canvasRef.current,
                })
                
                let camera = viewer.scene.activeCamera; 
                const position = camera.position;
                const target = camera.target;
            
                // Required for downloading files from the UI
                //await viewer.addPlugin(AssetManagerPlugin)

                await addBasePlugins(viewer)



                await viewer.addPlugin(AssetManagerBasicPopupPlugin)

                


                 // Required for downloading files from the UI
                await viewer.addPlugin(FileTransferPlugin)

            
                // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
                await viewer.addPlugin(CanvasSnipperPlugin)

                
                
            
                // Import and add a GLB file.
                await viewer.load("SG.glb")
            
                // Load an environment map if not set in the glb file
                // await viewer.setEnvironmentMap("./assets/environment.hdr");

                viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});

                window.scrollTo(0, 0);
                let needsUpdate = true;
                const onUpdate = () => {
                    needsUpdate = true;
                    viewer.setDirty();
                };

                viewer.addEventListener('preFrame', () => {
                    if (needsUpdate) {
                        viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});
                        needsUpdate = false;
                    }
                });

                memoizedScrollAnimation(position, target, onUpdate);
                    
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);


    
    return (

        <div id="webgi-canvas-container">

            <canvas id="webgi-canvas" ref={canvasRef}></canvas>

        </div>

    );
};

export default WebgiViewer;