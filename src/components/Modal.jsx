/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Modal = (props) => {


    const { description,image_link, features } = props.singleData;
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body grid grid-cols-2">
                            <h1 className="font-bold">Description: <span>{description}</span></h1>
                            <div>
                                <h1 className="text-xl font-bold">Features</h1>
                                { Object.values(features || {}).map((value, index) => <p key={index}> {index + 1}. {value.feature_name}</p>) }
                            </div>
                            <figure>
                                <img className="w-60 h-40" src={image_link ? image_link[0]: null} alt="Album" />
                            </figure>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Modal;