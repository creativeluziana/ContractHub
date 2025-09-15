import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
  showDateFilter?: boolean;
  dateFilterValue?: string;
  onDateFilterChange?: (value: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  action,
  showDateFilter = false,
  dateFilterValue = '30d',
  onDateFilterChange
}) => {
  return (
    <div className="flex flex-col xs:flex-row items-center xs:items-start xs:justify-between gap-4">
      <div className="flex-1 text-center xs:text-left">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-light text-gray-900 tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-base xs:text-lg sm:text-xl text-gray-500 font-light">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center space-x-4 w-full xs:w-auto">
        {showDateFilter && (
          <select
            value={dateFilterValue}
            onChange={(e) => onDateFilterChange?.(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        )}
        {action}
      </div>
    </div>
  );
};

export default PageHeader;
