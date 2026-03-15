import { Briefcase, Target, TrendingUp, Users } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';

const Analytics = () => {
    const stats = [
        {
            icon: Users,
            title: "Active Users",
            value: "2.4M+",
            growth: "+15%",
            color: "blue",
        },
        {
            icon: Briefcase,
            title: "Job Posted",
            value: "150K+",
            growth: "+22%",
            color: "purple",
        },
        {
            icon: Target,
            title: "Succesful Hires",
            value: "80K+",
            growth: "+10%",
            color: "green",
        },
        {
            icon: TrendingUp,
            title: "Match Mate",
            value: "94%",
            growth: "+8%",
            color: "orange",
        },
    ]; 

    return (
        <section className='py-20 bg-white relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Platform 
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            Analytics 
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Real-time insights and data-driven results that showcase the power of AI. 
                    </p>
                </motion.div>

                {/* stats cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
                    {stats.map((stat, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className='bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'
                        >
                            <div className='flex items-center justify-between'>
                                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                                </div>
                                <span className='text-green-500 text-sm font-semibold lg-green-50 px-2 py-1 rounded-full'>
                                    {stat.growth}
                                </span>
                            </div>
                            <h3 className='text-3xl font-bold text-gray-500 mb-2'>
                                {stat.value}
                            </h3>
                            <p className='text-gray-600'>
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Analytics