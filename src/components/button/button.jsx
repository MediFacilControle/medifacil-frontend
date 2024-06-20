import { ButtonStyle } from './button.style.ts'
import PropTypes from 'prop-types';

export const Button = ({ bgColor, color, width, text, ...props }) => {
    return (
        <ButtonStyle
            bgColor={bgColor}
            color={color}
            width={width}
            {...props}
        >{text}
        </ButtonStyle>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    width: PropTypes.string
};