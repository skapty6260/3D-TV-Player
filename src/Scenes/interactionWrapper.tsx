import React, { MouseEvent } from 'react'
import {
	EffectComposer,
	Outline,
	Select,
	Selection,
} from '@react-three/postprocessing'
import { Physics } from '@react-three/rapier'

interface IProps {
	selection: boolean
	children: React.ReactNode
}

export const InteractionWrapper = React.memo((props: IProps) => {
	return (
		<Physics debug>
			<Selection>
				<EffectComposer multisampling={8} autoClear={false}>
					{/* @ts-ignore */}
					<Outline visibleEdgeColor='white' edgeStrength={0.5} width={2000} />
				</EffectComposer>

				<Select enabled={props.selection}>{props.children}</Select>
			</Selection>
		</Physics>
	)
})
