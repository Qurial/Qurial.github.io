import React from "react";
import { act, create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatusHooks";
import { setStatus, updateStatus, getStatus } from "../../../../redux/ProfileReducer";

let props = {
    status: "Testing status",
    id: 1,
    getStatus: getStatus,
    updateStatus: updateStatus,
    setStatus: setStatus,
    match: {
        params: { userId: 1 }
    }
}
describe('Profile Status tests', () => {
    test('profile status should be displayed', () => {
        const component = create(<ProfileStatus {...props} />)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    })

    test('input should be displayed after double click on span', () => {
        const component = create(<ProfileStatus {...props} />)
        const root = component.root
        let span = root.findByType('span')
        act(() => span.props.onDoubleClick())
        let input = root.findByType('input')
        expect(input).not.toBeNull();
    })

    test('span should be removed after double click on it', () => {
        const component = create(<ProfileStatus {...props} />)
        const root = component.root
        let span = root.findByType('span')
        let f;
        act(() => span.props.onDoubleClick())

        try {
            root.findByType('span')
            f = false;
        }
        catch {
            f = true
        }
        expect(f).toBeTruthy();
    })

    test('span should display correct status', () => {
        const component = create(<ProfileStatus {...props} />)
        const root = component.root
        let span = root.findByType('span')
        expect(span.props.children).toBe(props.status);
    })
})