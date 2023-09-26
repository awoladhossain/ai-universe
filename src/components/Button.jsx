/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Button = ({ children }) => {
    return (
        <div className="text-center">
            <button className="btn btn-warning rounded-md">{children}</button>
        </div>
    );
};

export default Button;