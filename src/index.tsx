import debug from 'debug'
import * as React from 'react'

import createTriggerButton from './util/trigger-button'

const d = debug('draft-js-plugin-editor-toolbar-picker')

export interface PickOptions {
	triggerItem: React.ReactNode
	items: React.ReactNode[],
	autoClose?: boolean,
	closeButton?: React.ReactNode
}

export default function createPicker(options: PickOptions) {
	options = {
		triggerItem: createTriggerButton({ child: 'Button' }),
		items: [],
		autoClose: true,
		closeButton: createTriggerButton({ child: <CloseIcon /> }),
		...options
	}

	class Picker extends React.Component<any, any> {
		componentDidMount() {
			setTimeout(() => { window.addEventListener('click', this.onWindowClick) })
		}

		componentWillUnmount() {
			window.removeEventListener('click', this.onWindowClick)
		}

		onWindowClick = () => {
			this.props.onOverrideContent(undefined)
			d('Hide sub menu')
		}

		render() {
			const CloseButton = options.closeButton as any
			return (
				<div>
					<span onClick={e => e.stopPropagation()}>
						{options.items.map((Button: any, index) => (
							<Button key={index} {...this.props} />
						))}
					</span>
					{options.autoClose
						? null
						: <span>
							<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
							<CloseButton onClick={this.onWindowClick} theme={this.props.theme} />
						</span>
					}
				</div>
			)
		}
	}

	return ({ onOverrideContent, theme }) => {
		const Trigger = options.triggerItem as any
		return (
			<Trigger onClick={() => {
				onOverrideContent(Picker)
				d('Show sub menu')
			}} theme={theme} />
		)
	}
}

export {
	createTriggerButton
}

function CloseIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg"
			width="24" height="24" viewBox={`-2 -2 20 20`}>
			<path d="M8.5,1C4.358,1,1,4.358,1,8.5C1,12.643,4.358,16,8.5,16c4.143,0,7.5-3.357,7.5-7.5C16,4.358,12.643,1,8.5,1z M11.975,5.732 L9.188,8.52l2.467,2.748c0.195,0.195,0.195,0.512,0,0.707s-0.512,0.195-0.707,0L8.481,9.227l-2.749,2.748 c-0.195,0.195-0.512,0.195-0.707,0c-0.195-0.195-0.195-0.512,0-0.707l2.787-2.787L5.346,5.732c-0.195-0.195-0.195-0.512,0-0.707 c0.195-0.195,0.512-0.195,0.707,0L8.52,7.774l2.748-2.749c0.195-0.195,0.512-0.195,0.707,0C12.17,5.22,12.17,5.537,11.975,5.732z" />
		</svg>
	)
}
