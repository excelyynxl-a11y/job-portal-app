import React from 'react';
import { CATEGORIES, JOB_TYPES } from '../../utils/data';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, Building2, Clock, MapPin } from 'lucide-react';

const JobPostingPreview = ({
    formData,
    setIsPreview
}) => {
    const { user } = useAuth();
    const currencies = [{ value: 'RM', label: 'MYR'}]
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
                {/* header with glassmorphism effect */}
                <div className='mb-8 backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl rounded-2xl px-6 pt-6'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-4'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'>
                                Job Preview 
                            </h2>
                        </div>

                        <button
                            onClick={() => setIsPreview(false)}
                            className='group flex items-center space-x-2 px-6 py-3 text-sm font-medium text-gray-600 hover:text-white bg-white/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 border border-gray-200 hover:border-transparent rounded-xl transition-all duration-300 shadow-lg shadow-gray-100 hover:shadow-xl transform hover:-to-translate-y-0'
                        >
                            <ArrowLeft className='' />
                            <span>
                                Back to Edit 
                            </span>
                        </button>
                    </div>

                    {/* main content card */}
                    <div className=''>
                        {/* hero section */}
                        <div className=''>
                            <div className=''>
                                <div className=''>
                                    <div className=''>
                                        <h1 className=''>
                                            {formData.jobTitle}
                                        </h1>

                                        <div className=''>
                                            <div className=''>
                                                <MapPin className='' />
                                                <span className=''>
                                                    {formData.isRemote ? 'Remote' : formData.location}
                                                </span>
                                                {formData.isRemote && formData.location && (
                                                    <span className=''>
                                                        {" "}
                                                        • 
                                                        {formData.location}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {user?.companyLogo ? 
                                        (
                                            <img 
                                                src={user.companyLogo}
                                                alt='Company Logo'
                                                className=''
                                            />
                                        )
                                        :
                                        (
                                            <div className=''>
                                                <Building2 className='' />
                                            </div>
                                        )
                                    }
                                </div>

                                {/* tags */}
                                <div className=''>
                                    <span className=''>
                                        {
                                            CATEGORIES.find((c) => c.value === formData.category)?.label 
                                        }
                                    </span>
                                    <span className=''>
                                        {
                                            JOB_TYPES.find((j) => j.value === formData.jobType)?.label 
                                        }
                                    </span>
                                    <div className=''>
                                        <Clock className='' />
                                        <span>
                                            Posted today
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPostingPreview