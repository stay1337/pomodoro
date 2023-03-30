import { useState } from 'react'

function Timer() {
	return (
		<div className='timer'>
			<div className='timer__btns'>
				<button className='timer__btn'>
					<i className='fa-solid fa-arrow-rotate-left'></i>
				</button>
				<button className='timer__btn'>
					<i className='fa-solid fa-play'></i>
				</button>
				<button className='timer__btn'>
					<i className='fa-solid fa-gear'></i>
				</button>
			</div>
			<div className='timer__clock'>
				<span className='timer__clock-minutes'>21</span> : <span className='timer__clock-seconds'>37</span>
			</div>
			<section className='timer__tasks'>
				<div className='timer__tasks-header'>
					<i className='fa-solid fa-file-lines'></i>
					<h4 className='timer__tasks-header-title'>Tasks</h4>
				</div>
				<form className='timer__tasks-form'>
					<input type='text' placeholder='Type task name...' className='timer__tasks-form-input' />
					<button className='timer__tasks-form-btn'>Add</button>
				</form>
				<ul className='timer__tasks-list'>
					<li className='timer__tasks-list-item'>
						<input className='timer__tasks-list-item-checkbox' type='checkbox' />
						<p className='timer__tasks-list-item-name'>Task 1</p>
						<button className='timer__tasks-list-item-delete'>
							<i className='fa solid fa-trash'></i>
						</button>
					</li>
					<li className='timer__tasks-list-item done'>
						<input className='timer__tasks-list-item-checkbox' type='checkbox' />
						<p className='timer__tasks-list-item-name'>Task 2</p>
						<button className='timer__tasks-list-item-delete'>
							<i className='fa solid fa-trash'></i>
						</button>
					</li>
					<li className='timer__tasks-list-item'>
						<input className='timer__tasks-list-item-checkbox' type='checkbox' />{' '}
						<p className='timer__tasks-list-item-name'>Task 3</p>
						<button className='timer__tasks-list-item-delete'>
							<i className='fa solid fa-trash'></i>
						</button>
					</li>
				</ul>
			</section>
			<section className='timer__notes'></section>
			<section className='timer__settings'></section>
		</div>
	)
}

export default Timer
