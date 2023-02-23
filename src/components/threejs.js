import { useEffect } from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap';

import * as THREE from 'three';

const ThreeJayEss = () => {
    useEffect(() => {
        //scene
    const scene = new THREE.Scene();

    //Create our sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
        color: '#9C9C9C',
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh)

    //Sizes
    const sizes = {
        width: window.innerWidth *0.4,
        height: window.innerHeight
    }

    //Light
    const light = new THREE.PointLight('#7842f5', 1.7, 100)
    light.position.set(0,10,10)
    scene.add(light);

    let dirLight = new THREE.DirectionalLight(0xA3A300, 1.7);
    dirLight.position.set(-5, 5, 5);
    dirLight.castShadow = true;

    scene.add(dirLight);

    var ambLight = new THREE.AmbientLight(0x0D0C0C, 1.7);
    scene.add(ambLight);

    scene.background = null;

    //Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100);
    camera.position.z = 15;
    scene.add(camera)

    const canvas = document.getElementById('myThreJsCanvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true
    })

    renderer.setSize(sizes.width,sizes.height);
    renderer.setPixelRatio(2);
    renderer.render(scene, camera)

    window.addEventListener('resize', () => {
        camera.aspect = sizes.width/sizes.height
        camera.updateMatrixWorld()
        renderer.setSize(sizes.width, sizes.height)
        
    })

    //Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 8

    const loop = () => {
        controls.update();
        renderer.render(scene, camera)
        window.requestAnimationFrame(loop)
    }
    loop();

    //Timeline animation
    const t1 = gsap.timeline({defaults: {duration:1}})
    t1.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1});

    //Mouse animation color
    // let rgb = []
    // window.addEventListener("mouseover", (e) => {
    //     let rgb = [Math.round((e.pageX / sizes.width) * 255 * 0.40),
    //         Math.round((e.pageY / sizes.height) * 255),
    //         150
    //         ]
    //         //animation
    //         let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    //         gsap.to(mesh.material.color,{r: newColor.r, 
    //             g: newColor.g,
                
    //         })
    // })

    }, []);

    return(
        <div>
            <canvas id = "myThreJsCanvas" />
        </div>
    )
};
export default ThreeJayEss;
