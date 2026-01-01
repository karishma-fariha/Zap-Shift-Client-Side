import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName,review:testimonial,user_photoURL} = review;
    return (
        <div className="max-w-md">
            <div className="card bg-white shadow-md border border-base-200">
                <div className="card-body gap-4">

                    {/* Quote Icon */}
                    <FaQuoteLeft className="text-3xl text-primary" />

                    {/* Quote Text */}
                    <p className="text-base text-base-content/80 leading-relaxed">
                        {testimonial}
                    </p>

                    {/* Divider */}
                    <div className="w-full border-t-2 border-dashed border-secondary my-2"></div>

                    {/* Author Section */}
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-10 rounded-full bg-primary">
                                <img src={user_photoURL} alt="" />
                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-secondary">
                                {userName}
                            </p>
                            <p className="text-sm text-base-content/60">
                                Senior Product Designer
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;