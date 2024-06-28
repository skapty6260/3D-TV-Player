import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Material } from 'three'

export function WitchRoom(props: any) {
	const {
		nodes,
		materials,
	}: { nodes: any; materials: { [name: string]: Material } } = useGLTF(
		'/assets/models/witchRoom/witchRoom.gltf'
	)
	return (
		<group {...props} dispose={null}>
			<group scale={0.1}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_Default_Material_0.geometry}
					material={materials.Default_Material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_Default_Material_0_1.geometry}
					material={materials.Default_Material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_Default_Material_0_2.geometry}
					material={materials.Default_Material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_Default_Material_0_3.geometry}
					material={materials.Default_Material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_preto_0.geometry}
					material={materials.preto}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_Cinza_0.geometry}
					material={materials.Cinza}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_piso_0.geometry}
					material={materials.piso}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_lambert1_0.geometry}
					material={materials.lambert1}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_pasted__preto_0.geometry}
					material={materials.pasted__preto}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_transparente_0.geometry}
					material={materials.transparente}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_pasted__lambert4_0.geometry}
					material={materials.pasted__lambert4}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_Branco_0.geometry}
					material={materials.Branco}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_Marrom_0.geometry}
					material={materials.Marrom}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_jooj_0.geometry}
					material={materials.jooj}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_VERMELHO_0.geometry}
					material={materials.VERMELHO}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['polySurface89_Arm��rio_0'].geometry}
					material={materials.Armrio}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.polySurface89_metal_0.geometry}
					material={materials.metal}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/scene.gltf')
