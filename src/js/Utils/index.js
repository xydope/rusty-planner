
export const getGrabOffset = ({ currentTarget, clientX, clientY }, rotateAngle = 0) => {
    return {
        left: clientX - currentTarget.getBoundingClientRect().left,
        top: clientY - currentTarget.getBoundingClientRect().top,
    }
}