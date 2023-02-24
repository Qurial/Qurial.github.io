import cn from "classnames";
import React, { useEffect, useState } from "react";
import s from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
	let newStatus = React.createRef();
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)
	useEffect(() => {
		setStatus(props.status);
	}, [props.status])

	const activateEditMode = () => {
		if (props.isOwner) {
			setEditMode(true);
		}
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		if (status !== props.status) {
			props.updateStatus(status)
		}
	}

	const onStatusChange = () => {
		setStatus(newStatus.current.value)
	}
	return <>
		{(editMode)
			? <div
			className={s.statusEditing}>
				<input
					type="text"
					placeholder='your status'
					onBlur={deactivateEditMode}
					value={status}
					autoFocus={true}
					onChange={onStatusChange}
					ref={newStatus}
					maxLength={300} />
			</div>
			: <div>
				<span
					onDoubleClick={activateEditMode}
					className={cn({
						[s.statusNotEditing]: props.isOwner,
						[s.emptyStatus]: status ? null : s.emptyStatus,
					})}>
					{status || !props.isOwner ? status : 'write your status'}
				</span>
			</div>
		}
	</>
}
export default ProfileStatus;