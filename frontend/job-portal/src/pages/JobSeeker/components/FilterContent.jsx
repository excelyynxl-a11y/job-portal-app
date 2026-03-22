import React from 'react';
import { CATEGORIES, JOB_TYPES } from '../../../utils/data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SalaryRangeSlider from '../../../components/Input/SalaryRangeSlider';
console.log(CATEGORIES);

const FilterSection = ({
    title,
    children,
    isExpanded, 
    onToggle 
}) => {
    return (
        <div className='border-b border-gray-200 pb-4 mb-4 last:border-b-0'>
            <button
                onClick={onToggle}
                className='flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors'
            >
                {title}
                {isExpanded ? 
                    (
                        <ChevronUp className='w-4 h-4' />
                    )
                    :
                    (
                        <ChevronDown className='w-4 h-4' />
                    )
                }
            </button>
            {isExpanded && children}
        </div>
    )
}


const FilterContent = ({
    toggleSection,
    clearAllFilters,
    expandedSections,
    filters,
    handleFilterChange,
}) => {
    // console.log(expandedSections);
  return (
    <>
        <div className='flex items-center justify-between mb-6'>
            <button 
                className='text-blue-600 hover:text-blue-700 font-semibold text-sm'
                onClick={clearAllFilters}
            >
                Clear All 
            </button>
        </div>

        {/* job type filter section */}
        <FilterSection
            title='Job Type'
            isExpanded={expandedSections?.jobType}
            onToggle={() => toggleSection('jobType')}
        >
            <div className='space-y-3'>
                {JOB_TYPES.map((type) => (
                    <label
                        key={type.value}
                        className='flex items-center cursor-pointer'
                    >
                        <input 
                            type='checkbox'
                            className='rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-500'
                            checked={filters?.type === type.value}
                            onChange={(e) => 
                                handleFilterChange('type', e.target.checked ? type.value : '')
                            }
                        />
                        <span className='ml-3 text-gray-700 font-medium'>
                            {type.value}
                        </span>
                    </label>
                ))}
            </div>
        </FilterSection>

        {/* salary range filter section */}
        <FilterSection
            title='Salary Range'
            isExpanded={expandedSections?.salaryRange}
            onToggle={() => toggleSection('salaryRange')}
        >
            <SalaryRangeSlider
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
        </FilterSection>

        {/* category filter section */}
        <FilterSection
            title='Category'
            isExpanded={expandedSections?.category}
            onToggle={() => toggleSection('category')}
        >
            <div className='space-y-3'>
                {CATEGORIES.map((category) => (
                    <label
                        key={category.value}
                        className='flex items-center cursor-pointer'
                    >
                        <input 
                            type='checkbox'
                            className='rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-500'
                            checked={filters?.category === category.value}
                            onChange={(e) => 
                                handleFilterChange('category', e.target.checked ? category.value : '')
                            }
                        />
                        <span className='ml-3 text-gray-700 font-medium'>
                            {category.value}
                        </span>
                    </label>
                ))}
            </div>
        </FilterSection>
    </>
  )
}

export default FilterContent