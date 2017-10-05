import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: inline-block;
`

const Button = styled.button`
	background: #fbfbfb;
	color: #888;
	font-size: 18px;
	border: 0;
	padding-top: 5px;
	vertical-align: text-bottom;
	height: 34px;
	min-width: 36px;
	fill: #888;
	cursor: pointer;
	outline: none;

	&:hover,
	&:focus {
		background: #f3f3f3;
	}
`

export interface TriggerButtonOptions {
	child?: React.ReactNode
}

export default function createTriggerButton(options: TriggerButtonOptions): React.StatelessComponent<any> {
	return ({ onClick, theme }) => {
		return theme ? (
			<div className={theme.buttonWrapper}>
				<button onClick={onClick} className={theme.button}>{options.child || ''}</button>
			</div>
		) : (
			<Wrapper>
				<Button onClick={onClick}>{options.child || ''}</Button>
			</Wrapper>
		)
	}
}
